const node = require('./node');
const lambdaRules = require('./lambda.rules');

const rules = {
    ...node.rules,
    ...lambdaRules,
};

const lambda = {
    ...node,
    rules,
};

module.exports = lambda;
