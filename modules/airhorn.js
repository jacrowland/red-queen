const YTDL = require("ytdl-core");
const config = require("../config.json");
var servers = [];

//Play Function for Music
function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

  //Song is removed from queue url array
  server.queue.shift();

  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();
  });
}

exports.run = function (client, message, args) {
    //Checks to see if member is currently in a voice channel
    if (!message.member.voiceChannel) {
        message.channel.send("*You must be in a voice channel.*");
        return;
    }
    //Creates server object if one doesn't exist
      if (!servers[message.guild.id]) servers[message.guild.id] = {
          queue: [],
      }
    //Server that command will operate on
      var server = servers[message.guild.id];
      var airhorn = ["https://youtu.be/OPSCjnwD3gc", "https://youtu.be/KnsiZOJjfUg", "https://www.youtube.com/watch?v=La2vIfD4q5U", "https://youtu.be/IY9YNF5MMQo", "https://youtu.be/oT6rJ88YLVI", "https://youtu.be/sA81xUqTdYk", "https://youtu.be/GGUF0gqQnek", "https://youtu.be/8jCO9aU32Mg", "https://youtu.be/VpZg8JeLfhQ", "https://youtu.be/l6Fi3zJ-45Y", "https://youtu.be/Kx1-0D6pXO0", "https://www.youtube.com/watch?v=GbPQj7k9tvQ", "https://www.youtube.com/watch?v=78KbTXlDrlg", "https://www.youtube.com/watch?v=96WX35MMg8g", "https://www.youtube.com/watch?v=Nt-VxsrCe3c", "https://youtu.be/1Bix44C1EzY", "https://youtu.be/TRgdA9_FsXM", "https://www.youtube.com/watch?v=GRthRoTM-lQ", "https://youtu.be/kiqLQUh0f38", "https://youtu.be/KL5yhZIacTE", "https://youtu.be/yjoDxV08apc", "https://youtu.be/KC6T3_O2iWc", "https://youtu.be/1VZlKSBtu2g", "https://youtu.be/ZZETuIgCRoc", "https://www.youtube.com/watch?v=RTR1ny0O_io", "https://youtu.be/s8ssV6FAA5M", "https://youtu.be/QX1SojKfgNI", "https://www.youtube.com/watch?v=gghBcjgOdd0", "https://youtu.be/sA81xUqTdYk", "https://youtu.be/qDZjf5Gm8xw", "https://youtu.be/fqyjOc3EpT4", "https://youtu.be/hCqUw7g7KJg", "https://youtu.be/FuraQCCsKgE", "https://www.youtube.com/watch?v=46Kv4rBJi68", "https://youtu.be/OgjEuzTmowA", , "https://youtu.be/wsO-Td0hqXo", "https://youtu.be/47yAJLPBbho", "https://www.youtube.com/watch?v=fxYOC3gDe7k", "https://youtu.be/1paueaTWFRE", "https://youtu.be/lbe9vaJrRSY", "https://youtu.be/C-HYUc8czuE", "https://www.youtube.com/watch?v=Ligsa2ATWsM", "https://youtu.be/Yje5oIQr92w", "https://youtu.be/SEIoYyAoXNg", "https://youtu.be/7zn411PnoJk", "https://youtu.be/5M-9wAmdMWI", "https://youtu.be/2HKhKpWx1Uc", "https://youtu.be/iqfbsnbFkVA", "https://youtu.be/LeJ_zWhsyLg", "https://www.youtube.com/watch?v=xn6hhrX34Pw", "https://www.youtube.com/watch?v=OFr74zI1LBM", "https://www.youtube.com/watch?v=f49ELvryhao", "https://youtu.be/CQeezCdF4mk"];
      server.queue.push(airhorn[Math.floor(Math.random()*airhorn.length)]);
      message.delete();
    //Triggers play() function after joining voice channel
      if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
          play(connection, message);
        });
}
