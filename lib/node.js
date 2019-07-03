const base = require('./base');
const nodeRules = require('./node.rules');

const rules = {
    ...base.rules,
    ...nodeRules,
};

const env = {
    ...base.env,
    node: true,
};

const node = {
    ...base,
    env,
    rules,
};

module.exports = node;
