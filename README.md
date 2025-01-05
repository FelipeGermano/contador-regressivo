# Contador Regressivo

Este é um projeto React que implementa um contador regressivo para múltiplos eventos, permitindo que os usuários definam eventos futuros e acompanhem o tempo restante até que cada evento ocorra. O projeto também persiste os dados dos eventos entre sessões usando o `localStorage` do navegador.

## Funcionalidades

- Adicionar eventos com nome, data e horário opcional.
- Persistência de eventos entre sessões.
- Exibição do tempo restante (dias, horas, minutos e segundos) para cada evento configurado.
- Alerta quando um evento é alcançado.
- Suporte a múltiplos eventos simultâneos.
- Mensagens de aviso para entradas inválidas ou ausentes.

## Pré-requisitos

- Node.js (versão 14 ou superior).
- npm ou yarn.

## Como executar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/FelipeGermano/contador-regressivo.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd contador-regressivo
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   # ou
   yarn start
   ```

5. Abra o navegador e acesse:

   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

- **App.js**: Componente principal que gerencia o estado dos eventos e a interface do usuário.
- **CountdownTimer.js**: Componente responsável por calcular e exibir o tempo restante para cada evento.
- **App.css**: Estilização do aplicativo.

## Regras de Uso

1. Insira o nome do evento no campo correspondente.
2. Escolha a data do evento.
3. Insira o horário opcional (se omitido, será assumido meia-noite).
4. Clique em "Iniciar" para adicionar o evento.
5. Acompanhe o contador regressivo na lista de eventos.

### Validações

- O nome do evento não pode estar vazio.
- A data e horário precisam ser válidos e futuros.
- Mensagens de erro serão exibidas para entradas inválidas.

## Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- CSS
- LocalStorage

## Melhorias Futuras

- Adicionar suporte a edição e exclusão de eventos.
- Permitir notificações no navegador quando o evento for alcançado.
- Implementar internacionalização (i18n).
- Adicionar testes automatizados.
