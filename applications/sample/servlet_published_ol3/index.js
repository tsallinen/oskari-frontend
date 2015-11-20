jQuery(document).ready(function() {

    //TODO: remove the ugly ol3 hack once we have a way to build a working ol3... -debug
    jQuery.getScript("/Oskari/libraries/ol3/ol-v3.11.2-debug.js", function() {
        var getAppSetupParams = {};

        // populate getappsetup url with possible control parameters
        if (typeof window.controlParams === 'object') {
            for (key in window.controlParams) {
                if (window.controlParams.hasOwnProperty(key)) {
                    getAppSetupParams[key] = window.controlParams[key];
                }
            }
        }
        // NOTE! expects global variables language and preloaded from encapsulating page
        if (!(typeof window.language === 'string') || !window.language) {
            // default to english
            window.language = 'en';
        }
        Oskari.setLang(window.language);

        if (typeof window.preloaded !== 'boolean') {
            // default to false
            window.preloaded = false;
        }
        Oskari.setPreloaded(window.preloaded);

        jQuery.ajax({
            type : 'GET',
            dataType : 'json',
            data : getAppSetupParams,
            url: ajaxUrl + 'action_route=GetAppSetup',
            success : function(setup) {
                var app = Oskari.app;
                app.setApplicationSetup(setup);
                app.setConfiguration(setup.configuration);
                app.startApplication(function(startupInfos) {
                    // all bundles have been loaded
                });
            }
        });
    });

});