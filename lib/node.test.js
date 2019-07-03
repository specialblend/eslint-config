let node;

describe('/lib/node.js configuration module', () => {
    test('loads successfully', () => {
        node = require('./node');
    });
    test('exports an object', () => {
        expect(typeof node).toBe('object');
    });
    test('exports a rules key', () => {
        expect(node.rules).toBeDefined();
    });
    test('exports an env key', () => {
        expect(node.env).toBeDefined();
    });
    test('exports a plugins key', () => {
        expect(node.plugins).toBeDefined();
    });
    test('defined plugins, if any, should be strings', () => {
        node.plugins.forEach(p => expect(typeof p).toBe('string'));
    });
    test('exports a parser key', () => {
        expect(typeof node.parser).toBe('string');
    });
    test('exports a settings key', () => {
        expect(node.settings).toBeDefined();
    });
});
