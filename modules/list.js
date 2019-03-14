//Command List
const Discord = require("discord.js");
exports.run = function (client, message, args) {
    var embed = new Discord.RichEmbed()
    //Header Info
    .setTitle("__**Command List**__")
    .setDescription("*The following commmands are available starting with **>>**:*")
    .setAuthor("Red Queen", "https://cdn.discordapp.com/avatars/410704485103566848/f018a66c5dacca50a5f07cff4cb9d7df.png")
    .setColor(9898763)
    .setThumbnail("https://cdn.discordapp.com/avatars/410704485103566848/f018a66c5dacca50a5f07cff4cb9d7df.png")

    //Available Commands
    .addField("8ball <question>", "Find the answers you seek.", false)
    .addField("coinflip", "Heads or Tails!", false)
    .addField("dab", "Dab on all your haters.", false)
    .addField("delete <delete>", "Deletes specified number of messages in the channel. Note: Permission locked to those who can manage messages.", false)
    .addField("diceroll <num>", "__>>diceroll__ Random number from 1-6. __>>diceroll <number>___ Random number from 1 to <number>.", false)
    .addField("image <search term>", "Searches google images and returns a random image based on the search term.", false)
    .addField("insult", "Randomly generated insult towards others (__>>insult @user__) or (__>>insult__) to target yourself.", false)
    .addField("meme", "Random Police Team memes. Note: Only available on Police Team Discord.", false)
    .addField("nowplaying", "Returns currently playing song.", false)
    .addField("play <youtube url or search term>", "Queues song and joins current VC (if not already present). Note: Must be in a voice channel.", false)
    .addField("queue", "Gets list of upcoming songs in server queue.", false)
    .addField("say <message>", " Gets the bot to repeat your message.", false)
    .addField("skip", "Skips current song in queue.", false)
    .addField("stop", "Stops music playback and leaves VC.", false)
    .addField("youtube <search term>", "Searches youtube and returns the first result." , false)

    //Footer Info
    .setFooter("© POLICE TEAM", "https://i.imgur.com/DEhVWFD.png")

    return message.channel.send(embed);
}
