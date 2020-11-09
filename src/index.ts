import fs from 'fs';
import path from 'path';

export class I18nManager
{
    translationsPath : string;
    language : string;
    translations : any;

    constructor(translationsPath : string, language : string)
    {
        this.translationsPath = translationsPath;
        this.language = language;
        this.translations = {};

        this.getTranslations();
    }

    setLanguage = (language : string) : void =>
    {
        this.language = language;

        this.getTranslations();
    };

    setPath = (translationsPath : string) : void =>
    {
        this.translationsPath = translationsPath;

        this.getTranslations();
    };

    getTranslations = () : any =>
    {
        let rawdata : any = fs.readFileSync(this.translationsPath + `\\${this.language}.json`);
        this.translations = JSON.parse(rawdata);
    };

    searchNestedObject = (nestedObj : any, pathArr : any) =>
    {
        return pathArr.reduce((obj : any, key : string) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
    }

    message = (key : any) =>
    {
        const searchElements = key.split('.');
        const response = this.searchNestedObject(this.translations, searchElements);

        return response !== undefined ? response : '[MISSING]';
    };

    messageWithValue = (key : any, val : any) =>
    {
        return this.message(key) !== '[MISSING]' ? this.message(key).replace('{val}', val) : this.message(key);
    };
}
