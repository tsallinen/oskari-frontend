(function () {
    define(['_bundle/collections/layerGroupCollection'], function (LayerGroupCollection) {
        return Backbone.Model.extend({
            layerGroups: [],

            /**
             * Initialize
             *
             * @method initialize
             */
            initialize: function () {
                this.title = this.attributes.title;
                this.type = this.attributes.type;
                this.baseURL = this.attributes.baseUrl;
                this.actions = this.attributes.actions;
                this.layerGroups = this.attributes.grouping || [];
                this.layers = this.attributes.layers || [];
                this.filter = '';
            },


            /**
             * Return the name of this layerTab
             *
             * @method getTitle
             * @return {String} title
             */
            getTitle: function () {
                return this.title || this.names[Oskari.getDefaultLanguage()];
            },

            /**
             * Add layer groups
             * TODO: not used yet
             *
             * @method addLayerGroups
             * @param {Array} groups
             */
            addLayerGroups: function (groups) {
                this.layerGroups = groups;
            },

            /**
             * Return all layer groups
             *
             * @method getAllLayerGroups
             * @return {Array} groups
             */
            getAllLayerGroups: function () {
                return this.layerGroups;
            },
            /**
             * return group titles
             *
             * @method getGrouptitles
             * @param {Array} names of all these groups
             */
            getGroupTitles: function () {
                var groupNames = [],
                    i,
                    name;
                for (i = 0; i < this.layerGroups.length; i += 1) {
                    if (this.layerGroups[i].id) {
                        name = this.layerGroups[i].name;
                        if (!name) {
                            name = this.layerGroups[i].names[Oskari.getLang()];
                        }
                        groupNames.push({
                            name: name,
                            id: this.layerGroups[i].id
                        });
                    }
                }
                return groupNames;
            },
            /**
             * Return grouping title
             *
             * @method getGroupingTitle
             * @param {integer} index
             * @param {String} lang
             * @return {String} localized name
             */
            getGroupingTitle: function (index, lang) {
                var group = this.layerGroups[index];
                if (group.getTitle) {
                    return group.getTitle() + ' (' + group.models.length + ')';
                }
                return group.names[lang];
            },

            /**
             * Ajax call to save a group to backend.
             *
             * @method save
             * @param {Object} item group to save
             */
            save: function (item, callback) {
                var me = this;
                jQuery.ajax({
                    type: "POST",
                    dataType: 'json',
                    data : item,
                    url: me.baseURL + me.actions.save + "&iefix=" + (new Date()).getTime(),
                    success: function (pResp) {
                        me._saved(pResp);
                        if(callback) {
                            callback();
                        }
                    },
                    error: function (jqXHR, textStatus) {
                        if(callback /* && jqXHR.status !== 0 */) {
                            callback("Error while saving group " + textStatus);
                        }
                    }
                });
            },
            /**
             * Ajax success callback to save a group to backend.
             *
             * @method _saved
             * @private
             * @param {Object} item group that was saved
             */
            _saved : function(item) {
                var hasChanges = this._parseObjectToGroup(item);
                // trigger update if had changes
                if(hasChanges) {
                    // refresh layerGroups - is this really necessary?
                    this.set('layerGroups', this.layerGroups);
                    // trigger change event so that DOM will be re-rendered
                    this.trigger('change:layerGroups');
                }
            },
            /**
             * Ajax call to get classes / organizations from backend.
             * loadClasses function will be called if call succeeds
             *
             * @method getClasses
             * @param {String} baseUrl
             * @param {String} action_route
             */
            getClasses: function (groupingMethod) {
                var me = this;
                jQuery.ajax({
                    type: "GET",
                    dataType: 'json',
                    url: me.baseURL + me.actions.load + "&iefix=" + (new Date()).getTime(),
                    success: function (pResp) {
                        // cleanup old layer Groups since we always refresh from server for now
                        me.layerGroups = [];
                        me.loadGroups(pResp, groupingMethod);
                    },
                    error: function (jqXHR, textStatus) {
                        /*if (jqXHR.status !== 0) {
                            //                            console.log("Error while retrieving classes" + textStatus);
                        }*/
                    }
                });
            },

            /**
             * Reads given groups and adds data to this model..
             *
             * @method loadClasses
             * @param {Array} classes
             */
            loadGroups: function (classes, groupingMethod) {
                //console.log("loadClasses");
                var me = this;
                var groups = me.layerGroups;
                var results = classes[this.type];
                var hasChanges = false;
                _.each(results, function(item) {
                    var changes = me._parseObjectToGroup(item, groupingMethod);
                    if(!hasChanges) {
                        hasChanges = changes;
                    }
                });
                // trigger update if had changes
                if(hasChanges) {
                    // refresh layerGroups - is this really necessary?
                    me.set('layerGroups', groups);
                    // trigger change event so that DOM will be re-rendered
                    me.trigger('change:layerGroups');
                }
            },
            /**
             * Parse an ajax object to save a group to backend.
             *
             * @method _parseObjectToGroup
             * @private
             * @param {Object} item group to parse
             * @return {Boolean} true if changes
             */
            _parseObjectToGroup : function(item, groupingMethod) {
                var me = this;
                var groups = me.layerGroups;
                var defaultLanguage = Oskari.getLang();
                var loadedGroup = me.getGroup(item.id);
                var hasChanges = false;
                if(!loadedGroup) {
                    // create a new group if not found
                    hasChanges = true;
                    // first param is null because Backbone just works that way
                    loadedGroup = new LayerGroupCollection(null, item.name[defaultLanguage]);
                    loadedGroup.id = item.id;
                    loadedGroup.names = loadedGroup.names || {};
                    groups.push(loadedGroup);
                }
                // copy names
                for (var lang in item.name) {
                    if (item.name.hasOwnProperty(lang)) {
                        if(!hasChanges) {
                            // flag changed if not flagged before and name has changed
                            hasChanges = loadedGroup.names[lang] === item.name[lang];
                        }
                        loadedGroup.names[lang] = item.name[lang];
                    }
                }
                // update default name
                loadedGroup.name = loadedGroup.names[Oskari.getLang()];
                if(groupingMethod) {
                    me._mapLayersForGroup(loadedGroup, groupingMethod);
                }
                return hasChanges;
            },
            /**
             * returns layer groups so that they are grouped with given grouping method
             *
             * @method getLayerGroups
             * @private
             */
            _mapLayersForGroup: function (group, groupingMethod) {
                var me = this;
                // FIXME: this needs some performance tuning
                _.each(this.layers.models, function(layer) {
                    if (layer.getMetaType &&
                        layer.getMetaType() == 'published' ||
                        layer.getMetaType() == 'myplaces') {
                        // skip published layers
                        return;
                    }
                    var groupAttr = layer[groupingMethod]();
                    if(group.name === groupAttr) {
                        group.addLayer(layer);
                    }
                });
            },

            /**
             * Ajax call to remove a group to backend.
             *
             * @method remove
             * @param {Number} id for the group to remove
             */
            remove: function (id, callback) {
                if(!id) {
                    if(callback) {
                        callback('Id missing');
                    }
                    return;
                }
                var me = this;
                jQuery.ajax({
                    type: "POST",
                    dataType: 'json',
                    data : {
                        id : id
                    },
                    url: me.baseURL + me.actions.remove + "&iefix=" + (new Date()).getTime(),
                    success: function (pResp) {
                        me._removeClass(id);
                        if(callback) {
                            callback();
                        }
                    },
                    error: function (jqXHR, textStatus) {
                        if(callback /* && jqXHR.status !== 0 */) {
                            callback("Error while removing group " + textStatus);
                        }
                    }
                });
            },
            /**
             * Remove a class with given id
             *
             * @method removeClass
             * @param {integer} id of class/organization that needs to be removed
             * @private
             */
            _removeClass: function (id) {
                var groups = this.layerGroups;

                /*
                // TODO: layers should be removed from maplayerservice when an organization is removed!!
                // but not when an inspire theme is removed...
                var group = this.getGroup(id);
                var layers = group.getLayers();
                                element.trigger({
                                    type: "adminAction",
                                    command: 'removeLayer',
                                    modelId: me.model.getId(),
                                    baseLayerId: me.options.baseLayerId
                                });
                */
                for (var i = groups.length - 1; i >= 0; i -= 1) {
                    /// === wont match it correctly for some reason, maybe string from DOM attribute <> integer
                    if (groups[i].id == id) {
                        groups.splice(i, 1);
                        return;
                    }
                }

            },

            getGroup: function (groupId) {
                var groups = this.layerGroups;
                for (var i = 0; i <  groups.length; ++i) {
                    /// === wont match it correctly for some reason, maybe string from DOM attribute <> integer
                    if (groups[i].id == groupId) {
                        return groups[i];
                    }
                }
                return null;
            },
            /**
             * Removes a layer with given id
             *
             * @method removeLayer
             * @param {integer} groupId
             * @param {integer} layerId
             */
            removeLayer: function (groupId, layerId) {
                alert('CAN BE REMOVED? not called anywhere?');
                var group = this.getGroup(groupId);
                if(group) {
                    group.removeLayer(layerId);
                }
            },

            // TODO move encode and decode to model prototype so they're accessible to all models

            /**
             * Helper function. Encodes data to base64 format
             *
             * @method encode64
             * @param {Object} data
             * @return {String} encoded data
             */
            encode64: function (data) {
                //http://phpjs.org/functions/base64_encode/
                // http://kevin.vanzonneveld.net
                // +   original by: Tyler Akins (http://rumkin.com)
                // +   improved by: Bayron Guevara
                // +   improved by: Thunder.m
                // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                // +   bugfixed by: Pellentesque Malesuada
                // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                // +   improved by: Rafał Kukawski (http://kukawski.pl)
                // *     example 1: base64_encode('Kevin van Zonneveld');
                // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
                // mozilla has this native
                // - but breaks in 2.0.0.12!
                //if (typeof this.window['btoa'] == 'function') {
                //    return btoa(data);
                //}
                var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    o1,
                    o2,
                    o3,
                    h1,
                    h2,
                    h3,
                    h4,
                    bits,
                    i = 0,
                    ac = 0,
                    enc = "",
                    tmp_arr = [],
                    r;

                if (!data) {
                    return data;
                }

                do { // pack three octets into four hexets
                    o1 = data.charCodeAt(i += 1);
                    o2 = data.charCodeAt(i += 1);
                    o3 = data.charCodeAt(i += 1);

                    bits = o1 << 16 | o2 << 8 | o3;

                    h1 = bits >> 18 & 0x3f;
                    h2 = bits >> 12 & 0x3f;
                    h3 = bits >> 6 & 0x3f;
                    h4 = bits & 0x3f;

                    // use hexets to index into b64, and append result to encoded string
                    tmp_arr[ac += 1] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
                } while (i < data.length);

                enc = tmp_arr.join('');

                r = data.length % 3;

                return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

            },

            /**
             * Helper function. Decodes data from base64 format
             *
             * @method decode64
             * @param {Object} data (in base64 format)
             * @return {String} decoded data
             */
            decode64: function (data) {
                //http://phpjs.org/functions/base64_encode/
                // http://kevin.vanzonneveld.net
                // +   original by: Tyler Akins (http://rumkin.com)
                // +   improved by: Thunder.m
                // +      input by: Aman Gupta
                // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                // +   bugfixed by: Onno Marsman
                // +   bugfixed by: Pellentesque Malesuada
                // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                // +      input by: Brett Zamir (http://brett-zamir.me)
                // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
                // *     returns 1: 'Kevin van Zonneveld'
                // mozilla has this native
                // - but breaks in 2.0.0.12!
                //if (typeof this.window['atob'] == 'function') {
                //    return atob(data);
                //}
                var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    o1,
                    o2,
                    o3,
                    h1,
                    h2,
                    h3,
                    h4,
                    bits,
                    i = 0,
                    ac = 0,
                    dec = "",
                    tmp_arr = [];

                if (!data) {
                    return data;
                }

                data += '';

                do { // unpack four hexets into three octets using index points in b64
                    h1 = b64.indexOf(data.charAt(i += 1));
                    h2 = b64.indexOf(data.charAt(i += 1));
                    h3 = b64.indexOf(data.charAt(i += 1));
                    h4 = b64.indexOf(data.charAt(i += 1));

                    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

                    o1 = bits >> 16 & 0xff;
                    o2 = bits >> 8 & 0xff;
                    o3 = bits & 0xff;

                    if (h3 === 64) {
                        tmp_arr[ac += 1] = String.fromCharCode(o1);
                    } else if (h4 === 64) {
                        tmp_arr[ac += 1] = String.fromCharCode(o1, o2);
                    } else {
                        tmp_arr[ac += 1] = String.fromCharCode(o1, o2, o3);
                    }
                } while (i < data.length) {
                    dec = tmp_arr.join('');
                    return dec;
                }
            }

        });
    });
}).call(this);