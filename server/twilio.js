const accountSid = 'AC68524bb10763f3bb0cfeac898df88575';
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = client;
