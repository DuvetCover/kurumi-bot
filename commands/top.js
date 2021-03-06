const Discord = require("discord.js");
let coins = require("../coins.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`Scanning for the top user!`)
  let topPlayer = message.author.id;
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  let top = coins[message.author.id].coins;
  bot.users.filter(u => u.id !== `${message.author.id}`).forEach(user => {
    if(!coins[user.id]){
      coins[user.id] = {
        coins: 0
      };
    }
    let plBal = coins[user.id].coins;
    if (plBal > top) {
      top = plBal
      topPlayer = user.id
    }
  });
  let topEmbed = new Discord.RichEmbed()
  .setDescription(`<@${topPlayer}> is the top player!`)

  message.channel.send(topEmbed)
}

module.exports.help = {
  name: "top"
}