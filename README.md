# Monitor de Ambiente em Tempo Real

## Descrição e Justificativa

Este projeto é um painel de monitoramento em tempo real que exibe dados de temperatura e umidade. Ele foi desenvolvido para fornecer uma visualização clara e em tempo real das condições ambientais, sendo ideal para monitoramento de salas de servidores, estufas ou qualquer ambiente que necessite de monitoramento constante.

A principal justificativa para este projeto é fornecer uma solução leve, responsiva e fácil de configurar para visualização de dados de sensores em tempo real, utilizando tecnologias web modernas.

## 🛠️ Ferramentas

- **Frontend**:
  - HTML5
  - CSS3 (com animações)
  - JavaScript (ES6+)
  - [MQTT.js](https://github.com/mqttjs/MQTT.js) - Cliente MQTT para JavaScript
  - [Material Icons](https://fonts.google.com/icons) - Ícones da interface
  - [Roboto Font](https://fonts.google.com/specimen/Roboto) - Fonte principal

- **Protocolo de Comunicação**:
  - MQTT (Message Queuing Telemetry Transport) para comunicação em tempo real

## 🌐 API

O projeto utiliza o protocolo MQTT para receber dados em tempo real. O formato esperado das mensagens é:

```json
{
  "temperature": "25.5°C",
  "humidity": "60%"
}
```

### Configuração do Broker MQTT

Por padrão, o projeto está configurado para usar o broker público do HiveMQ:
- URL: `wss://broker.hivemq.com:8884/mqtt`
- Tópico: `weather/data`

## 🚀 Instalação e Configuração

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, ou Safari atualizados)
- Servidor web para hospedar os arquivos (opcional, pode ser aberto diretamente no navegador)

### Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:KlayRodrigs/temp-display-web.git
   cd temp-display-web
   ```

2. Abra o arquivo `index.html` em um navegador web.

### Configuração Personalizada

1. **Alterar o Broker MQTT**
   - Edite o arquivo `js/repositories/weather_repository.js`
   - Atualize a URL do broker na linha onde está `connect('wss://broker.hivemq.com:8884/mqtt', options)`

2. **Alterar o Tópico MQTT**
   - No mesmo arquivo, procure por `this.client.subscribe('weather/data', ...)` e altere para o tópico desejado

## 📋 Manual de Uso

1. **Iniciando o Monitoramento**
   - Abra o arquivo `index.html` em um navegador web
   - O sistema tentará se conectar automaticamente ao broker MQTT

2. **Enviando Dados para o Painel**
   - Publique mensagens no formato JSON para o tópico configurado (padrão: `weather/data`)
   - Exemplo de publicação usando MQTT Dashboard:
     1. Acesse https://www.mqtt-dashboard.com/
     2. Clique em "WebSocket"
     3. No campo "Topic", insira: `weather/data`
     4. No campo de mensagem, insira: `{"temperature": "22.5°C", "humidity": "60%"}`
     5. Clique em "Publish"

3. **Visualização**
   - Temperatura e umidade são exibidas em cartões separados
   - A cada atualização, o horário na parte inferior é atualizado
   - As transições de valores são animadas para melhor visualização

## 🐛 Solução de Problemas

- **Sem conexão com o broker**: Verifique sua conexão com a internet e se o broker está acessível
- **Dados não atualizando**: Verifique se o tópico da mensagem publicada corresponde ao tópico de inscrição
- **Erros no console**: Verifique o console do navegador (F12) para mensagens de erro detalhadas

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
