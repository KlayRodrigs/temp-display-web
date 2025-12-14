# Monitor de Temperatura e Umidade em Tempo Real

## 📋 Sobre o Projeto

Este é um painel web que exibe em tempo real os dados de temperatura e umidade recebidos via MQTT. O projeto já está totalmente configurado para uso imediato com um broker MQTT público.

## 🚀 Como Executar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, ou Safari atualizados)
- Conexão com a internet (para carregar as fontes e ícones)

### Passo a Passo

1. **Clonar o repositório** (se ainda não tiver feito):
   ```bash
   git clone git@github.com:KlayRodrigs/temp-display-web.git
   cd temp-display-web
   ```

2. **Abrir o painel de monitoramento**
   - Dê um duplo clique no arquivo `index.html` para abrir no navegador padrão
   - OU arraste o arquivo `index.html` para uma janela do navegador

3. **Visualizando os dados**
   - O painel mostrará inicialmente valores simulados
   - Para testar com dados reais, siga as instruções abaixo

### Testando com Dados Reais (Opcional)

1. Acesse o [MQTT Dashboard](https://www.mqtt-dashboard.com/)
2. Clique em "WebSocket"
3. Configure a publicação:
   - **Tópico**: `weather/data`
   - **Mensagem**: `{"temperature": "25.5°C", "humidity": "60%"}`
4. Clique em "Publish"
5. O painel deve atualizar automaticamente com os novos valores

## 🔧 Configuração Técnica

- **Broker MQTT**: `wss://broker.hivemq.com:8884/mqtt` (público)
- **Tópico**: `weather/data`
- **Formato da Mensagem**:
  ```json
  {
    "temperature": "25.5°C",
    "humidity": "60%"
  }
  ```

## 📱 Funcionalidades

- Exibição em tempo real de temperatura e umidade
- Atualização automática a cada 5 segundos
- Interface responsiva que se adapta a diferentes tamanhos de tela
- Animações suaves nas transições de valores
- Exibição da data e hora da última atualização

## ℹ️ Observações

- O projeto usa um broker MQTT público para demonstração
- Os dados são públicos e visíveis para qualquer pessoa conectada ao mesmo tópico
- Para uso em produção, recomenda-se configurar um broker privado

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
