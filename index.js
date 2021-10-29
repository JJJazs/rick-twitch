

const tmi = require('tmi.js');
const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: 'JJJazs',
        password: 'oauth'
    },
    channels: [ 'JJJazs' ]
});

//new oauth: https://twitchapps.com/tmi/

client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
    if(self) return;
    if(message.toLowerCase() === '!hello') {
        client.say(channel, `@${tags.username}, heya!`);
    }

    var words = message.toLowerCase().split(" ");

    if(words[0] === "!roll") {

        let randomNumber = Math.random();
        let diceExists = false;

        if (words[1] === "d6") {
            randomNumber = randomNumber * 6;
            diceExists = true;
        }

        if (words[1] === "d12") {
            randomNumber = randomNumber * 12;
            diceExists = true;
        }

        if (words[1] === "d20") {
            randomNumber = randomNumber * 20;
            diceExists = true;
        }

        let roll = Math.round(randomNumber);

        if(diceExists === true) {
            client.say(channel, "@" + tags.username + " Rolled a " + roll);
        } else {
            client.say(channel, "@" + tags.username + " That Die Does Not Exist");
        }
    }


    if(message.toLowerCase().includes("nigga")) {

        client.say(channel,"/ban " + "@" + tags.username);

        console.log();
    }

    if(message.toLowerCase().includes("wanna become famous? buy followers")) {

        client.say(channel,"/ban " + "@" + tags.username);

        console.log();
    }




});
