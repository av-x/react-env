const config = require('./config');

module.exports = {
  verbose: false,
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'process.env.API_URL': 'test',
  },
};
