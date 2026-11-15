/* ============================================================
   CATÁLOGO PRINT ATELIÊ 3D — edite só este arquivo
   ------------------------------------------------------------
   fotos:  arquivos da pasta img/ (a 1ª é a capa do card)
   preco:  texto exibido ("R$ 34,90", "a partir de R$ 5,00", "Pedir cotação")
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
  },
  {
    id: "sagrada-familia-abraco", nome: "Sagrada Família Abraço", categoria: "Natal",
    preco: "Pedir cotação", inclui: "peça de mesa", status: "encomenda", etiqueta: "Em alta",
    descricao: "Maria, José e o Menino Jesus num abraço, em traço suave e moderno. Lindo para a mesa da ceia ou para presentear.",
    fotos: ["https://stlflix.b-cdn.net/Holy_Family_Embrace_thumb_EN_f2ad7d9706.png?width=700"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "anjo-da-guarda-luminaria", nome: "Anjo da Guarda Luminoso", categoria: "Natal",
    preco: "Pedir cotação", inclui: "luminária · vela LED", status: "encomenda", etiqueta: "Em alta",
    descricao: "Anjo com asas abertas e luz quente por dentro. Decoração de Natal que também vira presente o ano todo.",
    fotos: ["https://stlflix.b-cdn.net/Guardian_Angel_Table_Lamp_thumb_EN_641f3316f5.png?width=700"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "presepio-iluminado", nome: "Presépio Iluminado", categoria: "Natal",
    preco: "Pedir cotação", inclui: "luminária · vela LED", status: "encomenda", etiqueta: "",
    descricao: "Cena do presépio recortada com luz por trás, que projeta sombras bonitas na parede.",
    fotos: ["https://stlflix.b-cdn.net/Bright_Nativity_Table_Lampthumb_04c71c25a7.jpg?width=700"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "papai-noel-fofinho", nome: "Papai Noel Fofinho", categoria: "Natal",
    preco: "Pedir cotação", inclui: "decoração de mesa", status: "encomenda", etiqueta: "Em alta",
    descricao: "Papai Noel sentadinho, com barba texturizada e cores vivas. Fofo para estante e mesa.",
    fotos: ["https://stlflix.b-cdn.net/Jolly_Santa_thumb_EN_d77e9277a7.png?width=700"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "papai-noel-joao-bobo", nome: "Papai Noel João-Bobo", categoria: "Natal",
    preco: "Pedir cotação", inclui: "balança e volta", status: "encomenda", etiqueta: "",
    descricao: "Papai Noel que balança e sempre volta a ficar em pé. As crianças adoram.",
    fotos: ["https://stlflix.b-cdn.net/Roly_Poly_Santa_thumb_EN_59f8361aa9.png?width=700"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "rena-aconchegante", nome: "Rena Aconchegante", categoria: "Natal",
    preco: "Pedir cotação", inclui: "decoração de mesa", status: "encomenda", etiqueta: "",
    descricao: "Rena de cachecol com cara de inverno aconchegante. Combina com o Papai Noel e o pinguim.",
    fotos: ["https://stlflix.b-cdn.net/Cozy_Reindeer_thumb_EN_eae6c2e353.png?width=700"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "pinguim-cachecol", nome: "Pinguim de Cachecol", categoria: "Natal",
    preco: "Pedir cotação", inclui: "decoração de mesa", status: "encomenda", etiqueta: "",
    descricao: "Pinguim de cachecol listrado, pronto para o frio do Natal.",
    fotos: ["https://stlflix.b-cdn.net/Scarfed_Penguinthumb_EN_601479db11.png?width=700"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "arvore-luminosa", nome: "Árvore Luminosa", categoria: "Natal",
    preco: "Pedir cotação", inclui: "luminária · vela LED", status: "encomenda", etiqueta: "",
    descricao: "Árvore de Natal vazada com luz por dentro. Deixa o ambiente quentinho à noite.",
    fotos: ["https://stlflix.b-cdn.net/Luminous_Treethumb_EN_69b076dac0.png?width=700"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "gatinho-na-arvore", nome: "Gatinho na Árvore", categoria: "Natal",
    preco: "Pedir cotação", inclui: "decoração de mesa", status: "encomenda", etiqueta: "",
    descricao: "Gatinho travesso derrubando a árvore de Natal. Presente divertido para quem tem gato.",
    fotos: ["https://stlflix.b-cdn.net/Tree_Trouble_Kittythumb_EN_59134567ff.png?width=700"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "caixinha-presente-clicker", nome: "Caixinha de Presente Clicker", categoria: "Natal",
    preco: "Pedir cotação", inclui: "lembrancinha", status: "encomenda", etiqueta: "",
    descricao: "Caixinha de presente com tampa que salta e faz clique. Lembrancinha de Natal para turma e equipe.",
    fotos: ["https://stlflix.b-cdn.net/Pop_Up_Gift_Box_Clickers_thumb_EN_fd23ce5182.png?width=700"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "rena-natalina", nome: "Rena Natalina", categoria: "Natal",
    preco: "Pedir cotação", inclui: "decoração de mesa", status: "encomenda", etiqueta: "Em alta",
    descricao: "Rena estilizada em peças que se encaixam. Uma das decorações mais impressas deste Natal.",
    fotos: ["https://makerworld.bblmw.com/makerworld/model/US54e683eb15165c/design/2025-11-16_c540fbdd15f248.png?x-oss-process=image/resize,w_700/format,webp"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "boneco-neve-trico", nome: "Boneco de Neve de Tricô", categoria: "Natal",
    preco: "Pedir cotação", inclui: "textura de tricô", status: "encomenda", etiqueta: "Em alta",
    descricao: "Boneco de neve com textura que parece tricô de verdade. Charmoso e diferente.",
    fotos: ["https://makerworld.bblmw.com/makerworld/model/USc4a59b1ad325a4/design/2026-01-07_be94d1ede31bf.jpg?x-oss-process=image/resize,w_700/format,webp"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "papai-noel-trico", nome: "Papai Noel de Tricô", categoria: "Natal",
    preco: "Pedir cotação", inclui: "textura de tricô", status: "encomenda", etiqueta: "",
    descricao: "Papai Noel com textura de tricô, da mesma coleção do boneco de neve.",
    fotos: ["https://makerworld.bblmw.com/makerworld/model/US1055211aa4ec0e/design/b9bd688881594935.jpg?x-oss-process=image/resize,w_700/format,webp"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "arvore-minimalista", nome: "Árvore de Natal Minimalista", categoria: "Natal",
    preco: "Pedir cotação", inclui: "decoração de mesa", status: "encomenda", etiqueta: "Novo",
    descricao: "Árvore em linhas simples, estilo escandinavo. Para quem prefere uma decoração clean.",
    fotos: ["https://makerworld.bblmw.com/makerworld/model/USe11a183eb1e66c/design/ecf8cf92cb6b63fa.png?x-oss-process=image/resize,w_700/format,webp"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "presepio-decorativo", nome: "Presépio Decorativo", categoria: "Natal",
    preco: "Pedir cotação", inclui: "peça de mesa", status: "encomenda", etiqueta: "Novo",
    descricao: "Presépio em silhueta com estrela, para a mesa ou o aparador.",
    fotos: ["https://makerworld.bblmw.com/makerworld/model/US8adad954d65a5/design/cd417df487b05d75.png?x-oss-process=image/resize,w_700/format,webp"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "casinha-velas", nome: "Casinha para Velas", categoria: "Natal",
    preco: "Pedir cotação", inclui: "para vela LED", status: "encomenda", etiqueta: "",
    descricao: "Casinha de inverno com janelas vazadas. Coloque uma vela LED e veja as janelas acenderem.",
    fotos: ["https://makerworld.bblmw.com/makerworld/model/US466e10851041fe/design/2025-10-16_8a2f49e9580db8.png?x-oss-process=image/resize,w_700/format,webp"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "enfeite-nomes-familia", nome: "Enfeite com Nomes da Família", categoria: "Personalizados",
    preco: "Pedir cotação", inclui: "com os nomes que você quiser", status: "encomenda", etiqueta: "Personalizado",
    descricao: "Enfeite para a árvore com o nome de cada pessoa da família. Presente com a cara de quem recebe.",
    fotos: ["https://makerworld.bblmw.com/makerworld/model/USa1ba4a33679723/design/2025-11-27_7899ead25e3c98.jpg?x-oss-process=image/resize,w_700/format,webp"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  },
  {
    id: "tubo-presente-dinheiro", nome: "Tubo-Desafio para Dar Dinheiro", categoria: "Personalizados",
    preco: "Pedir cotação", inclui: "presente criativo", status: "encomenda", etiqueta: "",
    descricao: "Tubo-quebra-cabeça para esconder dinheiro ou vale-presente. Só abre quem resolve o desafio.",
    fotos: ["https://makerworld.bblmw.com/makerworld/model/USdf45a96e188478/design/2025-11-21_8fee0caa71576.jpg?x-oss-process=image/resize,w_700/format,webp"], links: { mercadolivre: "", shopee: "", tiktok: "" }
  }
];
