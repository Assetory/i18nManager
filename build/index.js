"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nManager = void 0;
var fs_1 = __importDefault(require("fs"));
var I18nManager = /** @class */ (function () {
    function I18nManager(translationsPath, language) {
        var _this = this;
        this.setLanguage = function (language) {
            _this.language = language;
            _this.getTranslations();
        };
        this.setPath = function (translationsPath) {
            _this.translationsPath = translationsPath;
            _this.getTranslations();
        };
        this.getTranslations = function () {
            var rawdata = fs_1.default.readFileSync(_this.translationsPath + ("\\" + _this.language + ".json"));
            _this.translations = JSON.parse(rawdata);
        };
        this.searchNestedObject = function (nestedObj, pathArr) {
            return pathArr.reduce(function (obj, key) { return (obj && obj[key] !== 'undefined') ? obj[key] : undefined; }, nestedObj);
        };
        this.message = function (key) {
            var searchElements = key.split('.');
            var response = _this.searchNestedObject(_this.translations, searchElements);
            return response !== undefined ? response : '[MISSING]';
        };
        this.messageWithValue = function (key, val) {
            return _this.message(key) !== '[MISSING]' ? _this.message(key).replace('{val}', val) : _this.message(key);
        };
        this.translationsPath = translationsPath;
        this.language = language;
        this.translations = {};
        this.getTranslations();
    }
    return I18nManager;
}());
exports.I18nManager = I18nManager;
