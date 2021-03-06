"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nManager = void 0;
var I18nManager = /** @class */ (function () {
    function I18nManager(options) {
        var _this = this;
        this.setLanguage = function (language) {
            _this.language = language;
            _this.getTranslations();
        };
        this.setSource = function (source) {
            _this.source = source;
            _this.getTranslations();
        };
        this.getTranslations = function () {
            try {
                _this.translations = _this.source[_this.language];
            }
            catch (error) {
                Error(error);
            }
        };
        this.searchNestedObject = function (nestedObj, pathArr) {
            return pathArr.reduce(function (obj, key) { return obj && obj[key] !== 'undefined' ? obj[key] : undefined; }, nestedObj);
        };
        this.message = function (key) {
            var searchElements = key.split('.');
            var response = _this.searchNestedObject(_this.translations, searchElements);
            return response !== undefined ? response : '[MISSING]';
        };
        this.messageWithValue = function (key, val) {
            return _this.message(key) !== '[MISSING]' ? _this.message(key).replace('{val}', val) : _this.message(key);
        };
        this.source = options === null || options === void 0 ? void 0 : options.source;
        this.language = options === null || options === void 0 ? void 0 : options.language;
        this.translations = {};
        this.getTranslations();
    }
    return I18nManager;
}());
exports.I18nManager = I18nManager;
