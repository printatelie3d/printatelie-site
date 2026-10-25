/* ============================================================
   CATÁLOGO PRINT ATELIÊ 3D — edite só este arquivo
   ------------------------------------------------------------
   Para cada produto:
   - fotos: arquivos dentro da pasta img/ (deixe [] se ainda não tiver foto)
   - preco: texto do jeito que aparece no site ("R$ 38,14", "a partir de R$ 5,00", "sob consulta")
   - links: cole o link do anúncio. Link vazio "" = o botão não aparece.
   - destaque: true mostra a etiqueta laranja no card
   - status: "disponivel" | "encomenda" | "breve"
   ============================================================ */
window.WHATSAPP = "5517981353757";
window.INSTAGRAM = "printatelie3d";

window.PRODUTOS = [
  {
    id: "descanso-colher-tampa",
    nome: "Descanso de Colher e Tampa",
    categoria: "Cozinha",
    preco: "R$ 38,14",
    status: "disponivel",
    destaque: true,
    etiqueta: "Novo",
    descricao: "Apoia colher, concha e a tampa da panela ao mesmo tempo. Nada de bancada suja enquanto você cozinha. 12 × 18 cm, em PETG preto, fácil de lavar.",
    fotos: ["img/descanso-1.jpg", "img/descanso-2.jpg"],
    links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "gancho-raquete",
    nome: "Gancho Adesivo para Raquete",
    categoria: "Esporte",
    preco: "R$ 6,00",
    status: "encomenda",
    destaque: false,
    etiqueta: "",
    descricao: "Gancho de parede com fita 3M dupla face, pronto para colar. Ideal para lojas e quadras de beach tennis e tênis. Pode sair na cor da sua loja e com o seu nome em relevo.",
    fotos: ["img/gancho-2.jpg", "img/gancho-3.jpg", "img/gancho-1.jpg"],
    links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "ponteira-lapis-nome",
    nome: "Ponteira de Lápis com Nome",
    categoria: "Personalizados",
    preco: "a partir de R$ 5,00",
    status: "encomenda",
    destaque: true,
    etiqueta: "Escolas",
    descricao: "Ponteira personalizada com o nome de cada aluno, na cor que você escolher e nome em branco. Perfeita para lembrancinha de escola e volta às aulas.",
    fotos: [],
    links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "papai-noel-fogueira",
    nome: "Papai Noel na Fogueira (luminária)",
    categoria: "Natal",
    preco: "sob consulta",
    status: "breve",
    destaque: false,
    etiqueta: "",
    descricao: "Papai Noel sentado na fogueira com vela de LED de luz quente. Decoração de Natal que acende de verdade.",
    fotos: [],
    links: { mercadolivre: "", shopee: "", tiktok: "" }
  }
];
