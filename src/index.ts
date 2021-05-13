export class I18nManager
{
    path : string;
    language : string;
    translations : any;

    constructor(options: { language: string; path : string })
    {
        this.path = options?.path;
        this.language = options?.language;
        this.translations = {};

        this.getTranslations();
    }

    setLanguage = (language : string) : void =>
    {
        this.language = language;

        this.getTranslations();
    };

    setPath = (path : string) : void =>
    {
        this.path = path;

        this.getTranslations();
    };

    getTranslations = () : void =>
    {
        try
        {
            const translations = require(this.path);
            this.translations = translations[ this.language ];
        }
        catch (error)
        {
            Error( error );
        }
    }

    searchNestedObject = (nestedObj : any, pathArr : any) : string =>
    {
        return pathArr.reduce((obj : any, key : string) => obj && obj[ key ] !== 'undefined' ? obj[ key ] : undefined, nestedObj);
    }

    message = (key : string) : string =>
    {
        const searchElements = key.split('.');
        const response = this.searchNestedObject(this.translations, searchElements);

        return response !== undefined ? response : '[MISSING]';
    };

    messageWithValue = (key : string, val : any) : string =>
    {
        return this.message(key) !== '[MISSING]' ? this.message(key).replace('{val}', val) : this.message(key);
    };
}
