const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.reply("Please ask a full question!");
    let replies = ["Yes.", "No.", "I don't know.", "Ask again later.", "Maybe.", "I don't think so.", "As I see it, yes", "Most likely yes", "Cannot predict now", "Concentrate and ask again", "My reply is no", "Better not tell you now", "My sources say no"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Question", question)
    .addField("Answer", replies[result] );

    message.channel.send(ballembed);

}


module.exports.help = {
    name: "8ball"
}