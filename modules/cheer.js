const YTDL = require("ytdl-core");
const config = require("../config.json");
var servers = [];

//Play Function for Music
function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

  //Currently Playing Message
  YTDL.getInfo(server.queue[0], function(err, info) {
  server.currentlyPlaying = info.title;

  //Song is removed from queue url array
  server.queue.shift();
  //Song's title is removed from title array
  server.songTitles.shift();
  });

  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();
  });
}

exports.run = function (client, message, args) {
    //Checks to see if member is currently in a voice channel
    if (!message.member.voiceChannel) {
        //message.channel.send("*You must be in a voice channel.*");
        //return;
    }
    //Creates server object if one doesn't exist
      if (!servers[message.guild.id]) servers[message.guild.id] = {
          queue: [],
          songTitles: [],
          playing: ""
      }
    //Server that command will operate on
      var server = servers[message.guild.id];
      server.queue.push("https://www.youtube.com/watch?v=d3Awl_5c8jI");
      message.delete();
    //Triggers play() function after joining voice channel
      if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
          play(connection, message);
        });
}
