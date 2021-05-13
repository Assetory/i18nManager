import { expect } from 'chai';
import { I18nManager } from '../src/index';

import * as translations from './i18n';

const i18nManager = new I18nManager({ language: 'en', source: translations });

describe('i18nManager', () =>
{
    it('should create an instance', () =>
    {
        expect(i18nManager).to.not.equal(undefined);
    });

    it('should set language to english as default', () =>
    {
        expect(i18nManager.language).to.equal('en');
    });

    it('should change language to german', () =>
    {
        i18nManager.setLanguage('de');

        expect(i18nManager.language).to.equal('de');
    });
    
    it('should load example translations', () =>
    {
        i18nManager.setSource(translations);
        expect(i18nManager.translations).to.not.equal(undefined);
    });

    it('should not find a message', () =>
    {
        i18nManager.setLanguage('en');
        expect(i18nManager.message('test.test')).to.equal('[MISSING]');
    });

    it('should not find a message with value', () =>
    {
        expect(i18nManager.messageWithValue('test.test', 'test')).to.equal('[MISSING]');
    });

    it('should get an example message in english', () =>
    {
        expect(i18nManager.message('test.firstMessage')).to.equal('Hello World!');
    });

    it('should get an example message with value in english', () =>
    {
        expect(i18nManager.messageWithValue('test.secondMessage', 'works')).to.equal('This works.');
    });

    it('should get an example message in german', () =>
    {
        i18nManager.setLanguage('de');
        expect(i18nManager.message('test.firstMessage')).to.equal('Hallo Welt!');
    });

    it('should get an example message with value german', () =>
    {
        expect(i18nManager.messageWithValue('test.secondMessage', 'funktioniert')).to.equal('Es funktioniert.');
    });

    it('should throw an error if no translations are found', () =>
    {
        i18nManager.setSource({});
        
        expect(i18nManager.translations).to.equal(undefined);
    });
});
