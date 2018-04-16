const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
let claims = require("../claims.json")

const claim_cooldown_time = 30;
const claim_talked_users = new Set();

module.exports.run = async (bot, message, args) => {
  if (claim_talked_users.has(message.author.id)) return message.reply("you have to wait before claiming rewards again.");
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0,
    };
  }
  if(!claims[message.author.id]) {
    claims[message.author.id] = {
      claims: 0
    };
  }
  
  let uClaims = claims[message.author.id].claims + 1;
  let uCoins = coins[message.author.id].coins;
  let prize = uClaims * 500;
  let sCount = 1;
  let streak = '✅';
  while (uClaims > sCount) {
    streak = streak + '✅';
    sCount = sCount + 1;
  }
  fs.writeFile("../coins.json", JSON.stringify(uClaims), (err) => {
    if(err) console.log(err)
  });
  
  claims[message.author.id] = {
    claims: uClaims
  }
  coins[message.author.id] = {
    coins: uCoins + prize
  }
  fs.writeFile("../claims.json", JSON.stringify(sCount), (err) => {
    if(err) console.log(err)
  });
  
  message.reply(`you have claimed ${prize} coins!`)
  claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
    }, claim_cooldown_time * 60000)
   
  
}


module.exports.help = {
  name: "claim"
}