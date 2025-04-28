window.onload = function () {
  setTimeout(() => {
    document.getElementById("chatContainer").style.display = "flex";
  }, 2000);
};

function fecharChat() {
  document.getElementById("chatContainer").style.display = "none";
  document.getElementById("openChatBtn").style.display = "block";
}

function abrirChat() {
  document.getElementById("chatContainer").style.display = "flex";
  document.getElementById("openChatBtn").style.display = "none";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const mensagem = input.value.toLowerCase();
  input.value = "";

  if (!mensagem) return;

  adicionarMensagem(mensagem, "user");

  let resposta = "Hmm, não entendi. Diga 'oi' para começarmos!";

  if (mensagem === "oi" || mensagem === "ola" || mensagem === "voltar") {
    resposta = "Olá! Sou o assistente Fúria. O que você deseja?";
    adicionarMensagem(resposta, "bot");
    enviarComDelay([
      "1 - Camisetas oficiais",
      "2 - Bastidores da Fúria",
      "3 - Criadores de Conteúdo",
      "4 - Títulos e Troféus",
      "5 - Trabalhe conosco"
    ], 1000);
  } else if (mensagem === "1") {
    adicionarMensagem("<a href='https://www.furia.gg/produtos' target='_blank'>Camisetas oficiais</a>", "bot");
  } else if (mensagem === "2") {
    adicionarMensagem("Aqui estão nossas redes sociais: em nosso WhatsApp você pode se cadastrar e ter benefícios exclusivos", "bot");
    enviarComDelay([
      "<a href='https://wa.me/5511993404466' target='_blank'>WhatsApp Fúria</a>",
      "<a href='https://www.twitch.tv/furiatv' target='_blank'>Twitch</a>",
      "<a href='https://www.instagram.com/furiagg/' target='_blank'>Instagram</a>",
      "<a href='https://www.tiktok.com/@furia' target='_blank'>TikTok</a>"
    ], 1000);
  } else if (mensagem === "3") {
    adicionarMensagem("Aqui estão nossos Criadores de Conteúdo Oficiais", "bot");
    enviarComDelay([
      "<a href='https://www.twitch.tv/gafallen' target='_blank'>Gabriel 'Fallen' Toledo</a>",
      "<a href='https://www.instagram.com/brino/' target='_blank'>Brino</a>",
      "<a href='https://www.twitch.tv/otsukaxd' target='_blank'>Leonardo 'Otsuka'</a>",
      "<a href='https://www.twitch.tv/xarola_' target='_blank'>Matheus 'Xarola_'</a>"
    ], 1000);
  } else if (mensagem === "4") {
    adicionarMensagem("Aqui está o Título mais recente da Fúria", "bot");
    enviarComDelay([
      "<a href='https://www.youtube.com/watch?v=Gj2e7BZI6Ms' target='_blank'>FÚRIA CAMPEÃ NO CS2!! FURIA vs APEKS - Elisa Masters Espoo 2023</a>"
    ], 1000);
  } else if (mensagem === "5") {
    adicionarMensagem("Oportunidades na Fúria:", "bot");
    enviarComDelay([
      "<a href='https://99jobs.com/furia/jobs' target='_blank'>Trabalhe conosco</a>"
    ], 1000);
  } else if (mensagem === "encerrar" || mensagem === "sair") {
    resposta = "Saindo. Volte sempre!";
    enviarComDelay([resposta], 1000);
  } else {
    adicionarMensagem(resposta, "bot");
  }
}

function enviarComDelay(mensagens, delay) {
  let i = 0;
  function enviar() {
    if (i < mensagens.length) {
      adicionarMensagem(mensagens[i], "bot");
      i++;
      setTimeout(enviar, delay);
    }
  }
  setTimeout(enviar, delay);
}

function adicionarMensagem(texto, classe) {
  const chatbox = document.getElementById("chatbox");
  const div = document.createElement("div");
  div.className = "message " + classe;
  div.innerHTML = texto;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}


document.getElementById("userInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});
