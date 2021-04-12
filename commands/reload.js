const {readdirSync} = require('fs')
const config = require('../../config.json')

module.exports = {
  name:"reload",
  category:"owner",
  aliases: ['r'],
  run: async (client, message, args) => {
  
        let cmdfolder = args[0];
        if(!cmdfolder) return message.channel.send('❌ | Fornece a pasta do comando!')
        let command = args[1];
        if (!command) return message.channel.send('❌ | Fornece o comando!')
        try{
               require(`../${cmdfolder}/${command}`) 
        } catch(e) {
            return message.channel.send('❌ | Nenhum comando com esse nome foi encontrado.') 
        }
        delete require.cache[require.resolve(`../${cmdfolder}/${command}`)];
                let pull = require(`../${cmdfolder}/${command}`);
                if (pull.name) {
        client.commands.set(pull.name, pull);
        console.log(`Recarregou o comando!`)
        return message.channel.send('✅ Comando regarregado.')
                }
    }
}