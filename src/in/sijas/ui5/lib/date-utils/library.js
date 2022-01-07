/*
 * ${copyright}
 */

sap.ui.define([
    'sap/ui/core/library'
], function () {
    'use strict';

    /**
     * OpenUI5 library: in.sijas.ui5.lib.date-utils
     *
     * @namespace
     * @name in.sijas.ui5.lib.date-utils
     * @author Mohammed Sijas
     * @version ${version}
     * @public
     */
    return sap.ui.getCore().initLibrary({
        name: 'in.sijas.ui5.lib.date-utils',
        dependencies: [
            'sap.ui.core',
            "sap.m"
        ],
        controls: [
            'in.sijas.ui5.lib.date-utils.DateUtils'
        ],
        noLibraryCSS: true,
        version: '${version}'
    });
});