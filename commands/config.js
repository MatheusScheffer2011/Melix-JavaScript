let db = require('quick.db')
let discord = require('discord.js')
let Discord = discord
exports.run = async(client,message,args)=>{
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Você precisa da permissão 'gerenciar servidor' para este comando.`)
if(args[0] && args[1]){
	if(args[0].toLowerCase() === "addbot"){ 
		if(message.guild.channels.cache.get(args[1])){
db.set(`${message.guild.id}_addbot`,args[1])
message.reply('**configurado com sucesso addbot!**')
		}else return message.reply('**canal invalido!**')
	}else if(args[0].toLowerCase() === "aprovar"){ 
		if(message.guild.channels.cache.get(args[1])){
db.set(`${message.guild.id}_apro`,args[1])
message.reply('**configurado com sucesso aprovar!**')
		}else return message.reply('**canal invalido!**')
	}else if (args[0].toLowerCase() === "reprovar"){ 
		if(message.guild.channels.cache.get(args[1])){
db.set(`${message.guild.id}_repro`,args[1])
message.reply('**configurado com sucesso reprovar!**')
		}else return message.reply('**canal invalido!**')
	}else{
		let canaladdbotid = db.get(`${message.guild.id}_repro`)
let canaladdbot = ""
if(!canaladdbotid){
canaladdbot = "**nenhum**"
}else{
	if(!message.guild.channels.cache.get(canaladdbotid)){
		canaladdbot = "**nenhum**"
	}else{
		canaladdbot = message.guild.channels.cache.get(canaladdbotid)
	}
}
let canalreprovarid = db.get(`${message.guild.id}_repro`)
let canalreprovar = ""
if(!canalreprovarid){
canalreprovar = "**nenhum**"
}else{
	if(!message.guild.channels.cache.get(canalreprovarid)){
		canalreprovar = "**nenhum**"
	}else{
		canalreprovar = message.guild.channels.cache.get(canalreprovarid)
	}
}
let canalaprovarid = db.get(`${message.guild.id}_apro`)
let canalaprovar = ""
if(!canalaprovarid){
canalaprovar = "**nenhum**"
}else{
	if(!message.guild.channels.cache.get(canalaprovarid)){
		canalaprovar = "**nenhum**"
	}else{
		canalaprovar = message.guild.channels.cache.get(canalaprovarid)
	}
}

let embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setTitle("configurações!")
.setDescription(`
\`addbot\`**-**${canaladdbot}

\`reprovar\`**-**${canalreprovar}

\`aprovar\`**-**${canalaprovar}
`)
.setFooter('para configura alguma coisa use o comando m!config (addbot/reprovar/aprovar) (Id canal)')
message.channel.send(embed)
	}
}else{
let canaladdbotid = db.get(`${message.guild.id}_addbot`)
let canaladdbot = ""
if(!canaladdbotid){
canaladdbot = "**nenhum**"
}else{
	if(!message.guild.channels.cache.get(canaladdbotid)){
		canaladdbot = "**nenhum**"
	}else{
		canaladdbot = message.guild.channels.cache.get(canaladdbotid)
	}
}
let canalreprovarid = db.get(`${message.guild.id}_repro`)
let canalreprovar = ""
if(!canalreprovarid){
canalreprovar = "**nenhum**"
}else{
	if(!message.guild.channels.cache.get(canalreprovarid)){
		canalreprovar = "**nenhum**"
	}else{
		canalreprovar = message.guild.channels.cache.get(canalreprovarid)
	}
}
let canalaprovarid = db.get(`${message.guild.id}_apro`)
let canalaprovar = ""
if(!canalaprovarid){
canalaprovar = "**nenhum**"
}else{
	if(!message.guild.channels.cache.get(canalaprovarid)){
		canalaprovar = "**nenhum**"
	}else{
		canalaprovar = message.guild.channels.cache.get(canalaprovarid)
	}
}

let embed = new Discord.MessageEmbed()
.setColor("#00000")
.setTitle("configurações!")
.setDescription(`
\`addbot\`**-**${canaladdbot}

\`reprovar\`**-**${canalreprovar}

\`aprovar\`**-**${canalaprovar}
`)
.setFooter('**para configura use m!config (addbot/reprovar/aprovar) (Id canal)**')
message.channel.send(embed)
}
}