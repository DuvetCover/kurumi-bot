const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return errors.cantfindUser(message.channel);
       let kReason = args.join(" ").slice(22);
       if(kUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, kUser, "MANAGE_MESSAGES");
      



      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser}`)
      .addField("Kicked By", `<@${message.author.id}>`)
      .addField("Reason", kReason);

      message.guild.member(kUser).kick(kReason);
       
      return message.channel.send(kickEmbed);

}
 
module.exports.help = {
  name: "kick"
}