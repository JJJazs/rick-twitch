

const tmi = require('tmi.js');
const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: 'george_pumpkinman',
        password: ''
    },
    channels: [ 'JJJazs' ]
});

//new oauth: https://twitchapps.com/tmi/

client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
    if(self) return;
    if(message.toLowerCase() === '!clist') {
        client.say(channel, `@${tags.username}, !clist | !roll :d6, d12, d20`);
        
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
    }

    if(message.toLowerCase().includes("wanna become famous? buy followers")) {
        client.say(channel,"/ban " + "@" + tags.username);
    }

    if(message.toLowerCase().includes("ayo can i get some ice cream")){
        let message = "*thud*";
        let count = 0;
        setTimeout(function(){
            client.say(channel, "only a spoonful");

            let s = setInterval(function() {
                client.say(channel, message);
                message = message + " *thud*";
                count = count + 1;
                if(count >= 3 ) {
                    clearInterval(s);
                    return;
                }
            }, 1000);
        }, 2000);
    }
});
