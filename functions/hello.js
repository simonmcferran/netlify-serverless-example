// functions/hello.js
exports.handler = async event => {
  const { MY_NAME } = process.env

  const subject = event.queryStringParameters.name || MY_NAME
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  }
}
