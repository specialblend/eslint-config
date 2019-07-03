const base = require('./base');
const rules = require('./react.rules');

const env = {
    ...base.env,
    browser: true,
};

const plugins = [
    ...base.plugins,
    'import',
    'jsx-a11y',
    'react',
];

const extensions = ['.js', '.jsx', '.json'];

const importIgnore = ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'];

const importResolver = {
    node: {
        extensions,
    },
};

const version = 'detect';

const settings = {
    ...base.settings,
    'import/ignore': importIgnore,
    'import/resolver': importResolver,
    react: {
        version,
    },
};

const parserOptions = {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
        modules: true,
        jsx: true,
        experimentalObjectRestSpread: true,
        experimentalDecorators: true,
    },
};

const react = {
    ...base,
    env,
    parserOptions,
    plugins,
    rules,
    settings,
};

module.exports = react;
