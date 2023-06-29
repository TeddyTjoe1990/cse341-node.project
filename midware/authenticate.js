require('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://cse341-project-b2zk.onrender.com',
  clientID: 'c0EB0TJqRNHuoEzqO6eKqEHIWc3UOZuH',
  issuerBaseURL: 'https://dev-js03z6vvwguaxggx.us.auth0.com'
};

module.exports = {config};
