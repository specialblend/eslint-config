describe('index.js', () => {
    test('Exports ESLint config', () => {
        const config = require('./index');
        expect(config).toBeInstanceOf(Object);
    });
    describe('Exports correct ESLint settings', () => {
        const config = require('./index');
        expect(config).toHaveProperty('env');
        const { env } = config;
        test('Exports correct parserOptions', () => {
            expect(config).toHaveProperty('parserOptions');
            const { parserOptions } = config;
            expect(parserOptions).toHaveProperty('ecmaVersion', 2018);
            expect(parserOptions).toHaveProperty('ecmaFeatures');
            const { ecmaFeatures } = parserOptions;
            expect(ecmaFeatures).toHaveProperty('jsx', true);
            expect(parserOptions).toHaveProperty('sourceType', 'module');
        });
        describe('Exports correct env', () => {
            test('Node support is enabled', () => {
                expect(env).toHaveProperty('es6', true);
            });
            test('Node support is enabled', () => {
                expect(env).toHaveProperty('node', true);
            });
            test('Jest support is enabled', () => {
                expect(env).toHaveProperty('jest', true);
            });
        });
        test('Exports correct react settings', () => {
            expect(config).toHaveProperty('settings');
            const { settings } = config;
            expect(settings).toHaveProperty('react');
            const { react } = settings;
            expect(react).toHaveProperty('version');
        });
    });
});
