module.exports.run = async (bot, message, args) => {
    
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send("Você não tem permissão!");

    let epicRole = message.guild.roles.cache.find(val => val.name === "Silenciado");

    const member = message.mentions.members.first();

    member.roles.remove(epicRole);
    message.channel.send('Desmutado!')
}

module.exports.config = {
    name: "removerole",
    description: "",
    usage: "m!removerole",
    accessableby: "Members",
    aliases: []
}