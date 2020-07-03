const publicEnv = require('./');

Object.keys(publicEnv).forEach((key) => {
  process.env[key] = publicEnv[key];
});

