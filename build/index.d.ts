export declare class I18nManager {
    translationsPath: string;
    language: string;
    translations: any;
    constructor(translationsPath: string, language: string);
    setLanguage: (language: string) => void;
    setPath: (translationsPath: string) => void;
    getTranslations: () => any;
    searchNestedObject: (nestedObj: any, pathArr: any) => any;
    message: (key: any) => any;
    messageWithValue: (key: any, val: any) => any;
}
