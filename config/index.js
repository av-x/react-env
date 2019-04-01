const chalk = require('chalk');

const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_URL: 'https://s3.amazonaws.com',
  API_TIMEOUT: 10000,
};
console.log(chalk.red('============ CURRENT CONFIG ============'));
console.log(ENV);
console.log(chalk.red('========================================'));

module.exports = ENV;
