/*
 * openui5-date-utils
 * (c) Copyright 2020-2022 Mohammed Sijas
 * Licensed under the MIT license. See LICENSE file in the project root for full license information.
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
     * @version 1.0.0
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
        version: '1.0.0'
    });
});