/////////////////////////////////////////////////////
//RedQueen Discord.js bot by Naive Protagonist#7049//
/////////////////////////////////////////////////////

const Discord = require("discord.js");
const config = require("./config.json");
const music = require("./modules/music.js");
const date = require("./modules/time.js");
const fs = require('fs');

var bot = new Discord.Client();

//Logs bot in
bot.login(config.token);

//Red Queen Startup Function
bot.on("ready", function() {
  console.log("The Red Queen has awoken from her slumber.");
  bot.user.setActivity(config.prefix + "list");
  bot.user.setStatus("online");
});

//Listener Event: Message Received
bot.on("message", function(message) {
  //Ignores Bot Messages
  if (message.author.equals(bot.user)) return;
  //Checks for message prefix
  if (!message.content.startsWith(config.prefix)) return;
  //Splits message into arguments then converts command to lowercase
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();//const command = args[0].toLowerCase();//
  //Logs Activity
  console.log(date.getTime() + " " + message.guild.id + " " + message.member.id + ": " + message.content);
  fs.appendFile('/home/jacob/ftp/files/redqueen/log.txt', date.getTime() + " " + message.guild.id + " " + message.member.id + ": " + message.content + "\r\n", function (err) {
    if (err) return console.log(err);
  });

  //Attempts to load command module, calls module run() function
  try {
      //Checks for music player commands
      if (command == "play" || command == "stop" || command == "skip" || command == "queue" || command == "nowplaying" || command == "shuffle") {
        music.run(bot, message, args, command);
      }
      //Other Commands
      else {
        const commandModule = require("./modules/" + command + ".js");
        commandModule.run(bot, message, args);
      }
  }
  //If module doesn't exist
  catch (err) {
    console.log(err)
    message.channel.send("Please enter a valid command! Use *" + config.prefix +"list* to see all available commands.")
  }
});
