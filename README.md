# i18nManager

A simple i18n Module for TypeScript/JavaScript front- and back-end.

## Installation

```bash
$ npm i --save @assetory/i18n-manager
```

## Usage

### Perquisite

1. Create a directory called `i18n` in your applications root folder.
2. Create translation files named after the short form of the language and an index.js file in the folder, 
3. Import the translation files into the index file.

### EXAMPLE FILES:

`./i18n/de.ts` or `./i18n/de.js`:

```typescript
{
    test:
    {
        firstMessage: "Hallo Welt!",
        secondMessage: "Es {val}."
    }
}
```

`./i18n/en.ts` or `./i18n/en.js`:

```typescript
{
    test:
    {
        firstMessage: "Hello World!",
        secondMessage: "This {val}."
    }
}

```

### Getting translations

#### 1. Import the module.

**TypeScript:**
```typescript
import i18nManager from "@assetory/i18n-manager";
```

**JavaScript:**
```javascript
const i18nManager = require("@assetory/i18n-manager");
```

#### 2. Create an instance, and call the determined language (en, de, ...) in the constructor.

```javascript
const translations = new i18nManager('path_to_i18n_directory', 'en');
```

#### 3. Call the message according to the json path you set up in the translation file.

```javascript
translations.message("test.sentence");
```

Or, if you need to supply a value

```javascript
translations.messageWithValue("test.sentence", value);
```

#### 5. Your output now should show the selected message, or [MISSING] if the translation has not been found.

## License

This project is released under the [Apache version 2](LICENSE) license.