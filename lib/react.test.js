let react;

describe('/lib/react.js configuration module', () => {
    test('module loads successfully', () => {
        react = require('./react');
    });
    test('exports an object', () => {
        expect(typeof react).toBe('object');
    });
    test('exports a rules key', () => {
        expect(react.rules).toBeDefined();
    });
    test('exports an env key', () => {
        expect(react.env).toBeDefined();
    });
    test('exports a plugins key', () => {
        expect(react.plugins).toBeDefined();
    });
    test('defined plugins, if any, should be strings', () => {
        react.plugins.forEach(p => expect(typeof p).toBe('string'));
    });
    test('exports a parser key', () => {
        expect(typeof react.parser).toBe('string');
    });
    test('exports a settings key', () => {
        expect(react.settings).toBeDefined();
    });
});
