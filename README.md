# Desafio QRCode DIO

Projeto em Node.js (CLI) para:

- gerar QR Code no terminal
- gerar senha aleatoria configuravel por variaveis de ambiente

## Tecnologias

- Node.js (ES Modules)
- `prompt`
- `chalk`
- `qrcode-terminal`

## Requisitos

- Node.js 20+ (o projeto usa `--env-file`)
- npm

## Instalacao

```bash
npm install
```

## Configuracao (`.env`)

Crie um arquivo `.env` na raiz do projeto com as variaveis abaixo:

```env
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

## Como executar

Rodar em modo normal:

```bash
npm run start:dev
```

Rodar com watch:

```bash
npm run start:watch
```

## Fluxo da aplicacao

Ao iniciar, o menu principal mostra:

- `1` para QR Code
- `2` para Password

### Opcao 1: QR Code

Solicita:

- `link` para gerar o QR Code
- `type`:
  - `1` = normal
  - `2` = terminal (small)

### Opcao 2: Password

Gera uma senha com base no `.env` e imprime no terminal.

## Estrutura de pastas

```txt
src/
  index.js
  prompts/
    main.js
  services/
    password/
      index.js
      generate.js
    qr_code/
      index.js
      prompt.js
      generate.js
```

## Observacoes

- Se nenhuma categoria de caracteres estiver `true`, a senha nao sera gerada corretamente.
- Em ES Modules, mantenha imports locais com extensao `.js`.
