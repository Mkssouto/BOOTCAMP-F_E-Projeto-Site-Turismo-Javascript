// Função para catalogos de destinos dinamico
// Contrução de objetos, funcões carrossel e modal.

// inicio objeto catalogos
const catalogos = {
  catalogoBrasil: [
    {            
      image: "brasil/rio-de-janeiro-1963744_640.jpg",
      title: "Rio de Janeiro - RJ",
      description: 
      "O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo. ",
      alt:"vista áerea da Enseada de Botafogo e Pão de Açucar", 
      curtidas: 3122,
    },
    {
      image: "brasil/sao-paulo-1197052_640.jpg",
      title: "São Paulo, SP",
      description:
      "São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer. A igreja em estilo colonial do Pátio do Colégio marca o local onde os padres jesuítas fundaram a cidade em 1554.",
      alt: "Ponte Otavio Frias de Oliveira",
      curtidas: 2587,
    },
    {
      image: "brasil/salvador-2379443_640.jpg",
      title: "Salvador, BA",
      description:
      "Salvador, a capital do estado da Bahia no nordeste do Brasil, é conhecida pela arquitetura colonial portuguesa, pela cultura afrobrasileira e pelo litoral tropical. O bairro do Pelourinho é seu coração histórico, com vielas de paralelepípedo terminando em praças grandes, prédios coloridos e igrejas barrocas, como São Francisco, com trabalhos em madeira revestidos com ouro.",
      alt:"Predios coloridos do Pelourinho",
      curtidas: 792,
    },
    {
      image: "brasil/brasilia-3661533_640.jpg",
      title: "Brasília, DF",
      description:
      "Brasília é a capital federal do Brasil e a sede de governo do Distrito Federal. A capital brasileira é a maior cidade do mundo construída no século XX. Como capital nacional, Brasília abriga a sede dos três poderes da República (Executivo, Legislativo e Judiciário) e 127 embaixadas estrangeiras. A cidade é considerada um Patrimônio Mundial pela UNESCO, devido ao seu conjunto arquitetônico e urbanístico",
      alt:"A Catedral Metropolitana - Nossa Senhora Aparecida ou simplesmente Catedral de Brasília",
      curtidas: 1001,
    },
    {
      image: "brasil/waterfalls-of-iguacu-ga056b61b4_640.jpg",
      title: "Foz do Iguaçu, PR",
      description:
      "Foz do Iguaçu, cidade no estado brasileiro do Paraná, é a principal base para visitar as famosas Cataratas do Iguaçu, uma das maiores cachoeiras do mundo. Com uma extensão de 2,7 km e atravessando a fronteira com a Argentina, as cataratas são formadas por centenas de cascatas, entre elas a Garganta do Diabo, com 80 m de altura. Passeios em barcos infláveis durante os quais os turistas ficam encharcados são uma forma muito comum de apreciar esse espetáculo natural.",
      alt:"Vista aerea da queda d'água das cataratas de Foz do Iguaçú",
      curtidas: 527,
    },
    {
      image: "brasil/Fernando-Noronha-sunset-g29a30d68d_640.jpg",
      title: "Fernando de Noronha, PE",
      description:
      "Fernando de Noronha é um arquipélago vulcânico situado a cerca de 350 quilómetros ao largo da costa nordeste do Brasil. Tem o nome da sua maior ilha, um parque marinho e santuário ecológico protegido com uma linha costeira recortada e vários ecossistemas. É reconhecida pelas suas praias pouco urbanizadas e por atividades como mergulho e snorkeling. As tartarugas marinhas, as raias, os golfinhos e os tubarões dos recifes nadam nas águas quentes e cristalinas. ",
      alt:"Nascer do sol em Fernando de Noronha",
      curtidas: 2939,
    },
    // {
    //   image: "",
    //   title: "",
    //   description:
    //   " ",
    //   curtidas: ,
    // },
    // {
    //   image: "",
    //   title: "",
    //   description:
    //   " ",
    //   curtidas: ,
    // }
],

catalogoEuropa : [
    {
      image: "europa/paris-3349075_640.jpg", 
      title: "Paris, França",
      description:
      "Paris é a capital e a mais populosa cidade da França. Desde o século XVII, Paris é um dos principais centros de finanças, diplomacia, comércio, moda, ciência e artes da Europa. De acordo com a Pesquisa de Custo de Vida da Economist Intelligence Unit em 2018, Paris era a segunda cidade mais cara do mundo, atrás apenas da Singapura e à frente de Zurique, Hong Kong, Oslo e Genebra. Abrangendo numerosos monumentos e por conta de seu considerável papel político e econômico, Paris é também uma importante cidade na história do mundo. Sua posição numa     encruzilhada entre os itinerários comerciais terrestres e fluviais no coração de uma rica região agrícola a tornou uma das principais cidades francesas ao longo do século X, beneficiada com palácios reais, ricas abadias e uma catedral.",
      alt: "Torre Eifel",
      curtidas: 5788,
    },
    {
      image: "europa/amsterdam-2989865_640.jpg",
      title: "Amsterdã, Holanda",
      description:
      "Amesterdã é a capital e a cidade mais populosa do Reino dos Países Baixos. O seu     estatuto de capital holandesa é garantido pela Constituição dos Países Baixos, embora não seja a sede do governo holandês, que fica em Haia. O nome da cidade deriva Amstelredamme, uma indicação de sua origem como uma represa do rio Amstel. Originária de uma pequena vila de pescadores que surgiu no final do século XII, Amesterdã tornou-se um dos portos mais importantes do mundo durante o Século XVII. Os canais de Amesterdão e a Linha de Defesa de Amesterdão são considerados Patrimónios Mundiais pela UNESCO.",
      alt: "Canal de Amsterdan com barcos e sua arquitetura carcteristica",
      curtidas: 5201,
    },
    {
      image: "europa/prague-3010407_640.jpg",
      title: "Praga, República Tcheca",
      description:
      " Praga é a capital e a maior cidade da República Tcheca, situada na margem do Vltava. Conhecida como 'cidade das cem cúpulas', Praga é um dos mais belos e antigos centros urbanos da Europa, famosa pelo extenso patrimônio arquitetônico e rica vida cultural. Importante também como núcleo de transportes e comunicações, é o principal centro econômico e industrial da Chéquia. Situada na Boêmia central, a cidade de Praga localiza-se sobre colinas, em ambas as margens do rio Vltava, pouco antes de sua confluência com o rio Elba. O curso sinuoso do rio através da cidade, cheia de belas e antigas pontes, contrasta com a presença imponente do grande Castelo de Praga em Hradcany, que domina a capital na margem esquerda (oriental) do Vltava.",
      alt: "Castelo de Praga iluminado a noite",
      curtidas: 3098,
    },
    {
      image: "europa/roma-2182371_640.jpg",
      title: "Roma, Itália",
      description:
      "Roma é a capital da Itália e também da região do Lácio, além de ser o centro da     Cidade Metropolitana de Roma. A cidade está localizada na porção centro-oeste da     Península Itálica, ao longo das margens do rio Tibre. A Cidade do Vaticano (o     menor país do mundo) é um país independente dentro dos limites da cidade de Roma, o único exemplo existente de um país dentro de uma cidade no mundo. Roma é muitas vezes referida como a 'Cidade das Sete Colinas' devido à sua localização geográfica, e também como a 'Cidade Eterna', por conta de sua longa história. Roma é geralmente considerada o 'berço da cultura e da civilização ocidental e cristã' e o centro da Igreja Católica. A história de Roma abrange 28 séculos.",
      alt: "O Coliseu de Roma",
      curtidas: 4012,
    },
    {
      image: "europa/brand-front-of-the-brandenburg-gate-g9d1de91d5_640.jpg",
      title: "Berlim, Alemanha",
      description:
      "Berlim, a capital da Alemanha, existe desde o século XIII. Algumas recordações da história turbulenta da cidade no século XX são o Memorial do Holocausto e as ruínas do Muro de Berlim, repletas de grafites. Usado como divisão de fronteiras durante a Guerra Fria, o Portão de Brandemburgo, construído no século XVIII, tornou-se um símbolo da reunificação. A cidade também é conhecida por seu cenário artístico e seus monumentos modernos, como a Filarmônica de Berlim, dourada e de telhado triangular, construída em 1963.",
      alt: "Porta de Brandemburgo",
      curtidas: 2099,
    },
    {
      image: "europa/vienna-g733d2fd21_640.jpg",
      title: "Viena, Austria",
      description:
      "Viena, a capital da Áustria, fica no leste do país, às margens do rio Danúbio. Seu legado artístico e intelectual se consolidou com as obras de figuras como Mozart, Beethoven e Sigmund Freud, que nela viveram. A cidade também é conhecida por seus palácios imperiais, como Schönbrunn, a casa de veraneio da família Habsburgo. No distrito MuseumsQuartier, há construções históricas e contemporâneas que expõem obras de Egon Schiele, Gustav Klimt e outros artistas.",
      alt: "Viena Opera House iluminada a noite",
      curtidas: 2177,
    }
  ],

  catalogoEUA : [
    {
      image: "eua/washington-dc-85531_640.jpg",
      title: "Washington, DC",
      description:
      "Washington, DC, capital dos EUA, é uma cidade compacta às margens do rio Potomac, vizinha aos estados de Maryland e Virgínia. Nela, destacam-se monumentos e prédios neoclássicos imponentes, como os que servem de sede aos 3 poderes federais: o Capitólio, a Casa Branca e a Suprema Corte. A cidade também abriga museus emblemáticos e centros de artes cênicas, como o Kennedy Center. Além disso, a cidade abriga também as sedes do Fundo Monetário Internacional, do Banco Mundial, da Organização dos Estados Americanos, entre diversas outras instituições nacionais e internacionais. ",
    alt: "Capitólio a noite",
      curtidas: 1743,
    },
    {
      image: "eua/new-york-1587558_640.jpg",
      title: "Nova Iorque, NY",
      description:
      "A cidade de Nova York compreende 5 distritos situados no encontro do rio Hudson com o Oceano Atlântico. No centro da cidade fica Manhattan, um distrito com alta densidade demográfica que está entre os principais centros comerciais, financeiros e culturais do mundo. Entre seus pontos emblemáticos, destacam-se arranha-céus, como o Empire State Building, e o enorme Central Park. O teatro da Broadway fica em meio às luzes de neon da Times Square. ",
      alt: "Rua de Nova Iorque cheia de luzes e pessoas",
      curtidas: 5011,
    },
    {
      image: "eua/las_vegas-932708_640.jpg",
      title: "Las Vegas, NV",
      description:
      " Las Vegas, localizada no deserto de Mojave, em Nevada, é uma cidade turística famosa pela vida noturna vibrante, com cassinos 24 horas e outras opções de entretenimento. Sua rua principal é The Strip, com quase 7 quilômetros de comprimento. A avenida concentra hotéis temáticos, com atrações sofisticadas, como as fontes sincronizadas com música e réplicas de uma pirâmide egípcia, do Grande Canal de Veneza e da Torre Eiffel.",
      alt: "Letreiro da cidade de Las Vegas",
      curtidas: 3308,
    },
    {
      image: "eua/sao_francisco-2154194_640.jpg",
      title: "São Francisco, CA",
      description:
      "São Francisco, no norte da Califórnia, é uma cidade com colinas situada na ponta de uma península cercada pelo Oceano Pacífico e pela Baía de São Francisco. Ela é conhecida pela névoa que dura o ano todo, pela emblemática Ponte Golden Gate, por seus bondinhos e por suas coloridas casas vitorianas. O Transamerica Pyramid no Distrito Financeiro é o arranha-céu mais conhecido da cidade. Na baía, encontra-se a Ilha de Alcatraz, onde ficava a famosa antiga prisão.  ",
      alt: "A Famosa Ponte Golden Gate",
      curtidas: 2988,
    },
    {
      image: "eua/detroit-g817021643_640.jpg",
      title: "Detroit, MI",
      description:
      "Detroit é a maior cidade do estado do Michigan, na região centro-oeste. Perto do centro, o Detroit Institute of Arts, de estilo neoclássico, é célebre pelos Detroit Industry Murals, pintados por Diego Rivera e inspirados pelos laços da cidade à indústria automóvel, que lhe valeram a alcunha de 'Motor City'. Detroit é também o berço da editora discográfica Motown Records, cujo histórico de lugares cimeiros nas tabelas está exposto na respetiva sede original em Hitsville, nos EUA. ",
      alt: "Centro da cidade a noite",
      curtidas: 187,
    },
    {
      image: "eua/surf-g0610ae4cb_640.jpg",
      title: "Havaí",
      description:
      "O Havaí, um estado dos EUA, é um arquipélago vulcânico isolado no Pacífico Central. Suas ilhas são conhecidas pelas paisagens acidentadas compostas de penhascos, cachoeiras, florestas tropicais e praias com areia dourada, vermelha, preta e até mesmo verde. Das 6 ilhas principais, Oahu tem a maior cidade e capital do Havaí, Honolulu, que abriga a praia de Waikiki, em formato de lua crescente, e os memoriais da Segunda Guerra Mundial, em Pearl Harbor. ",
      alt: "Surfista em um onda muito grande",
      curtidas: 843,
    },
  ],

  catalogoAmerS : [
    {
      image: "am_sul/argentina-gdf4da2bab_640.jpg",
      title: "Argentina",
      description:
      "A Argentina é um país da América do Sul com uma área extensa que abrange montanhas dos Andes, lagos glaciais e pradarias nos Pampas, ocupadas tradicionalmente por seu famoso gado. O país é conhecido também por sua dança e sua música, o tango. A capital cosmopolita, Buenos Aires, tem como centro a Praça de Maio, cercada por edifícios imponentes do século XIX, como a Casa Rosada, o emblemático palácio presidencial.",
     alt: "El Caminito Buenos Aires",
      curtidas: 421,
    },
    {
      image: "am_sul/chile-g91a55984e_640.jpg",
      title: "Chile",
      description:
      "O Chile é um país de território comprido e estreito que se estende pelo extremo oeste da América do Sul, com mais de 6.000 km de litoral ao longo do Oceano Pacífico. Santiago, sua capital, fica localizada em um vale cercado pelos Andes e pelas montanhas da Cordilheira da Costa do Pacífico Sul. Nessa cidade, a Plaza de Armas, repleta de palmeiras, abriga a catedral neoclássica e o Museu de História Nacional. O imenso Parque Metropolitano tem piscinas, um jardim botânico e um zoológico.",
     alt: "Deserto do Atacama",
      curtidas: 537,
    },
    {
      image: "am_sul/colombia-farol-cartagena-g06a679723_640.jpg",
      title: "Colombia",
      description:
      "A Colômbia é um país no extremo norte da América do Sul. Sua paisagem é marcada por florestas tropicais, pela Cordilheira dos Andes e por várias plantações de café. Na capital Bogotá, que se encontra a uma grande altitude, a Zona Rosa é conhecida por seus restaurantes e lojas. Cartagena, na costa caribenha, conta com uma Cidade Antiga colonial murada, um castelo do século XVI e recifes de corais. ",
     alt: "Praia com farol em Cartagena",
      curtidas: 417,
    },
    {
      image: "am_sul/peru-gd6332e7bd_640.jpg",
      title: "Peru",
      description:
      "O Peru é um país da América do Sul que abriga uma parte da Floresta Amazônica e Machu Picchu, uma antiga cidade inca na cordilheira dos Andes. A região ao redor de Machu Picchu, que abrange o Vale Sagrado dos Incas, o Camino Inca e a cidade colonial de Cusco, é rica em sítios arqueológicos. Na costa árida do Pacífico fica Lima, a capital, com um centro colonial preservado e coleções importantes de arte pré-colombiana. ",
     alt: "Ruinas de Machu Picchu",
      curtidas: 644 ,
    },
    {
      image: "am_sul/sajama-gfb63259b0_640.jpg",
      title: "Bolivia",
      description:
      "A Bolívia é um país da parte central da América do Sul, com relevo variado que inclui a cordilheira dos Andes, o deserto de Atacama e a floresta tropical da bacia do rio Amazonas. A mais de 3.500 m de altitude, sua capital administrativa, La Paz, está localizada no altiplano andino, tendo a montanha Illimani, coberta de neve, como plano de fundo. Perto dali, na fronteira com o Peru, fica o maior lago do continente, o Titicaca, cujas águas têm aparência lisa como o vidro. ",
    alt: "Vulcão extinto Sajama",   
    curtidas: 328,
    },
    {
      image: "am_sul/equestrian-g02878570b_640.jpg",
      title: "Uruguai",
      description:
      "O Uruguai é um país da América do Sul conhecido pelo interior verdejante e pelo litoral repleto de praias. A capital, Montevidéu, tem como ponto principal a Plaza Independencia, onde já existiu uma cidadela espanhola. Ela leva à Ciudad Vieja (Cidade Antiga), com edifícios art déco, casas coloniais e o Mercado del Puerto, um antigo mercado portuário com muitas churrascarias. La Rambla, um calçadão à beira-mar, passa por barracas de peixes, píeres e parques.",
    alt: "Plaza Independencia",
      curtidas: 208,
    }
  ],

  catalogoAmerCN : [
    {
      image: "am_central_norte/canada-g9e27c6459_640.jpg",
      title: "Canadá",
      description:
      "O Canadá é um país norte-americano que se estende desde os EUA, no sul, até o Círculo Polar Ártico, no norte. Entre suas grandes cidades estão a gigantesca Toronto; Vancouver, centro cinematográfico da costa oeste; Montreal e Québec City, que falam francês; e a capital, Ottawa. As vastas regiões de natureza selvagem do Canadá compreendem o Parque Nacional de Banff, repleto de lagos nas Montanhas Rochosas. Abriga também as Cataratas do Niágara, um famoso conjunto de enormes cachoeiras.",
     alt: "Lago cercado de montanhas e árvores",
      curtidas: 305,
    },
    {
      image: "am_central_norte/cancun-4301422_640.jpg",
      title: "México",
      description:
      "O México é um país situado entre os Estados Unidos e a América Central, conhecido pelas praias no Pacífico e no Golfo do México e pela paisagem diversificada que inclui montanhas, desertos e selvas. Ruínas antigas, como Teotihuacán e a cidade maia de Chichén Itzá, estão espalhadas pelo país, assim como cidades da era colonial espanhola. Na capital, Cidade do México, lojas elegantes, museus renomados e restaurantes gourmet atendem às necessidades da vida moderna.",
     alt: "Pier com vista para o maravilhoso mar azul do Caribe",
      curtidas: 2974,
    },
    {
      image: "am_central_norte/cathedral-nicaragua-g183873161_640.jpg",
      title: "Nicaragua",
      description:
      "A Nicarágua, situada entre o Oceano Pacífico e o Mar do Caribe, é um país da América Central conhecido pela impressionante paisagem que compreende lagos, vulcões e praias. O vasto lago Manágua e o famoso estratovulcão Momotombo ficam ao norte da capital Manágua. Ao sul está localizada Granada, conhecida pela arquitetura colonial espanhola e por um arquipélago de ilhotas navegáveis e ricas em pássaros tropicais.",
     alt: "A imponente Catedral de Granada",
      curtidas: 240,
    },
    {
      image: "am_central_norte/panama-city-g980988e51_640.jpg",
      title: "Panamá",
      description:
      "O Panamá é um país no istmo que liga a América Central à do Sul. O Canal do Panamá, uma reconhecida proeza de engenharia, corta o centro do país, ligando os oceanos Atlântico e Pacífico e criando uma importante rota de navegação. Na capital, a Cidade do Panamá, arranha-céus modernos, cassinos e casas noturnas contrastam com as construções coloniais do distrito de Casco Viejo e com a floresta tropical do Parque Natural Metropolitano.",
     alt: "Vista panoramica da Cidade do Panamá",
      curtidas: 301,
    },
    // {
    //   image: "",
    //   title: "",
    //   description:
    //   " ",
    // alt: "",   
    //curtidas: ,
    // },
    // {
    //   image: "",
    //   title: "",
    //   description:
    //   " ",
    // alt: "",
    //   curtidas: ,
    // }
  ],

  catalogoAsia : [
    {
      image: "asia/muralha-da-china-sunset-g4c4339d81_640.jpg",
      title: "China",
      description:
      "A China é uma nação muito populosa da Ásia Oriental cuja ampla paisagem abrange pradarias, desertos, montanhas, lagos, rios e mais de 14.000 km de litoral. A capital Pequim combina a arquitetura moderna com locais históricos, como o complexo de palácios da Cidade Proibida e a Praça da Paz Celestial. Xangai é um centro financeiro global repleto de arranha-céus. A emblemática Muralha da China corta a região norte do país de leste a oeste.",
     alt: "Muralha da China ao amanhecer",
      curtidas: 417,
    },
    {
      image: "asia/petra-ge81b516ba_640.jpg",
      title: "Jordania",
      description:
      "A Jordânia, uma nação árabe situada na margem leste do rio Jordão, é conhecida pelos monumentos antigos, pelas reservas naturais e pelos resorts à beira-mar. O país abriga o famoso sítio arqueológico de Petra, a capital dos nabateus, que data de aproximadamente 300 a.C. Situada em um estreito vale com tumbas, templos e monumentos esculpidos nos penhascos de arenito cor-de-rosa que a rodeiam, Petra faz jus ao apelido de 'Cidade Rosa'. ",
     alt: "Lindo Casarão embutido nas pedras",
      curtidas: 369,
    },
    {
      image: "asia/dubai-g54235da47_640.jpg",
      title: "Emirados Árabes Unidos",
      description:
      "Os Emirados Árabes Unidos são uma nação da península Arábica localizada predominantemente ao longo do Golfo Pérsico. O país é uma federação de 7 emirados. Abu Dhabi, a capital da ilha, abriga a Mesquita Xeique Zayed, com lustres de cristal e espaço para 40.000 fiéis. Dubai conta com a ultramoderna torre Burj Khalifa, enormes shopping centers e extravagantes atrações de entretenimento.",
     alt: "arranha-céus de Dubai a noite",
      curtidas: 2508,
    },
    {
      image: "asia/japao-heritage-g76cb9f0e5_640.jpg",
      title: "Japão",
      description:
      "O Japão, país insular no Oceano Pacífico, tem cidades densas, palácios imperiais, parques nacionais montanhosos e milhares de santuários e templos. Os trens-bala Shinkansen conectam as principais ilhas: Kyushu (com as praias subtropicais de Okinawa), Honshu (onde ficam Tóquio e a sede do memorial da bomba atômica de Hiroshima) e Hokkaido (famosa como destino para a prática de esqui). Tóquio, a capital, é conhecida por seus arranha-céus e lojas e pela cultura pop. ",
     alt: "Templo Japones cercado por floridas cerejeiras",
      curtidas: 2039,
    },
    {
      image: "asia/panoramic-g1b039d580_640.jpg",
      title: "Israel",
      description:
      "Israel, país do Oriente Médio às margens do Mar Mediterrâneo, é considerado a Terra Santa bíblica por judeus, cristãos e muçulmanos. Os locais mais sagrados ficam em Jerusalém. Na Cidade Antiga, o complexo do Monte do Templo compreende o Domo da Rocha, o histórico Muro das Lamentações, a Mesquita de Al-Aqsa e a Igreja do Santo Sepulcro. O centro financeiro de Israel, Tel Aviv, é conhecido por suas praias e pela arquitetura Bauhaus.",
    alt: "Nascer do sol em Jerusalem",   
    curtidas: 507,
    },
    {
      image: "asia/singapore-ga309c3fd1_640.jpg",
      title: "Singapura",
      description:
      "Singapura, oficialmente República de Singapura, é uma cidade-Estado insular localizada na ponta sul da Península Malaia, no Sudeste Asiático, 137 quilômetros ao norte do equador. ",
    alt: "Marina Bay Sands a noite",
      curtidas: 2079,
    },
    {
      image: "asia/cultural-tourism-gae29dbfb2_640.jpg",
      title: "Índia",
      description:
      "A Índia é um extenso país do Sul da Ásia com geografia diversificada, incluindo desde os picos do Himalaia até a costa do Oceano Índico, e uma história que remonta a cinco milênios. No norte, alguns dos monumentos do império mogol são o complexo do Forte Vermelho, em Délhi, e a imponente mesquita Jama Masjid, bem como o clássico mausoléu Taj Mahal, em Agra. Os peregrinos tomam banho no Ganges, em Varanasi. Rishikesh é um centro de ioga que serve de base para trilhas no Himalaia. ",
    alt: "Taj Mahal",
      curtidas: 1920,
    }
  ],

  catalogoOceania : [
    {
      image: "oceania/bora-bora-gcf954a031_640.jpg",
      title: "Polinésia Francesa",
      description:
      "A Polinésia Francesa, uma coletividade ultramarina da França, abrange mais de 100 ilhas no Pacífico Sul e se estende por mais de 2.000 km. Dividida entre os arquipélagos Austral, Gambier, Marquesas, Sociedade e Tuamotu, ela é conhecida por suas lagoas rodeadas de corais e hotéis de bangalô sobre a água. As ilhas se caracterizam por praias de areia preta e branca, montanhas, áreas remotas selvagens e cachoeiras imponentes.",
     alt: "Linda praia de águas azuis na Polinesia Francesa",
      curtidas: 3428,
    },
    {
      image: "oceania/fiji-g2230f817d_640.jpg",
      title: "Ilhas Fiji",
      description:
      "Fiji, país localizado no Pacífico Sul, é um arquipélago com mais de 300 ilhas famoso pelas paisagens acidentadas, pelas praias repletas de palmeiras e pelos recifes de corais com lagoas cristalinas. Suas principais ilhas, Viti Levu e Vanua Levu, abrigam a maior parte da população. Viti Levu é onde fica a capital, Suva, uma cidade portuária com arquitetura colonial britânica. O Fiji Museum, localizado nos Thurston Gardens, da era vitoriana, oferece exposições etnográficas. ",
     alt: "Nascer do sol em praia com palmeiras",
      curtidas: 2719,
    },
    {
      image: "oceania/new-zealand-g468e830a5_640.jpg",
      title: "Nova Zelândia",
      description:
      "A Nova Zelândia é um país no sudoeste do Oceano Pacífico formado por 2 ilhas principais, ambas marcadas por vulcões e glaciações. Na capital Wellington, na Ilha Norte, fica o museu nacional Te Papa Tongarewa. O imponente Monte Victoria, em Wellington, o Fiordland, na ilha Sul, e os Lagos do Sul foram cenário da mítica Terra Média nos filmes da série 'O Senhor dos Anéis', de Peter Jackson. ",
     alt: "Estrada deserta para as montanhas",
      curtidas: 1995,
    },
    {
      image: "oceania/sydney-opera-house-g86234d2a1_640.jpg",
      title: "Austrália",
      description:
      "A Austrália é um país continental cercado pelos oceanos Índico e Pacífico. Suas principais cidades, Sydney, Brisbane, Melbourne, Perth e Adelaide, são costeiras. Sua capital, Camberra, não é litorânea. O país é conhecido pela Sydney Opera House, pela Grande Barreira de Coral, pelo vasto deserto interior chamado Outback e por espécies animais únicas, como cangurus e ornitorrincos. ",
     alt: "A Casa de Ópera de Sidney a noite",
      curtidas: 1332,
    },
    // {
    //   image: "",
    //   title: "",
    //   description:
    //   " ",
    // alt: "",   
    //curtidas: ,
    // },
    // {
    //   image: "",
    //   title: "",
    //   description:
    //   " ",
    // alt: "",
    //   curtidas: ,
    // }
  ],

  catalogoAfrica : [
    {
      image: "africa/cidade_do_cabo_foto_aerea-g4dafe41a8_640.jpg",
      title: "África do Sul",
      description:
      "A África do Sul é um país situado na extremidade sul do continente africano e marcado por vários ecossistemas diferentes. O Parque Nacional Kruger, um destino para safári no interior do país, é repleto de animais de grande porte. A província de Cabo Ocidental tem praias, vinícolas exuberantes perto de Stellenbosch e Paarl, colinas escarpadas no Cabo da Boa Esperança, florestas e lagoas ao longo da Tuinroete (rota dos jardins) e a Cidade do Cabo, que fica ao pé da montanha da Mesa, de topo achatado. ",
     alt: "Vista aerea da Cidade do Cabo",
      curtidas: 620,
    },
    {
      image: "africa/Egitopyramids-g0c56f9e46_640.jpg",
      title: "Egito",
      description:
      "O Egito, um país que liga o nordeste da África ao Oriente Médio, remonta ao tempo dos faraós. Monumentos construídos milênios atrás ficam localizados ao longo do fértil vale do rio Nilo, como as colossais Pirâmides de Gizé e a Esfinge, além do Templo de Karnak (repleto de hieróglifos) e das tumbas do Vale dos Reis, ambos em Luxor. A capital, Cairo, abriga monumentos otomanos como a Mesquita de Muhammad Ali e o Museu Egípcio, com uma coleção de antiguidades. ",
     alt: "As famosas Piramides do Egito",
      curtidas: 385,
    },
    {
      image: "africa/seychelles-praia-g186ae0daf_640.jpg",
      title: "Ilhas Seychelles",
      description:
      "As Seychelles são um arquipélago de 115 ilhas no Oceano Índico, perto da costa leste da África. Elas têm um grande número de praias, recifes de corais e reservas naturais, além de animais raros como a tartaruga-das-seychelles. Mahé, base para visitação das outras ilhas, abriga a capital Victoria. Destacam-se também as florestas tropicais montanhosas do Parque Nacional Morne Seychellois e praias como Beau Vallon e Anse Takamaka.",
     alt: "Praia rochosa com mar azul e um barco navegando ao fundo",
      curtidas: 976,
    },
    {
      image: "africa/tanzania-elefantes-africa-g6e50f9998_640.jpg",
      title: "Tanzânia",
      description:
      "A Tanzânia é um país na África Oriental conhecido por suas vastas áreas selvagens, como as planícies do Parque Nacional de Serengeti, uma das mecas do safári e habitada pelos cinco animais de grande porte mais difíceis de serem caçados (elefante, leão, leopardo, búfalo e rinoceronte). Outro destaque é o Parque Nacional de Kilimanjaro, onde fica a montanha mais alta da África. Em alto-mar, estão as ilhas de Zanzibar, de influência árabe, e de Mafia, com um parque marinho que abriga tubarões-baleia e recifes de corais.",
     alt: "Manada de elefantes passeando pela savana",
      curtidas: 462,
    },
    {
      image: "africa/casablanca-1091462_640.jpg",
      title: "Marrocos",
      description:
      "Marrocos, um país do Norte da África banhado pelo Oceano Atlântico e pelo Mar Mediterrâneo, distingue-se pelas influências das culturas berbere, árabe e europeia. A medina de Marrakesh, um bairro medieval labiríntico, oferece entretenimento na praça Djemaa el-Fna e nos souks (mercados), que vendem cerâmica, joias e lanternas de metal. O Casbá dos Udaias, na capital Rabat, é um forte real do século XII com vista para o mar. ",
      alt: "A Mesquita Hassan II em Casablanca",
      curtidas: 602,
    },
    {
      image: "africa/mount-kilimanjaro-1025146_640.jpg",
      title: "Quênia",
      description:
      "O Quênia é um país no leste da África com litoral no Oceano Índico. Ele engloba savanas, regiões de lagos, o impressionante Grande Vale do Rift e planaltos montanhosos, além de ser um local com animais selvagens como leões, elefantes e rinocerontes. A partir de Nairóbi, a capital, os safáris visitam a reserva de Masai Mara, conhecida pelas migrações anuais de gnus, e o Parque Nacional de Amboseli, que oferece vistas do monte Kilimanjaro da Tanzânia com seus 5.895 m de altitude. ",
     alt: "Savana com Monte Kilimanjaro ao fundo",
      curtidas: 209,
    },
  ],
}

