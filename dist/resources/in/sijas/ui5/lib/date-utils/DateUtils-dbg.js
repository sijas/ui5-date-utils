sap.ui.define([
], function (
) {
    "use strict";

    return {
        isValidDate: function (dDate) {
            if (Object.prototype.toString.call(dDate) !== "[object Date]" || isNaN(dDate.getTime())) {
                jQuery.sap.log.error("DateUtils invalid date=" + dDate);
                return false;
            }
            return true;
        },
        resetDateToStartOfDay: function (dDate) {
            if (this.isValidDate(dDate)) {
                dDate.setHours(0);
                dDate.setMinutes(0);
                dDate.setSeconds(0);
                dDate.setMilliseconds(0);
            }
        },
        resetDateToEndOfDay: function (dDate) {
            if (this.isValidDate(dDate)) {
                dDate.setHours(23);
                dDate.setMinutes(59);
                dDate.setSeconds(59);
                dDate.setMilliseconds(999);
            }
        },
        resetDateToStartOfMonth: function (dDate) {
            if (this.isValidDate(dDate)) {
                dDate.setDate(1);
                this.resetDateToStartOfDay(dDate);
            }
        },
        resetDateToEndOfMonth: function (dDate) {
            if (this.isValidDate(dDate)) {
                dDate.setDate(1);
                dDate.setMonth(dDate.getMonth() + 1);
                dDate.setDate(0);
                this.resetDateToEndOfDay(dDate);
            }
        },
        resetDateToEndOfDay: function (dDate) {
            if (this.isValidDate(dDate)) { }
        },
        resetDateToEndOfDay: function (dDate) {
            if (this.isValidDate(dDate)) { }
        },
        resetDateToEndOfDay: function (dDate) {
            if (this.isValidDate(dDate)) { }
        },
        resetDateToEndOfDay: function (dDate) {
            if (this.isValidDate(dDate)) { }
        },
        resetDateToEndOfDay: function (dDate) {
            if (this.isValidDate(dDate)) { }
        },
        resetDateToEndOfDay: function (dDate) {
            if (this.isValidDate(dDate)) { }
        },
        resetDateToEndOfDay: function (dDate) {
            if (this.isValidDate(dDate)) { }
        },
        resetDateToEndOfDay: function (dDate) {
            if (this.isValidDate(dDate)) { }
        }
    };
});