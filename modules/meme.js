exports.run = function (client, message, args) {
  if(message.guild.id == 139585669583339520) {
    var memes = ["https://imgur.com/bmwdMJj", "https://imgur.com/bmwdMJj", "https://imgur.com/bmwdMJj", "https://imgur.com/HFqjWKb", "https://i.imgur.com/DjhHc4D.jpg", "https://imgur.com/QbXL3yw", "https://youtu.be/jtR9UywKh5I", "https://i.imgur.com/7pR8h82.jpg", "https://i.imgur.com/75ZtEBV.png","https://youtu.be/DK4FTvaW_6Q", "smh my head", "https://i.imgur.com/XQrAXV0.png", "https://i.imgur.com/gNxr4Lq.png", "https://i.imgur.com/zGnJvbV.png", "Overwatch **@ e v e r y o n e** ???", "Turbo Tastic!", "Literally, just delete **@ e v e r y o n e**", "kek", "Izak, you won't believe what Nicholas did today!", "https://www.youtube.com/watch?v=vrXpFh2IHZY"];
    return message.channel.send(memes[Math.floor(Math.random()*memes.length)]);
  }
  else return message.channel.send("Sorry, this command is unavailable outside the **Police Team** Discord.");
};
