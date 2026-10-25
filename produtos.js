/* ============================================================
   CATÁLOGO PRINT ATELIÊ 3D — edite só este arquivo
   ------------------------------------------------------------
   fotos:  arquivos da pasta img/ (a 1ª é a capa do card)
   preco:  texto exibido ("R$ 34,90", "a partir de R$ 5,00", "sob consulta")
   inclui: texto curto embaixo do preço ("3 unidades", "com vela LED")
   links:  cole o link do anúncio. Vazio "" = o botão não aparece.
   status: "disponivel" | "encomenda" | "breve"
   etiqueta: selo no card ("Novo", "Mais vendido"...) ou ""
   ============================================================ */
window.WHATSAPP = "5517981353757";
window.INSTAGRAM = "printatelie3d";

window.CATEGORIAS = ["Natal", "Cozinha", "Decoração", "Personalizados"];

window.PRODUTOS = [
  {
    id: "presepio-luminoso", nome: "Presépio Luminoso", categoria: "Natal",
    preco: "R$ 99,90", inclui: "luminária 19 cm · vela LED", status: "encomenda", etiqueta: "Destaque",
    descricao: "Sagrada Família numa estrebaria iluminada por dentro com vela LED de luz quente. Peça de 19 cm que vira o centro da decoração de Natal.",
    fotos: ["img/presepio.jpg"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "papai-noel-fogueira", nome: "Papai Noel na Fogueira", categoria: "Natal",
    preco: "R$ 69,90", inclui: "luminária 11 cm · vela LED", status: "encomenda", etiqueta: "Mais pedido",
    descricao: "Papai Noel e a rena se aquecendo na fogueira, com vela LED que acende de verdade. Colorido e cheio de detalhes.",
    fotos: ["img/papai-noel.jpg"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "guirlanda-pinheiros", nome: "Guirlanda de Pinheiros", categoria: "Natal",
    preco: "R$ 49,90", inclui: "para porta ou parede", status: "encomenda", etiqueta: "",
    descricao: "Guirlanda com pinheiros, azevinho e laço dourado. Leve, não desbota e dura vários Natais.",
    fotos: ["img/guirlanda.jpg"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "tigelas-arvore", nome: "Tigelas Árvore de Natal", categoria: "Cozinha",
    preco: "R$ 34,90", inclui: "3 unidades · empilháveis", status: "encomenda", etiqueta: "",
    descricao: "Tigelas em formato de árvore para servir biscoitos, doces e petiscos na ceia. Empilham para guardar.",
    fotos: ["img/tigelas.jpg"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "porta-copos-natalino", nome: "Porta-copos Natalino", categoria: "Cozinha",
    preco: "R$ 39,90", inclui: "4 unidades", status: "encomenda", etiqueta: "",
    descricao: "Jogo de porta-copos com flocos de neve em relevo, em vermelho e verde. Protege a mesa e decora.",
    fotos: ["img/porta-copos.jpg"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "cortadores-biscoito", nome: "Cortadores de Biscoito de Natal", categoria: "Cozinha",
    preco: "R$ 39,90", inclui: "kit com 7 modelos", status: "encomenda", etiqueta: "",
    descricao: "Boneco de neve, Mamãe Noel, Papai Noel, árvore, rena, boneco de gengibre e bola. Lavar à mão.",
    fotos: ["img/cortadores.jpg"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "placa-feliz-natal", nome: "Placa Feliz Natal", categoria: "Decoração",
    preco: "R$ 24,90", inclui: "13 × 14 cm · decoração de mesa", status: "encomenda", etiqueta: "",
    descricao: "Letreiro Feliz Natal com floco de neve, para mesa, aparador ou estante. Escolha a cor.",
    fotos: ["img/placa-feliz-natal.jpg"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  }
];
