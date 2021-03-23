const crypto = require('crypto-js');

exports.handler = user => {
  const HYVOR_TALK_SSO_PRIVATE_KEY = process.env.HYVOR_TALK_SSO_PRIVATE_KEY;

  const userData = Buffer.from(JSON.stringify(user)).toString('base64');
  const hash = crypto.HmacSHA1(userData, HYVOR_TALK_SSO_PRIVATE_KEY).toString();

  return {
    userData,
    hash
  }
}
