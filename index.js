'use strict';

module.exports = {
  rules: {
    'case-sensitive': require('./src/rules/case-sensitive'),
    'no-cycles': require('./src/rules/no-cycles'),
    'no-unresolved': require('./src/rules/no-unresolved'),
    'require-json-ext': require('./require-json-ext'),
  },
  rulesConfig: {
    'case-sensitive': 0,
    'no-cycles': 0,
    'no-unresolved': 0,
    'require-json-ext': 0,
  },
};
