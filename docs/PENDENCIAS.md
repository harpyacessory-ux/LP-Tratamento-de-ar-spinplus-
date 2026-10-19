# Pendências — LP Tratamento de Ar Comprimido (Spinplus)

Lista do que precisa ser confirmado com o cliente antes da publicação. Cada item
indica onde está no código e o que acontece se não for resolvido.

---

## 1. Briefing divergente da oferta desta LP

**Situação.** O único briefing entregue é `briefing_spinplus_compressores_parafuso.md`,
cuja oferta principal são os 12 compressores de parafuso Ingersoll Rand. Esta LP foi
construída para **tratamento de ar comprimido** (secadores, filtros e drenos), conforme
decisão do cliente.

**O que foi aproveitado do briefing:** núcleo da empresa — marca, endereço, selos de
confiança e os cinco diferenciais (itens 1 a 5 da seção
DIFERENCIAIS do briefing, com o 5º adaptado da linha de compressores para a de
tratamento de ar). A FRASE DE AUTORIDADE ("Ar comprimido para sua produtividade")
chegou a ser montada, mas foi removida por decisão do cliente.

**O que não existe para esta oferta:**
- Briefing de campanha e lista de palavras-chave de tratamento de ar comprimido.
  O H1 adotou a expressão da categoria (`tratamento de ar comprimido`), mas **não há
  validação de volume de busca nem correspondência com anúncios**.
- Fichas técnicas por modelo — sem elas, a seção TABELA TÉCNICA não foi montada.

**Encaminhamento:** solicitar o briefing de campanha específico desta LP.

---

## 2. WhatsApp não confirmado

**Situação.** O briefing registra que não há número de WhatsApp confirmado e que o
telefone **(21) 2445-0001 não deve ser presumido como WhatsApp**.

**Como está no código.** O botão flutuante (`index.html`, final do arquivo) liga para o
fixo via `tel:`. O ícone `#i-whats` já está no sprite SVG, pronto para uso.

**Ao receber o número:** trocar o `href` por `https://wa.me/55DDDNUMERO` e o `<use>` por
`#i-whats`. Ajustar a cor do botão para `#25D366` se o padrão do projeto pedir.

---

## 3. Formulário deve virar shortcode

**Situação.** O padrão do projeto proíbe formulário HTML próprio: a captação deve usar o
shortcode do plugin.

**Como está no código.** O `<form id="form-orcamento">` em `index.html` é marcação visual
de referência; o `main.js` bloqueia o envio e exibe um aviso.

**Ao publicar:** substituir o `<form>` inteiro pelo shortcode e remover o bloco
`form.addEventListener('submit', …)` do `main.js`. O shortcode ainda **não foi informado**.

---

## 4. Uso do logo Ingersoll Rand

**Situação.** O briefing marca a decisão/autorização de uso do logo de terceiro como
**ausente**.

**Como está no código.** O logo aparece em um ponto só — o selo do HERO
(`.hero-selo-marca`), em 17 px de altura, ao lado da frase "Distribuidor autorizado no
estado do Rio de Janeiro". O arquivo foi baixado do próprio site da Spinplus, onde já é
exibido publicamente.

**Se a autorização não vier:** remover a `<img>` do selo e manter só o texto. O layout
não quebra.

---

## 5. Descrições de família sem validação técnica

As quatro descrições e os doze bullets da seção LINHAS DE PRODUTO foram construídos
assim:

| Afirmação | Origem | Status |
|---|---|---|
| "Pontos de condensação de −40 °C" | URL do produto HOC no site da Spinplus | verificado |
| "De 90 a 8.000 CFM" (adsorção) | nomes dos produtos HLA (90–5.000 cfm) e dessecantes aquecidos (150–8.000 cfm) | verificado |
| "Faixa de 10 a 24.000 CFM" (refrigeração) | nomes dos produtos "10-150 cfm" e "3.600 a 24.000 CFM" | verificado |
| "Versões cíclicas e sem ciclo" | nomes dos produtos e alt text do site | verificado |
| "Ponto de orvalho positivo / negativo" | definição técnica da categoria | **inferido** |
| "Protegem secador e instrumentação" | função conhecida de filtro coalescente | **inferido** |
| "Operação sem perda de ar" | nome dos produtos ("sem perda", "sem perdas") | verificado |
| "Elementos originais Ingersoll Rand" | site institucional: "só trabalha com peças originais" | verificado |

