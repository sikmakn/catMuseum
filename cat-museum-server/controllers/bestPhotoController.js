"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bestPhotoRepository = __importStar(require("../db/repositories/bestPhotoRepository"));
var multer_1 = __importDefault(require("multer"));
var photoRepository = __importStar(require("../db/repositories/photoRepository"));
var auth_1 = require("../auth");
var logger_1 = require("../logger");
var storage = multer_1.default.memoryStorage();
var upload = multer_1.default({ storage: storage });
var router = express_1.Router();
router.post('/', auth_1.auth, upload.single('photo'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, contentType, originalName, buffer, photoId, newAlbumPhoto, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.file, contentType = _a.mimetype, originalName = _a.originalname, buffer = _a.buffer;
                return [4 /*yield*/, photoRepository.create({ originalName: originalName, contentType: contentType, buffer: buffer })];
            case 1:
                photoId = _b.sent();
                return [4 /*yield*/, bestPhotoRepository.create({ photoId: photoId })];
            case 2:
                newAlbumPhoto = _b.sent();
                res.json(newAlbumPhoto);
                return [3 /*break*/, 4];
            case 3:
                e_1 = _b.sent();
                if (e_1.name == 'ValidationError')
                    return [2 /*return*/, res.status(400).send({ error: e_1.message })];
                logger_1.logger.error(e_1.stack);
                res.status(500).send({ error: 'Server error' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.get('/all', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var albumPhotos, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bestPhotoRepository.getAll()];
            case 1:
                albumPhotos = _a.sent();
                res.json(albumPhotos);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                logger_1.logger.error(e_2.stack);
                res.status(500).send({ error: 'Server error' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.delete('/:id', auth_1.auth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, photoId, deleted, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                id = req.params.id;
                return [4 /*yield*/, bestPhotoRepository.findById(id)];
            case 1:
                photoId = (_a.sent()).photoId;
                return [4 /*yield*/, photoRepository.removeById(photoId)];
            case 2:
                _a.sent();
                return [4 /*yield*/, bestPhotoRepository.removeById(id)];
            case 3:
                deleted = _a.sent();
                res.json(deleted);
                return [3 /*break*/, 5];
            case 4:
                e_3 = _a.sent();
                if (e_3.name == 'ValidationError')
                    return [2 /*return*/, res.status(400).send({ error: e_3.message })];
                logger_1.logger.error(e_3.stack);
                res.status(500).send({ error: 'Server error' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
