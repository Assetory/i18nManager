import { expect } from 'chai';
import { isThrowStatement } from 'typescript';
import { I18nManager } from '../src/index';

let translations = new I18nManager('./tests/i18n', 'en');

console.log(translations.translationsPath);

describe('i18nManager', () =>
{
    it('should create an instance', () =>
    {
        expect(translations).to.not.equal(undefined);
    });

    it('should set language to english as default', () =>
    {
        expect(translations.language).to.equal('en');
    });

    it('should change language to german', () =>
    {
        translations.setLanguage('de');

        expect(translations.language).to.equal('de');
    });
    
    it('should load example translations', () =>
    {
        translations.setPath('./tests/i18n/');
        expect(translations.translations).to.not.equal(undefined);
    });

    it('should not find a message', () =>
    {
        translations.setLanguage('en');
        expect(translations.message('test.test')).to.equal('[MISSING]');
    });

    it('should not find a message with value', () =>
    {
        expect(translations.messageWithValue('test.test', 'test')).to.equal('[MISSING]');
    });

    it('should get an example message in english', () =>
    {
        expect(translations.message('test.firstMessage')).to.equal('Hello World!');
    });

    it('should get an example message with value in english', () =>
    {
        expect(translations.messageWithValue('test.secondMessage', 'works')).to.equal('This works.');
    });

    it('should get an example message in german', () =>
    {
        translations.setLanguage('de');
        expect(translations.message('test.firstMessage')).to.equal('Hallo Welt!');
    });

    it('should get an example message with value german', () =>
    {
        expect(translations.messageWithValue('test.secondMessage', 'funktioniert')).to.equal('Es funktioniert.');
    });
});
