exports.run = async (client, message, args, level) => {
  try {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Você não tem permissão.")
    if (!args[1]) return message.reply('Você precisa me dar o nome e tipo do canal! Exemplo ( m! (text)(voice)nome do canal)')
    if (!args[0]) return message.reply('Você precisa me dar o nome e tipo do canal! Exemplo ( m!channel (text)(voice)nome do canal)')

    message.channel.send('Canal criado!').then(() => {
      message.guild.channels.create(args[1], {type:args[0]}, []).catch((err) => {
        message.channel.send('Havia um erro!')
      })
    })
  } catch (err) {
    message.channel.send('Havia um erro!\n' + err).catch()
  }
}
exports.help = {
         name: "channel",
         description: "moderation",
         usage: "m!channel <name>",
         example: "m!channel general",
};

exports.conf = {
          aliases: ["cnc","chanmake","cchannel"],
          cooldown: 5
};