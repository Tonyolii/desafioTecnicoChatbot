// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(2200); //delay de 2.2 segundos
        await chat.sendStateTyping(); // Digitando...
        await delay(3000); //Delay de 2.2 segundos
        const contact = await msg.getContact(); //Pega o contato
        const name = contact.pushname; //Pega o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + '. Sou o assistente furioso aqui da Fúria. O que você busca? Escolha uma das opções abaixo:\n\n1 - Camisetas oficiais\n2 - Bastidores da Fúrias\n3 - Criadores de Conteúdo\n4 - Outros'); //Primeira mensagem de texto
        await delay(2200); //delay de 2.2 segundos
        await chat.sendStateTyping(); // Digitando...
        await delay(3500); //Delay de 3.5 segundos
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(2200); //delay 
        await chat.sendStateTyping(); // Simula Digitação
        await delay(2200);
        await client.sendMessage(msg.from, 'Você pode adquirir sua camiseta Fúria oficial diretamente pela nossa loja 24 horas por dia, 7 dias por semana.\n\n');

        await delay(2200); //delay 
        await chat.sendStateTyping(); // Simula Digitação
        await delay(2200);
        await client.sendMessage(msg.from, 'Quer o link?\nPera aí rapidinho que eu te passo...');
        await delay(2200); //delay 
        await chat.sendStateTyping(); // Simula Digitação
        await delay(2200);
        await client.sendMessage(msg.from, 'Prontinho, tá na mão: https://www.furia.gg/');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(2200); //Delay 
        await chat.sendStateTyping(); // Simula Digitação
        await delay(2200);
        await client.sendMessage(msg.from, 'Ah legal, você quer conhecer os nossos bastidores.\n\nVou te mostrar as nossas redes socias onde mostramos um pouco do rola por trás das cameras.');

        await delay(2200); //delay 
        await chat.sendStateTyping(); // Simula Digitação
        await delay(2200);
        await client.sendMessage(msg.from, '\n\n Prontinho, aqui IG: https://www.instagram.com/furiagg/?hl=pt-br \n\n YT: https://www.youtube.com/@FURIAgg \n\n confere lá, tem muita coisa bacana.');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay
        await chat.sendStateTyping(); // Simula Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Pô, maravilha. Ficamos felizes que queira conhecer nossos Streamers e criadores de conteúdo.\n\nAqui estão alguns de nossos furiosos');
        
        await delay(3000); //delay 
        await chat.sendStateTyping(); // Simula Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Gabriel "Fallen" Toledo: Twitch https://www.twitch.tv/gafallen\n\n Matheus "Xarola" Twitch https://www.twitch.tv/xarola_\n\n Leonardo "Otsuka" Twitch https://www.twitch.tv/otsukaxd .');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Você gostaria de fazer parte do nosso time!? \n\n Que legal, fico feliz. Vou te encaminhar o nosso site onde você pode se cadastrar: \n\n');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Trabelhe na Fúria: https://furia.gg/trabalhe-conosco');


    }
});
