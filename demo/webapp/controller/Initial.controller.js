sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "in/sijas/ui5/lib/date-utils/DateUtils"
], function (
    Controller,
    JSONModel,
    DateUtils
) {
    "use strict";

    return Controller.extend("in.sijas.demo.date.utils.tour.controller.Initial", {
        /**
         * @override
         */
        onInit: function () {
            var aFunctionNames = Object.keys(DateUtils),
                aFunctions = [];
            aFunctionNames.forEach(function (fnName) {
                aFunctions.push({ name: fnName });
            });
            var oJsonModel = new JSONModel({
                date: new Date(),
                functions: aFunctions
            });
            this.getView().setModel(oJsonModel);
        },
        changeDate: function () {
            var oSelect = this.byId("idSelect"),
                sKey = oSelect.getSelectedKey(),
                oDatePicker = this.byId("idDatePicker"),
                oJsonModel = this.getView().getModel(),
                oDate = oDatePicker.getDateValue();

            DateUtils[sKey](oDate);

            oJsonModel.setProperty("/date", oDate)
        }
    });
});