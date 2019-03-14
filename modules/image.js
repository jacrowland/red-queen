const GoogleImages = require('google-images');
const config = require("../config.json");
const CSE = new GoogleImages("CSE ID", "API KEY");

exports.run = function(client, message, args) {
  CSE.search(args.join(" "))
    .then(images => {
        message.channel.send("", {
        file: images[Math.floor(Math.random()*images.length)].url
      });
    });
    return;
}

/*
[{
    "url": "http://steveangello.com/boss.jpg",
    "type": "image/jpeg",
    "width": 1024,
    "height": 768,
    "size": 102451,
    "thumbnail": {
        "url": "http://steveangello.com/thumbnail.jpg",
        "width": 512,
        "height": 512
    }
}]
 */