**Encaminhamento:** validar os dois itens inferidos com o comercial. Nenhum percentual de
ganho de eficiência foi publicado — o briefing proíbe o uso dos números "8% mais
eficiência e 13% mais fluxo" sem comprovação, e eles **não** estão na página.

---

## 6. Blocos do padrão que não foram montados

Seguindo a regra de não preencher lacunas por suposição:

| Bloco | Por que ficou de fora | O que falta |
|---|---|---|
| TABELA TÉCNICA | sem ficha por modelo | vazão, pressão, ponto de orvalho e código por equipamento |
| PERGUNTAS FREQUENTES | sem dúvidas reais do comercial | 4 a 8 perguntas com respostas verificadas |
| CLIENTES E NÚMEROS | sem logos autorizados nem números com fonte | 4 a 8 logos + 3 números com escopo |
| APLICAÇÕES | sem fotos reais de operação | 4 contextos com descrição e foto 1200×900 |
| ETAPAS DO ATENDIMENTO | processo comercial não confirmado | 4 a 6 etapas validadas |
| DADOS QUE O CLIENTE PODE ENVIAR | lista não fornecida | os 6 dados que o comercial aceita para cotar |

A seção SEGMENTOS foi montada em versão texto + ícone (8 setores do site institucional).
A versão completa do padrão pede descrição setorial, 3 processos e foto por setor —
**pendente**.

---

## 7. Assets

| Asset | Status |
|---|---|
| Logo Spinplus | baixado do site (`logo-spinplus.webp`, 500×250). **Pendente:** versão em PNG transparente ~200 px de altura |
| Logo Ingersoll Rand | baixado do site (`logo-ingersoll-rand.png`). **Pendente:** arquivo 400×160 + autorização (item 4) |
| Banner HERO | **provisório**. Usa `hero-unidade-compressora.jpg`, foto real da oficina da Spinplus (unidade compressora IR com filtros coalescentes Ingersoll Rand), baixada de `uploads/2022/12/unidade-fabrica-scaled.jpg`. É retrato (1920×2560) e foi enquadrada com `object-fit: cover`. **Pendente:** arte 1981×900, de preferência mostrando secador/filtro em operação, já que a foto atual é de unidade compressora |
| Fotos sem uso | `sala-compressores-ingersoll.webp` (instalação de compressores IR com tubulação, 1173×660) e `tecnico-ingersoll.jpg` (técnico com ferramenta IR, 2560×1707) ficaram no repositório depois que a frase de autoridade foi removida |
| 22 fotos de produto | baixadas do site da Spinplus, em resoluções variadas (24 KB a 464 KB). **Pendente:** recorte padronizado 800×600 com fundo transparente |
| Fotos de aplicação/segmento | **ausentes** |

As imagens de produto não foram tratadas — vieram como estão no site, algumas com fundo
branco e outras com recorte. Em um mesmo grid isso fica visível. O `object-fit: contain`
com padding ameniza, mas o recorte padronizado continua pendente.

---

## 8. Azul-marinho fora da paleta do site

**Situação.** A direção visual aprovada pelo cliente introduziu o azul-marinho
`#14294A` como cor escura da identidade. O site institucional da Spinplus usa
`#221E1E` (preto quente) — o azul **não existe** no CSS global do Elementor.

**Como está no código.** O azul foi aplicado em títulos, topbar, seção de contato e
rodapé, e desde o redesenho do catálogo também no card de produto. O `#221E1E` ficou
restrito ao hover do botão vermelho, ao menu mobile, aos nomes dos segmentos e ao formulário.

**Risco.** Se esta LP for publicada no mesmo domínio do site atual, a LP e o resto do
site terão cores escuras diferentes. **Confirmar** se o azul é uma mudança de identidade
que vai ser aplicada ao site todo ou se vale só para esta campanha.

---

## 9. URL final

Não informada. `index.html` usa `rel="canonical"` apontando para `https://spinplus.com.br/`
como placeholder — **trocar pela URL real antes de indexar**.
