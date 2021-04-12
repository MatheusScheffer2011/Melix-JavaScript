let d = require('discord.js')
exports.run = async(client,message,args)=>{
if(!require('quick.db').get(`${message.guild.id}_addbot`))return message.reply('esse servidor ainda não esta configurado!')
if(!message.guild.channels.cache.get(require('quick.db').get(`${message.guild.id}_addbot`)))return message.reply('esse servidor ainda não esta configurado!')
if(!args[0] || !args[1]) return message.reply('m!addbot <ID> <PREFIX> <Linguagem>')
client.channels.cache.get(require('quick.db').get(`${message.guild.id}_addbot`)).send(new d.MessageEmbed().setColor("#00000").setTitle(`📫┋ Enviado: ${message.author.username}`).setDescription(`
            **Dono:** ${message.author}
            **Prefix/Linguagem**: \`${args.slice(1).join(' ')}\`

            **Conta criada a:** \`${require('moment')(message.author.createdAt).format('dddd, DD [de] MMMM [de] YYYY á HH [H] (DD/MM/YYYY)')}\`
            
            [**Adicionar o bot**](https://discord.com/oauth2/authorize?client_id=${args[0]}&scope=bot&permissions=0)`).setFooter(`Para adicionar um bot use m!addbot <ID> <PREFIX> <LINGUA>`).setThumbnail(`${message.author.displayAvatarURL({ dynamic:true, format: "png",})}`))
 await message.channel.send(`**${message.author} Bot enviado com Sucesso**`)
}