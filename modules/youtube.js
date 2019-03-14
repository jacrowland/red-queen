const config = require("../config.json");
const yt_search = require("youtube-search");

exports.run = function(client, message, args, command) {
  //Config Options for Youtube-Search Module
  var opts = {
    maxResults: 1,
    type: "video",
    key: config.googleAPI
  };

  message.channel.send("💿** Searching **🔎 `" + args.join(" ") + "`");
  yt_search(args.join(" "), opts, function(err, results) {
    if(err) return console.log(err);
    message.channel.send("📺 **Found** 🎦‍`" + results[0].title + "`\n🔗" + results[0].link);
    console.log(results[0]);
  });
}
