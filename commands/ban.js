const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
       if(!bUser) return errors.cantfindUser(message.channel);
       let bReason = args.join(" ").slice(22);
       if(!bReason) return errors.noReason(message.channel);
       if(bUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, bUser, "MANAGE_MESSAGES");
       



       let banEmbed = new Discord.RichEmbed()
       .setDescription("~Ban~")
       .setColor("#bc0000")
       .addField("Banned User", `${bUser}`)
       .addField("Banned By", `<@${message.author.id}>`)
       .addField("Reason", bReason);


       message.guild.member(bUser).ban(bReason);
       
       return message.channel.send(banEmbed);


}
 
module.exports.help = {
  name: "ban"
}