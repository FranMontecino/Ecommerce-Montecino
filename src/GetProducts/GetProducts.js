const productos = [
    {
        "Id":1,
        "Image":"https://as01.epimg.net/meristation/imagenes/2020/11/03/game_cover/666031971604438123.jpg",
        "Name":"Days Gone",
        "Price":"60"
    },
    {
        "Id":2,
        "Image":"https://i.3djuegos.com/juegos/13424/red_dead_3__nombre_temporal_/fotos/maestras/red_dead_3__nombre_temporal_-4030936.jpg",
        "Name":"Red Dead Redemption 2",
        "Price":"40"
    },
    {
        "Id":3,
        "Image":"https://dmoreno.es/wp-content/uploads/2017/05/C6kTCwTWcAI4aZ_.jpg",
        "Name":"Nier Automata",
        "Price":"35"
    },
    {
        "Id":4,
        "Image":"https://www.gamereactor.es/media/62/godwar_2126213b.png",
        "Name":"God of War",
        "Price":"25"
    },
    {
        "Id":5,
        "Image":"https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/tablet-1.jpg",
        "Name":"Zelda Breath of the Wild",
        "Price":"45"
    },
    {
        "Id":6,
        "Image":"https://i.3djuegos.com/juegos/13417/spiderman_ps4__nombre_provisional_/fotos/ficha/spiderman_ps4__nombre_provisional_-4004811.jpg",
        "Name":"Spiderman Ps4",
        "Price":"55"
    },
    {
        "Id":7,
        "Image":"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/11/skyrim-portada-v.jpg?itok=j9efEHFz",
        "Name":"The Elder Scrolls V Skyrim",
        "Price":"15"
    },
    {
        "Id":8,
        "Image":"https://cl.buscafs.com/www.levelup.com/public/uploads/images/610047/610047.jpg",
        "Name":"Doom Eternal",
        "Price":"34"
    },
]

const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(
           productos
        )
    }, 2000)
});

export default getProducts;