// fim objeto catalogos
   

// inicio fução modal

function openModal(elemento, idx, keyCatalogo) {
  const catalogoModal = new bootstrap.Modal(elemento, {});
  catalogoModal.show();
  // debugger;
console.log(keyCatalogo);
  const catalogoItem = catalogos[keyCatalogo][idx];
  document.querySelector(`${elemento} #catalogoModalLabel`).innerText = catalogoItem.title;
  document.querySelector(`${elemento} .modal-body`).innerHTML = `
  <img src="./assets/img/${catalogoItem.image}" alt="${catalogoItem.alt}">
    <p>${catalogoItem.description}</p>
    <button id="like">
                            <div class="label">
                            <i class="fa-solid fa-heart"></i>
                                <div class="number" id="number">${catalogoItem.curtidas} </div>
                            </div>
                        </button>
                        <button id="geral" value="Geral" onclick="addMeusDestinos">
                            <div class="label">
                                <i class="fa-solid fa-user-plus"></i> Adicionar aos Meus Destinos.
                            </div>
                        </button>
  `;
}

// fim função modal

// inicio carrossel dinamico

class Carousel{
    constructor(elementoCarousel, lista, elementClass, keyCatalogo){
        this.elementoCarousel = elementoCarousel;
        this.lista = lista;
        this.elementClass = elementClass;
        this.keyCatalogo = keyCatalogo;
    }

    generateCarousel(){
        let itensCatalogo = '';
        let idx = 0;
        console.log(this.keyCatalogo);
        const nameCatalogo = this.keyCatalogo;

        
    
        
        for(let catalogo of this.lista){
            itensCatalogo += `
                
                <div class="catalogo post col-lg-3 col-sm-6 col-12" data-toggle="tooltip" Data-bs-placement="top" title="${catalogo.title}">
                  <img src="./assets/img/${catalogo.image}"
                            alt="${catalogo.alt}">
                  <div class="postLocal">
                      <h3><em><strong>${catalogo.title}</strong></em></h3>
                      <button type="button" onclick="openModal('#catalogoModal', ${idx}, '${nameCatalogo}')"><i class="fa-solid fa-circle-info"></i></button>                       
                  </div>
                </div>
                 
            `;

            idx++;
        }

        this.elementoCarousel.innerHTML = itensCatalogo;
    }



    initCarousel(){
        $(this.elementClass).slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 1199.9,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 991.9,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 767.9,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 575.9,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
    }
}


// fim carrosel dinamico