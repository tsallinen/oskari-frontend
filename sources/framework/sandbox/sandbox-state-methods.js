/**
 * @class Oskari.mapframework.sandbox.Sandbox.stateMethods
 *
 * This category class adds state methods to Oskari sandbox as they were in
 * the class itself.
 */
Oskari.clazz.category('Oskari.mapframework.sandbox.Sandbox', 'state-methods',
{
    /**
     * @method registerAsStateful
     * Registers given bundle instance to sandbox as stateful
     *
     * @param {String}
     *            pBundleId bundle instance id to which the state will be mapped
     * to
     * @param {Oskari.bundle.BundleInstance}
     *            pInstance reference to actual bundle instance
     */
    registerAsStateful : function(pBundleId, pInstance) {
        this._statefuls[pBundleId] = pInstance;
    },

    /**
     * @method unregisterStateful
     * Unregisters given bundle instance from stateful bundles in sandbox
     *
     * @param {String}
     *            pBundleId bundle instance id which to unregister
     */
    unregisterStateful : function(pBundleId) {
        this._statefuls[pBundleId] = null;
        delete this._statefuls[pBundleId];
    },

    /**
     * @method getStatefulComponents
     * Returns an object that has references to stateful components (see
     * #registerAsStateful).
     * The objects propertynames match the instance id and property value is
     * reference to the stateful component.
     * @return {Object}
     */
    getStatefulComponents : function() {
        return this._statefuls;
    },

    /**
     * @method resetState
     * Resets the state to the initial state.
     */
    resetState: function() {

    }
});
