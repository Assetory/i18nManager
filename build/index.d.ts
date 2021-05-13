export declare class I18nManager {
    path: string;
    language: string;
    translations: any;
    constructor(options: {
        language: string;
        path: string;
    });
    setLanguage: (language: string) => void;
    setPath: (path: string) => void;
    getTranslations: () => void;
    searchNestedObject: (nestedObj: any, pathArr: any) => string;
    message: (key: string) => string;
    messageWithValue: (key: string, val: any) => string;
}
