require('dotenv').config()
module.exports = {
  env: {
    REACT_APP_AWS_REGION: process.env.REACT_APP_AWS_REGION,
    REACT_APP_GATEWAY_URL: process.env.REACT_APP_GATEWAY_URL,
    REACT_APP_USER_POOL: process.env.REACT_APP_USER_POOL,
    REACT_APP_APP_CLIENT: process.env.REACT_APP_APP_CLIENT,
    REACT_APP_IDENTITY_POOL: process.env.REACT_APP_IDENTITY_POOL,
  },
}