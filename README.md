# LP Tratamento de Ar Comprimido — Spinplus

Landing page de produto para a linha de **tratamento de ar comprimido** da Spinplus:
secadores por refrigeração e por adsorção, filtros coalescentes e drenos Ingersoll Rand.

HTML, CSS e JavaScript puros — sem build, sem dependências. Abrir `index.html` no
navegador já é suficiente para visualizar.

---

## Estrutura

```
index.html                  página completa
assets/
  css/styles.css            design system e layout
  js/main.js                menu mobile, filtro da vitrine, animações
  img/
    logo-spinplus.webp
    logo-ingersoll-rand.png
    produtos/               22 fotos de equipamento
docs/
  PENDENCIAS.md             o que falta confirmar com o cliente
  briefing-cliente/         briefing original recebido
```

## Seções

| # | Seção | Conteúdo |
|---|---|---|
| 1 | Topbar + Header | telefone, e-mail, cobertura RJ, navegação, CTA |
| 2 | HERO | H1 na expressão `tratamento de ar comprimido`, selo Ingersoll Rand, 3 selos de confiança |
| 3 | Linhas de produto | 4 famílias com chip, descrição, 3 características e foto |
| 4 | Vitrine | 22 equipamentos com filtro por família |
| 5 | Frase de autoridade | "Ar comprimido para sua produtividade" |
| 6 | Diferenciais | 5 itens |
| 7 | Segmentos | 8 setores atendidos |
| 8 | Contato | dados da empresa + formulário (placeholder de shortcode) |
| 9 | Rodapé | endereço, mapa do site, soluções, política de privacidade |

## Design system

O vermelho e os cinzas foram extraídos do CSS global do site da Spinplus
(`wp-content/uploads/elementor/css/post-13986.css`). O azul-marinho **não** vem do
site — foi introduzido na direção visual aprovada pelo cliente e substitui o
`#221E1E` nos títulos e nas superfícies escuras.

| Token | Valor | Origem | Uso |
|---|---|---|---|
| `--vermelho` | `#EB2B23` | site | botões, chips, ícones, diagonal do HERO |
| `--vermelho-escuro` | `#C81710` | site | hover, gradientes |
| `--vermelho-pale` | `#FDE9E8` | derivado | círculos de ícone do card de selos |
| `--navy` | `#14294A` | **direção do cliente** | títulos, topbar, seção de contato |
| `--navy-escuro` | `#0F1F39` | derivado | rodapé |
| `--cinza-claro` | `#EEF2F5` | derivado | painel claro do HERO |
| `--preto` | `#221E1E` | site | mantido só no título do card de produto |
| `--cinza-card` | `#F5F5F5` | site | corpo do card e seções alternadas |
| `--cinza-borda` | `#E7E7E7` | site | bordas |

### HERO

Layout dividido: painel claro à esquerda com o H1 em azul-marinho e a segunda linha
em vermelho, foto à direita cortada na diagonal. A faixa vermelha da diagonal nasce da
diferença entre dois `clip-path` paralelos aplicados ao contêiner e à imagem — ambos
descem 13 pontos percentuais da esquerda, o que mantém as duas arestas exatamente
paralelas sem `transform: skew`.

O card branco de selos fica sobreposto ao rodapé da seção (`margin-bottom: -58px`,
compensado pelo `padding-top` da seção seguinte). Abaixo de 900 px o HERO vira coluna
única e o `order` do flex coloca a foto depois do texto e dos selos, para o título não
sair da primeira dobra.

Fontes: **DM Sans** (títulos, botões, cards) e **Roboto** (texto), ambas via Google Fonts.

O card de produto replica o template de loop do site: imagem de 240 px com borda
`#E7E7E7` e raio 5 px no topo, corpo `#F5F5F5`, título DM Sans 17/22 px peso 600 com
`letter-spacing: -0.5px`, e botão pílula vermelho de 80 % de largura sobreposto em
−21 px, com o ícone à direita e hover preto. A grade é 4 colunas no desktop e 2 no
tablet/mobile, com os mesmos gaps de 15 px e 10 px.

## Responsivo

Três breakpoints: 1100 px, 900 px (menu vira hambúrguer, vitrine cai para 2 colunas,
imagem para 160 px) e 620 px (tudo em coluna única). Respeita
`prefers-reduced-motion`.

## Publicação

Esta LP é estática e pode ser servida como está. Para publicar no WordPress da Spinplus,
resolver antes os itens de [`docs/PENDENCIAS.md`](docs/PENDENCIAS.md) — em especial o
**formulário via shortcode** (item 3), o **WhatsApp** (item 2) e a **URL canônica**
(item 9).

### GitHub Pages

Em *Settings → Pages*, escolher a branch `main` e a pasta raiz (`/`). O site fica
disponível em `https://harpyacessory-ux.github.io/LP-Tratamento-de-ar-spinplus-/`.

## Avisos

- As 22 fotos de produto e os dois logos foram baixados do site público da Spinplus e
  **não foram tratados** — resolução e recorte variam. Ver item 7 das pendências.
- O uso gráfico do logo Ingersoll Rand **depende de autorização** ainda não registrada.
- Nenhum percentual de ganho de eficiência foi publicado na página, conforme o briefing.
