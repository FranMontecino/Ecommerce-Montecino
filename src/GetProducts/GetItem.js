const detail = 
    {
        "Id":3,
        "Image":"https://dmoreno.es/wp-content/uploads/2017/05/C6kTCwTWcAI4aZ_.jpg",
        "Name":"Nier Automata",
        "Description":"NieR: Automata es un videojuego de acción en tercera persona ambientado en un universo postapocalíptico que narra la lucha de los androides 2B, 9S y A2 para recuperar el mundo que los humanos han abandonado tras la invasión de unas poderosas máquinas.",
        "Price":"35",
        "Stock":"6"
    }
    const getItem = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(
               detail
            )
        }, 2000)
    })

export default getItem;
