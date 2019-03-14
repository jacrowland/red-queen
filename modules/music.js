const YTDL = require("ytdl-core");
const yt_search = require("youtube-search");
const config = require("../config.json");
var servers = [];

//Play Function for Music
function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0].link, {filter: "audioonly"}));
  //Currently Playing Message
  console.log("Now Playing on " + message.guild.id + ": " + server.queue[0].title);
  server.playing = server.queue[0]
  message.channel.send({embed: {
    color: 9898763,
    description: "**▶ Now Playing: ** [" + server.queue[0].title + "](" + server.queue[0].link + ")",
  }
  });

  //Song is removed from queue url array
  server.queue.shift();

  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message);
    else {
      server.playing = ""
      connection.disconnect();
    }
  });
};

exports.run = function (client, message, args, command) {
  switch(command) {
    case "play":
      //Checks to see if member is currently in a voice channel
      if (!message.member.voiceChannel) {
          message.channel.send("*You must be in a voice channel.*");
          return;
      }
      //Creates server object if one doesn't exist
        if (!servers[message.guild.id]) servers[message.guild.id] = {
          queue: [],
          playing: ""
        }
      //Server that command will operate on
      var server = servers[message.guild.id];

      //Ensures args isn't empty
      if (args[0] == undefined) {
        return message.channel.send("*" + config.prefix + "play <youtube url or search term>*");
      }

        //Config Options for Youtube-Search Module
        var opts = {
          maxResults: 1,
          type: "video",
          key: config.googleAPI
        };

        //Retrieve first Youtube Result
        yt_search(args.join(" "), opts, function(err, results) {
          if(err) return console.log(err);
          //Add song to end of server queue list
          server.queue.push(results[0]);
          //Error prevention (no playlists!)
          if (results[0] == undefined) return message.channel.send("No suitable results. Please try another search.");
          //Queue Push Embed
          message.channel.send({embed: {
              color: 9898763,
              author: {
                name: "Added to queue",
              },
              title: results[0].title,
              description: results[0].description,
              url: results[0].link,
              thumbnail: {
                url: results[0].thumbnails.default.url
              },
              fields: [
                //{
                  //name: "Upload Date",
                  //value: results[0].publishedAt.slice(0, 10),
                  //inline: true
                //},
                {
                  name: "Requested by",
                  value: message.author.toString(),
                  inline: true
                },
                {
                  name: "Position",
                  value: server.queue.length,
                  inline: true
                },
              ],
            }
          });
          //Triggers play() function after joining voice channel
          if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
              play(connection, message);
            });
        });
        message.delete();
      break;
      case "skip":
        var server = servers[message.guild.id];
        if (server.dispatcher) server.dispatcher.end();
      break;
      case "stop":
        var server = servers[message.guild.id];
        server.queue = [];
        if (message.guild.voiceConnection) {
          message.guild.voiceConnection.disconnect();
          server.playing = ""
        }
      break;
      case "shuffle":
      var server = servers[message.guild.id];
      if (server != undefined) {
        if (server.queue.length > 0) {
          server.queue.sort(function(a, b){return 0.5 - Math.random()});
          message.channel.send({embed: {
            color: 9898763,
            description: "🎲 **Server queue shuffled**",
          }
          });
        }
      }
      break;
      case "nowplaying":
        var server = servers[message.guild.id];
        if (server != undefined) {
          if (server.playing != "") {
            message.channel.send({embed: {
              color: 9898763,
              description: "**▶ Now Playing: ** [" + server.playing.title + "](" + server.playing.link + ")",
            }
            });
          }
        }
      break;
      case "queue":
        var server = servers[message.guild.id];
        var queue = ""
        if (server != undefined) {
          if (server.queue.length > 0) {
            for (i = 0; i < server.queue.length; i++) {
              song = "`" + (i + 1) + ".` [" + server.queue[i].title + "](" + server.queue[i].link + ")\n";
              queue += song
            }
            message.channel.send({embed: {
                author: {
                  name: "Server Queue",
                },
                color: 9898763,
                description: queue,
              }
            });
          }
          else {
            message.channel.send({embed: {
              color: 9898763,
              title: "The queue is empty",
              description: "Add to the queue using " + config.prefix + "play <youtube url or search term>",
            }
            });
          }
        }
        else {
          message.channel.send({embed: {
            color: 9898763,
            title: "The queue is empty",
            description: "Add to the queue using " + config.prefix + "play <youtube url or search term>",
          }
          });
        }
        break;
  }
}
