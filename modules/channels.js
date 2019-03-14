const Discord = require("discord.js");
exports.run = function (client, message, args) {
    if(message.guild.id == 139585669583339520) {
      message.delete();
      var embed = new Discord.RichEmbed()
      //Header Info
      .setTitle("__**Text & Voice Channels**__")
      .setDescription("*Police Team has the following channels:*")
      .setAuthor("Jacob", "https://cdn.discordapp.com/avatars/139585513899294720/03d78859026c9ebdc47c4e45f25d3fd6.png")
      .setColor(3447003)

      //Channel List [Text Column, Blank Column, Voice Column]
      .addField("__Text Channels__", "*All text channels*", true)
      .addBlankField(true)
      .addField("__Voice Channels__", "*All voice channels*", true)

      .addField("lawsandregulations", "Where you are now.", true)
      .addBlankField(true)
      .addField("AKA AFK", "AFK VC Channel (5 mins)", true)

      .addField("annoucements", "Server announcements etc.", true)
      .addBlankField(true)
      .addField("AKA BANTER", "General voice chat.", true)

      .addField("textbanter", "General text channel.", true)
      .addBlankField(true)
      .addField("AKA STREAM", "Streaming channel.", true)

      .addField("shitpostbanter", "SFW shitposts here!", true)
      .addBlankField(true)
      .addField("AKA CO-OP", "Max 2 players.", true)

      .addField("botbanter", "Use bot commands here.", true)
      .addBlankField(true)
      .addField("AKA WATCH", "**rabb.it** channel.", true)

      .addBlankField(true)
      .addBlankField(true)
      .addField("AKA ISOLATION", "For Nicholas.", true)

      //Footer Info
      .setFooter("© POLICE TEAM", "https://i.imgur.com/DEhVWFD.png")

      return message.channel.send(embed);
    }
    else return message.channel.send("This command is only available on the **Police Team** discord.");
}
