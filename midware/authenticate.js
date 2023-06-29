const dotenv = require('dotenv');
dotenv.config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:10000',
  clientID: 'c0EB0TJqRNHuoEzqO6eKqEHIWc3UOZuH',
  issuerBaseURL: 'https://dev-js03z6vvwguaxggx.us.auth0.com'
};

module.exports = { config };
