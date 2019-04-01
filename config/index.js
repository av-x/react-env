const chalk = require('chalk');
const isProduction = process.env.NODE_ENV === 'production';

const ENV = {
  NODE_ENV: 'production',
  API_URL: 'http://localhost:3000',
  API_TIMEOUT: 10000,
};
console.log(chalk.red('============ CURRENT CONFIG ============'));
console.log(ENV);
console.log(chalk.red('========================================'));

module.exports = ENV;
