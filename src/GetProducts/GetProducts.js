const productos = [
    {
        "Id":1,
        "Image":"https://as01.epimg.net/meristation/imagenes/2020/11/03/game_cover/666031971604438123.jpg",
        "Name":"Days Gone",
        "Description":"Days Gone es un videojuego de acción y horror de supervivencia ambientado en un entorno de mundo abierto,​post-apocalíptico y jugado desde una perspectiva en tercera persona.",
        "Price":"60",
        "Stock":"7",
        "Type":"pc"
    },
    {
        "Id":2,
        "Image":"https://i.3djuegos.com/juegos/13424/red_dead_3__nombre_temporal_/fotos/maestras/red_dead_3__nombre_temporal_-4030936.jpg",
        "Name":"Red Dead Redemption 2",
        "Description":"América, 1899. El ocaso del Salvaje Oeste ha comenzado y las fuerzas de la ley dan caza a las últimas bandas de forajidos. Los que no se rinden o sucumben, son asesinados. Tras un desastroso atraco fallido en la ciudad de Blackwater, Arthur Morgan y la banda de Van der Linde se ven obligados a huir.",
        "Price":"40",
        "Stock":"4",
        "Type":"ps"
    },
    {
        "Id":3,
        "Image":"https://dmoreno.es/wp-content/uploads/2017/05/C6kTCwTWcAI4aZ_.jpg",
        "Name":"Nier Automata",
        "Description":"NieR: Automata es un videojuego de acción en tercera persona ambientado en un universo postapocalíptico que narra la lucha de los androides 2B, 9S y A2 para recuperar el mundo que los humanos han abandonado tras la invasión de unas poderosas máquinas.",
        "Price":"35",
        "Stock":"6",
        "Type":"pc"
    },
    {
        "Id":4,
        "Image":"https://www.gamereactor.es/media/62/godwar_2126213b.png",
        "Name":"God of War",
        "Description":"Han pasado años desde que Kratos tomó su venganza contra los Dioses Olímpicos. Habiendo sobrevivido la pelea final contra su padre Zeus, Kratos vive ahora con su joven hijo Atreus en el mundo de los Dioses Nórdicos, una tierra hostil habitada por feroces monstruos y guerreros.",
        "Price":"25",
        "Stock":"9",
        "Type":"ps"
    },
    {
        "Id":5,
        "Image":"https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/tablet-1.jpg",
        "Name":"Zelda Breath of the Wild",
        "Description":"Link despierta tras un profundo sueño de 100 años en un misterioso templo en el reino de Hyrule; junto a él, deberemos descubrir su pasado mientras escuchamos una voz que nos incita a enfrentarnos a un malvado ser que provocó el llamado cataclismo: Ganon.",
        "Price":"45",
        "Stock":"9",
        "Type":"nintendo"
    },
    {
        "Id":6,
        "Image":"https://i.3djuegos.com/juegos/13417/spiderman_ps4__nombre_provisional_/fotos/ficha/spiderman_ps4__nombre_provisional_-4004811.jpg",
        "Name":"Spiderman Ps4",
        "Description":"Peter Parker es un chico de 23 años, becario en un laboratorio Whilst y próximo a graduarse de la universidad. Tras deshacerse de ellos, Peter descubre que Martin Li, uno de los más prominentes filántropos de Nueva York, es quien lidera a los Inner Demons, bajo su alter ego Señor Negativo.",
        "Price":"55",
        "Stock":"3",
        "Type":"ps"
    },
    {
        "Id":7,
        "Image":"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/11/skyrim-portada-v.jpg?itok=j9efEHFz",
        "Name":"The Elder Scrolls V Skyrim",
        "Description":"La historia de Skyrim se centra en los esfuerzos del personaje, dovahkiin (sangre de dragón), para derrotar a Alduin, un dragón/dovah que, según la profecía, destruirá el mundo. ... En el transcurso de la partida, el jugador completa misiones y hace evolucionar a su personaje gracias a la mejora de sus habilidades.",
        "Price":"15",
        "Stock":"8",
        "Type":"pc"
    },
    {
        "Id":8,
        "Image":"https://i.blogs.es/a19748/halo-infinite-portada-02/450_1000.jpeg",
        "Name":"Halo Infinite",
        "Description":"'Halo Infinite', el regreso del Jefe Maestro y el mundo abierto. ... La humanidad está en las últimas y el ejercito de los Desterrados quiere hacerse con el control del anillo Halo Zeta para dominar la galaxia.",
        "Price":"70",
        "Stock":"2",
        "Type":"xbox"
    },
    {
        "Id":9,
        "Image":"https://as01.epimg.net/meristation/imagenes/2019/08/20/cover/364320561566326940.jpg",
        "Name":"Gears of Wars 5",
        "Description":"Tras los eventos de Gears of War 4, el mundo se está desmoronando. La dependencia de la tecnología de los humanos se ha convertido en su caída y los enemigos se están uniendo para eliminar a todos los supervivientes.",
        "Price":"60",
        "Stock":"2",
        "Type":"xbox"
    },{
        "Id":10,
        "Image":"https://i.3djuegos.com/juegos/12581/psychonauts_2/fotos/ficha/psychonauts_2-5503805.jpg",
        "Name":"Psychonauts 2",
        "Description":"Psychonauts 2 trata temas relacionados con los trastornos mentales, desde la ludopatía hasta la ansiedad social, pasando por el trastorno de personalidad múltiple. El gran acierto de Double Fine es que lo hace desde un lugar de empatía y búsqueda de bienestar.",
        "Price":"25",
        "Stock":"7",
        "Type":"xbox"
    },
    {
        "Id":11,
        "Image":"https://www.zurpusiangames.com/img/hellblade_senuas_sacrifice.jpg",
        "Name":"Hellblade Senua's Sacrifice",
        "Description":"Hellblade: Senua's Sacrifice cuenta la historia de Senua, una guerrera nórdica que quiere llegar a Helheim para derrotar a Hela, la diosa de la muerte, para así recuperar el alma de su esposo, Dillion.",
        "Price":"15",
        "Stock":"8",
        "Type":"xbox"
    },
    {
        "Id":12,
        "Image":"https://media.vandal.net/m/23887/the-last-of-us-remastered-201449185610_1.jpg",
        "Name":"The Last of Us",
        "Description":"The Last of Us, en septiembre de 2013 se desata una pandemia en Estados Unidos ocasionada por una cepa del hongo Cordyceps, que al infectar a los humanos los convierte en criaturas caníbales, y que se transmite a través de una simple mordedura.",
        "Price":"10",
        "Stock":"8",
        "Type":"ps"
    },
    {
        "Id":13,
        "Image":"https://s3.gaming-cdn.com/images/products/10178/orig/elden-ring-xbox-one-xbox-one-juego-microsoft-store-cover.jpg",
        "Name":"Elden Ring",
        "Description":"La historia de Elden Ring es la del Sinluz, un exiliado que regresa a un marchito y enorme reino conocido como las Tierras Intermedias. Su propósito: reclamar el poder del Círculo de Elden. Una gesta que lo enfrentará a criaturas de pesadilla y un cruel destino.",
        "Price":"70",
        "Stock":"8",
        "Type":"pc"
    },
    {
        "Id":14,
        "Image":"https://www.gamereactor.es/media/53/legendzelda_885314.jpg",
        "Name":"Zelda The Wind Waker",
        "Description":"The Wind Waker, ocurre cientos de años después de la derrota de Ganon en Ocarina of Time,​​ y se sitúa en un vasto océano repleto de islas.",
        "Price":"5",
        "Stock":"8",
        "Type":"nintendo"
    },
    {
        "Id":15,
        "Image":"https://www.juegostorrentpc.net/wp-content/uploads/2021/03/zelda-link-awakening-cover-pc.jpg",
        "Name":"Zelda Link's Awakening",
        "Description":"Link's Awakening es el primer Zelda con perspectiva arriba-abajo que permite a Link saltar (con la ayuda de un objeto). Además, contiene rompecabezas en scroll lateral,​​ similares a los encontrados en el juego anterior Zelda II: The Adventure of Link.",
        "Price":"7",
        "Stock":"8",
        "Type":"nintendo"
    },
    {
        "Id":16,
        "Image":"https://muropaketti.com/wp-content/uploads/2020/12/cyberpunk-box.jpg",
        "Name":"Cyberpunk 2077",
        "Description":"Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad.",
        "Price":"35",
        "Stock":"8",
        "Type":"pc"
    }
]

const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(
           productos
        )
    }, 2000)
})

export default getProducts;