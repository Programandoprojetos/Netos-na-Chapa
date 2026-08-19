# Neto's na Chapa - Cardapio Digital

Cardapio digital responsivo para o Neto's na Chapa, com visual premium, busca por produtos, filtro por categoria, carrinho e envio de pedido pelo WhatsApp.

## Como Abrir

Abra o arquivo `index.html` no navegador.

Tambem e possivel servir a pasta com um servidor local simples:

```bash
python -m http.server 4173
```

Depois acesse:

```text
http://127.0.0.1:4173
```

## Arquivos Principais

- `index.html`: estrutura da pagina, secoes, cabecalho, rodape e carrinho.
- `styles.css`: identidade visual, responsividade, animacoes e layout mobile/desktop.
- `app.js`: produtos, filtros, busca, carrinho, quantidades, observacoes e envio para WhatsApp.
- `assets/logo-netos-na-chapa.webp`: logo otimizada usada no cardapio.
- `assets/logo-netos-na-chapa.png`: logo original em alta resolucao.
- `assets/background-chapa.webp`: fundo otimizado de chapa quente usado no site.
- `assets/background-chapa.png`: fundo original em alta resolucao.

## Personalizacao

### WhatsApp

No arquivo `app.js`, altere:

```js
const WHATSAPP_NUMBER = "5599999999999";
```

Use o numero com codigo do pais e DDD, sem espacos, parenteses ou tracos.

No arquivo `index.html`, atualize tambem os links `https://wa.me/5599999999999`.

### Endereco, Instagram e Google Maps

No arquivo `index.html`, altere os textos e links do cabecalho e rodape:

- WhatsApp
- Localizacao
- Instagram
- Google Maps
- Endereco
- Horario de funcionamento

### Produtos e Precos

No arquivo `app.js`, edite a lista `products`.

Cada produto segue este formato:

```js
{
  id: "x-bacon",
  category: "Lanches",
  name: "X-Bacon",
  description: "Pao, hamburguer, presunto, mussarela, bacon, cheddar, ovo, tomate, alface, abacaxi, banana, milho e batata.",
  price: 24,
  image: images.bacon
}
```

### Combos e Promocoes

Os combos ficam na lista `combos`.

As promocoes ficam na lista `promos`.

## Funcionalidades

- Layout responsivo para desktop e celular
- Logo centralizada
- Banner principal com imagem de hamburguer
- Busca por produtos
- Filtro por categoria
- Cards com fotos, descricao e preco
- Secao de combos em destaque
- Secao de promocoes
- Avaliacoes
- QR Code de acesso rapido
- Carrinho de compras
- Controle de quantidade
- Campo de observacoes
- Envio do pedido diretamente pelo WhatsApp
- Botao flutuante do WhatsApp
- Animacoes suaves ao rolar a pagina

## Observacao

Os dados de contato ainda estao como exemplo. Antes de publicar, substitua telefone, Instagram, link do Google Maps e horario pelos dados reais do Neto's na Chapa.
