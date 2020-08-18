"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var albumPhotoController_1 = __importDefault(require("./albumPhotoController"));
var eventController_1 = __importDefault(require("./eventController"));
var bestPhotoController_1 = __importDefault(require("./bestPhotoController"));
var photoController_1 = __importDefault(require("./photoController"));
function default_1(app) {
    app.use('/albumPhoto', albumPhotoController_1.default);
    app.use('/event', eventController_1.default);
    app.use('/bestPhoto', bestPhotoController_1.default);
    app.use('/photo', photoController_1.default);
}
exports.default = default_1;
