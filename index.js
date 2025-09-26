const mineflayer = require('mineflayer');

// Configuração do bot
const bot = mineflayer.createBot({
  host: 'IP_DO_SERVIDOR',    // IP ou domínio do servidor
  port: 25565,               // Porta padrão
  username: 'MeuBot',        // Nome do bot no Minecraft
  version: '1.20.1'          // Versão do servidor
});

// Mensagem quando o bot entra no servidor
bot.on('spawn', () => {
  console.log('Bot entrou no servidor!');
});

// Responder mensagens no chat
bot.on('chat', (username, message) => {
  if (username === bot.username) return; // Ignorar mensagens do próprio bot
  if (message === 'oi') {
    bot.chat('Olá, eu sou um bot!');
  }
});

// Reconectar automaticamente caso desconecte
bot