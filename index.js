// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACd1c0b1c33a1b11ac49bcc710164397b8';
const authToken = '9b20c364012c05ad4bef5d03173057da';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({from: '+16308845884', body: 'this is test msg', to: '+919663077540'})
      .then(message => console.log(message.sid))
      .done();
