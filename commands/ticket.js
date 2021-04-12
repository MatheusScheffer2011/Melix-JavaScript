
const Discord = require("discord.js")

module.exports = {
    name: "msgticket",
    aliases: ['ticket'],
    run: async(client, message, args) => {

    message.delete()

    let TicketEmbed = new Discord.MessageEmbed()
    .setColor(`#9000f0`)
    .setAuthor(`Arthy - Suporte`)
    .setDescription(`🛒 **Horário de atendimento** 🛒\n\n:staff2: **Suporte técnico:**\n\n▫️ Segunda à Sexta: 13:00 até as 19:00\n\n▫️ Sábado: 15:00 até as 17:00\n\n▫️ Domingo: Não trabalhamos nós Domingos.\n\n:money: **Suporte financeiro**: Atendemos 24 horas por dia.\n\n:hype: **Informações:** Não atendemos via privado; Não somos obrigados a atender fora do horário do atendimento; Assim como todos, nossa equipe tem um momento de descanso, caso um ticket seja aberto na madrugada podemos lhe atender ou não; Não toleramos informações/imagens falsas.\n\nClique no emoji 🛒 para abrir um ticket!`)
    .setFooter(`Atenciosamente, Arthy Hosting`)

    message.channel.send(TicketEmbed).then(async msg => {
        msg.react(`🛒`)
    })
}
}