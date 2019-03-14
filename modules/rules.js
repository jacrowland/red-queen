const Discord = require("discord.js");
exports.run = function (client, message, args) {
  if(message.guild.id == 139585669583339520) {
    message.delete();
    var embed = new Discord.RichEmbed()
    //Header Info
    .setTitle("__**Laws & Regulations**__")
    .setDescription("*Please adhere to the following Police Team rules:*")
    .setAuthor("Red Queen")
    .setThumbnail("https://i.imgur.com/DEhVWFD.png")
    .setColor(3447003)

    //Rules
    .addField("Push to Talk", "Use the ‘push to talk’ key if you have background noise.", false)
    .addField("Interruptions", "Please don't talk over other people, we cannot stress that enough.", false)
    .addField("Insults", "Don't insult others (unless of course you know the person and the other person has knowledge of your 'playfulness' or it is from a bot).", false)
    .addField("Singing, Screaming and Spam", "Please no singing, screaming or spam in text and voice channels. We will treat this noise like spam, so we will mute or ban.", false)
    .addField("Common Sense", "No racism, sexism, homophobia, transphobia etc. Just be nice.", false)
    .addField("Respect", "Be aware that everyone has feelings. Be respectful.", false)
    .addField("Dictatorship", "**No discussing the dictatorship that this server really is.**", false)

    //Footer Info
    .setFooter("© POLICE TEAM", "https://i.imgur.com/DEhVWFD.png")

    return message.channel.send(embed);
  }
  else return message.channel.send("This command is only available on the **Police Team** discord.");
}
