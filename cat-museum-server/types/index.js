"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventType = exports.eventStatus = void 0;
var eventStatus;
(function (eventStatus) {
    eventStatus["now"] = "now";
    eventStatus["future"] = "future";
})(eventStatus = exports.eventStatus || (exports.eventStatus = {}));
var eventType;
(function (eventType) {
    eventType["exhibition"] = "exhibition";
    eventType["competition"] = "competition";
})(eventType = exports.eventType || (exports.eventType = {}));
