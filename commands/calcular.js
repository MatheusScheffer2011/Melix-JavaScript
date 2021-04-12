const math = require ('mathjs');

const Discord = require ('discord.js');

module. exportações = {
       nome: "calculate",
       descrição: "Obtenha uma resposta para um problema de matemática",


        asynchronous execution (client, message, arguments) {

           if (! args [0]) returns the message. channel. send ('Forneça uma pergunta');

           deixe resp;

           tente {
               resp = math. avaliar (arguments. join (""))
           } catch (e) {
                return message. channel. send ('Forneça a ** valid ** question')
           }

           const embed = new discord. MessageEmbed ()
           . setColor (0x808080)
           . setTitle ('Calculator')
           . addField ('Question', `\` \ `\` css \ n $ {args. join ('')} \ `\` \ ``)
           . addField ('Reply', `\` \ `\` css \ n $ {resp} \ `\` \ ``)

           message. channel. send (incorporate);

       }
}