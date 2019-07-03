let base = null;
describe('/lib/node.js configuration module', () => {
    test('loads successfully', () => {
        base = require('./base');
    });
    test('exports an object', () => {
        expect(typeof base).toBe('object');
    });
    test('exports a rules key', () => {
        expect(base.rules).toBeDefined();
    });
    test('exports an env key', () => {
        expect(base.env).toBeDefined();
    });
    test('exports a plugins key', () => {
        expect(base.plugins).toBeDefined();
    });
    test('defined plugins, if any, should be strings', () => {
        base.plugins.forEach(p => expect(typeof p).toBe('string'));
    });
    test('exports a parser key', () => {
        expect(typeof base.parser).toBe('string');
    });
    test('exports a settings key', () => {
        expect(base.settings).toBeDefined();
    });
});
