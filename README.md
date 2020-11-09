# i18nManager

A simple i18n Module for JavaScript front- and back-end.

## Installation

```bash
$ npm i --save @shipyardsuite/i18n-manager
```

## Usage

### Perquisite

1. Create a folder called `i18n` in your applications root folder.
2. Create translation files named after the short form of the language and an index.js file in the folder, 
3. Import the translation files into the index file.

**EXAMPLE FILES:**

./i18n/de.js

```javascript
export const de = {
    test:
    {
        firstMessage: "Hallo Welt!",
        secondMessage: "Es {val}."
    }
};
```

./i18n/en.js

```javascript
export const en = {
    test:
    {
        firstMessage: "Hello World!",
        secondMessage: "This {val}."
    }
};

```

./i18n/index.js

```javascript
import { de } from './de';
import { en } from './en';

export { de, en };
export default { de, en };
```

### Getting translations

#### 1. Import the module.

**ES6:**
```javascript
import i18nManager from "@shipyardsuite/i18n-manager";
```

**NodeJS:**
```javascript
const i18nManager = require("@shipyardsuite/i18n-manager");
```

#### 2. Create an instance, and call the determined language (en, de, ...) in the constructor.

```javascript
const translations = new i18nManager();
```

#### 3. Call the message according to the json path you set up in the translation file.

```javascript
translations.message("test.sentence");
```

Or, if you need to supply a value

```javascript
translations.messageWithValue("test.sentence", value);
```

#### 5. Your output now should show the selected message, or [MISSING] if you did not set the right path.

## License

This project is released under the [Apache version 2](LICENSE) license.