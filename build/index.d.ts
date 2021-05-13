export declare class I18nManager {
    source: any;
    language: string;
    translations: any;
    constructor(options: {
        language: string;
        source: any;
    });
    setLanguage: (language: string) => void;
    setSource: (source: any) => void;
    getTranslations: () => void;
    searchNestedObject: (nestedObj: any, pathArr: any) => string;
    message: (key: string) => string;
    messageWithValue: (key: string, val: any) => string;
}
