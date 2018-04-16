const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  

let helpembed = new Discord.RichEmbed()
      .setTitle("Bot commands")
      .setColor("#15f153")
      .addField("Prefix", "Kurumi")
      .addField("Botinfo", "Kurumibotinfo")
      .addField("Serverinfo" ,"Kurumiserverinfo")
      .addField("Kick","Kurumikick @User <reason>")
      .addField("Ban","Kurumiban @User <reason>")
      .addField("Mute","Kurumimute @User <1s/m/h/d>")
      .addField("Addrole","Kurumiaddrole @User <Role>")
      .addField("Removerole","Kurumiremoverole @User <Role>")
      .addField("Dog","Kurumidoggo")
      .addField("Cat","Kurumicat")
      .addField("8ball","Kurumi8ball <question>")
      .addField("Warn","Kurumiwarn @User  (incidents channel required)")
      .addField("Warnlevel","Kurumiwarnlevel @User")
      .addField("Clear", "Kurumiclear <number>")
      .addField("Say", "Kurumisay <I'm your Waifu!> ")
      .addField("Pay", "Kurumipay @User <amount>")
      .addField("Level", "Kurumilevel")
      .addField("ship", "Kurumiship @User")
      .addField("Fight", "Kurumifight @User")
      .addField("ping", "Kurumiping")
      .addField("Me", "Kurumime")
      .addField("Claim", "Kurumiclaim (dailies)")
      .addField("top", "Kurumitop (most coins)")
      .addField("Change Prefix", "Kurumiprefix <your prefix>");
      
     


      return message.channel.send(helpembed);


};
    module.exports.help = {
        name: "help"
    }