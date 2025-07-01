/**
 * Application configuration
 */

const config = {
  development: {
    port: process.env.PORT || 3000,
    logLevel: 'debug',
    apiUrl: 'http://localhost:3000/api'
  },
  test: {
    port: process.env.PORT || 3001,
    logLevel: 'error',
    apiUrl: 'http://localhost:3001/api'
  },
  production: {
    port: process.env.PORT || 8080,
    logLevel: 'info',
    apiUrl: process.env.API_URL || 'https://api.example.com'
  }
};

// Determine which environment to use
const env = process.env.NODE_ENV || 'development';

module.exports = config[env];