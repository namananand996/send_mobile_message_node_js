// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'your token';
const authToken = 'your token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({from: '+16308845884', body: 'this is test msg', to: '+919663077540'})
      .then(message => console.log(message.sid))
      .done();
