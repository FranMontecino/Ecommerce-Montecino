const productos = [
    {
        "Id":1,
        "Image":"https://as01.epimg.net/meristation/imagenes/2020/11/03/game_cover/666031971604438123.jpg",
        "Name":"Days Gone",
        "Description":"Days Gone es un videojuego de acción y horror de supervivencia ambientado en un entorno de mundo abierto,​post-apocalíptico y jugado desde una perspectiva en tercera persona.",
        "Price":60,
        "Stock":"7",
        "Type":"pc",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f70a5a85-e657-4dda-a3b3-d319d7c08764/dek7wyn-88c62a48-c34d-4827-8b6a-7a726c8be2b1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y3MGE1YTg1LWU2NTctNGRkYS1hM2IzLWQzMTlkN2MwODc2NFwvZGVrN3d5bi04OGM2MmE0OC1jMzRkLTQ4MjctOGI2YS03YTcyNmM4YmUyYjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MF4fRSY6qNOxtwuItO_k8KYnzwCnHJ0-F78tzzNbTuI"
    },
    {
        "Id":2,
        "Image":"https://i.3djuegos.com/juegos/13424/red_dead_3__nombre_temporal_/fotos/maestras/red_dead_3__nombre_temporal_-4030936.jpg",
        "Name":"Red Dead Redemption 2",
        "Description":"América, 1899. El ocaso del Salvaje Oeste ha comenzado y las fuerzas de la ley dan caza a las últimas bandas de forajidos. Los que no se rinden o sucumben, son asesinados. Tras un desastroso atraco fallido en la ciudad de Blackwater, Arthur Morgan y la banda de Van der Linde se ven obligados a huir.",
        "Price":40,
        "Stock":"4",
        "Type":"ps",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c54013f-525a-4ab0-80dd-d0c56b419f1c/dcfqu85-fa4bd5d0-89cd-4f4f-9ea1-1cb8cfe6a396.png/v1/fill/w_512,h_512,strp/red_dead_redemption_2_icon_1_by_iiblack_iceii_dcfqu85-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvOWM1NDAxM2YtNTI1YS00YWIwLTgwZGQtZDBjNTZiNDE5ZjFjXC9kY2ZxdTg1LWZhNGJkNWQwLTg5Y2QtNGY0Zi05ZWExLTFjYjhjZmU2YTM5Ni5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.wUwfliR2qIYL8MwmDnZYTQiVDpOLBS8b_nZQTCI67qw"
    },
    {
        "Id":3,
        "Image":"https://dmoreno.es/wp-content/uploads/2017/05/C6kTCwTWcAI4aZ_.jpg",
        "Name":"Nier Automata",
        "Description":"NieR: Automata es un videojuego de acción en tercera persona ambientado en un universo postapocalíptico que narra la lucha de los androides 2B, 9S y A2 para recuperar el mundo que los humanos han abandonado tras la invasión de unas poderosas máquinas.",
        "Price":35,
        "Stock":"6",
        "Type":"pc",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c78bc3fc-9f08-47ca-81ae-d89055c7ec49/darew92-64fba9d7-cd86-4125-b649-8f79178ea9af.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3OGJjM2ZjLTlmMDgtNDdjYS04MWFlLWQ4OTA1NWM3ZWM0OVwvZGFyZXc5Mi02NGZiYTlkNy1jZDg2LTQxMjUtYjY0OS04Zjc5MTc4ZWE5YWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HuZdiIn_UUN7roCE5brfTVEN-VkH3-Z1OjLDxNtsalY"
    },
    {
        "Id":4,
        "Image":"https://www.gamereactor.es/media/62/godwar_2126213b.png",
        "Name":"God of War",
        "Description":"Han pasado años desde que Kratos tomó su venganza contra los Dioses Olímpicos. Habiendo sobrevivido la pelea final contra su padre Zeus, Kratos vive ahora con su joven hijo Atreus en el mundo de los Dioses Nórdicos, una tierra hostil habitada por feroces monstruos y guerreros.",
        "Price":25,
        "Stock":"9",
        "Type":"ps",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6715fdc1-21de-4bb0-a7ad-117a99972862/dc0qcnr-36005af2-9b18-4226-a2b6-952032896080.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3MTVmZGMxLTIxZGUtNGJiMC1hN2FkLTExN2E5OTk3Mjg2MlwvZGMwcWNuci0zNjAwNWFmMi05YjE4LTQyMjYtYTJiNi05NTIwMzI4OTYwODAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1fhpbgnmiEsndplnNP-l0h8vlHZrtZxrl2ZVpzSpk5U"
    },
    {
        "Id":5,
        "Image":"https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/tablet-1.jpg",
        "Name":"Zelda Breath of the Wild",
        "Description":"Link despierta tras un profundo sueño de 100 años en un misterioso templo en el reino de Hyrule; junto a él, deberemos descubrir su pasado mientras escuchamos una voz que nos incita a enfrentarnos a un malvado ser que provocó el llamado cataclismo: Ganon.",
        "Price":45,
        "Stock":"9",
        "Type":"nintendo",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96432544-362e-403b-9795-741a5946d05d/dbw3yon-dca41f62-b716-4116-b4eb-9a6ef6d8e793.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2NDMyNTQ0LTM2MmUtNDAzYi05Nzk1LTc0MWE1OTQ2ZDA1ZFwvZGJ3M3lvbi1kY2E0MWY2Mi1iNzE2LTQxMTYtYjRlYi05YTZlZjZkOGU3OTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Sf6-iTkEA__PE5n84nroYg7bjGJ5-m6rdtnrirfYXCE"
    },
    {
        "Id":6,
        "Image":"https://i.3djuegos.com/juegos/13417/spiderman_ps4__nombre_provisional_/fotos/ficha/spiderman_ps4__nombre_provisional_-4004811.jpg",
        "Name":"Spiderman Ps4",
        "Description":"Peter Parker es un chico de 23 años, becario en un laboratorio Whilst y próximo a graduarse de la universidad. Tras deshacerse de ellos, Peter descubre que Martin Li, uno de los más prominentes filántropos de Nueva York, es quien lidera a los Inner Demons, bajo su alter ego Señor Negativo.",
        "Price":55,
        "Stock":"3",
        "Type":"ps",
        "Icon":"https://icons.iconarchive.com/icons/martz90/hex/512/game-the-amazing-spider-man-icon.png"
    },
    {
        "Id":7,
        "Image":"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/11/skyrim-portada-v.jpg?itok=j9efEHFz",
        "Name":"The Elder Scrolls V Skyrim",
        "Description":"La historia de Skyrim se centra en los esfuerzos del personaje, dovahkiin (sangre de dragón), para derrotar a Alduin, un dragón/dovah que, según la profecía, destruirá el mundo. ... En el transcurso de la partida, el jugador completa misiones y hace evolucionar a su personaje gracias a la mejora de sus habilidades.",
        "Price":15,
        "Stock":"8",
        "Type":"pc",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c78bc3fc-9f08-47ca-81ae-d89055c7ec49/dbc7uin-c3ba7486-0644-4c19-a18c-f63e30ae4ed1.png/v1/fill/w_512,h_512,strp/the_elder_scrolls_v___skyrim_special_edition_icon_by_andonovmarko_dbc7uin-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvYzc4YmMzZmMtOWYwOC00N2NhLTgxYWUtZDg5MDU1YzdlYzQ5XC9kYmM3dWluLWMzYmE3NDg2LTA2NDQtNGMxOS1hMThjLWY2M2UzMGFlNGVkMS5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.sOzx9Bm4tdwh-obzxwsfum5QEKr5ezSWfzOLhv4mmIs"
    },
    {
        "Id":8,
        "Image":"https://i.blogs.es/a19748/halo-infinite-portada-02/450_1000.jpeg",
        "Name":"Halo Infinite",
        "Description":"'Halo Infinite', el regreso del Jefe Maestro y el mundo abierto. ... La humanidad está en las últimas y el ejercito de los Desterrados quiere hacerse con el control del anillo Halo Zeta para dominar la galaxia.",
        "Price":70,
        "Stock":"2",
        "Type":"xbox",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/de223hc-d8b22b3c-2bae-440c-8f67-11fc7d7835f0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGUyMjNoYy1kOGIyMmIzYy0yYmFlLTQ0MGMtOGY2Ny0xMWZjN2Q3ODM1ZjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9ohnnkCFbeJgj-0xONiF54sqYunuiozoT0D2krk-7k8"
    },
    {
        "Id":9,
        "Image":"https://as01.epimg.net/meristation/imagenes/2019/08/20/cover/364320561566326940.jpg",
        "Name":"Gears of Wars 5",
        "Description":"Tras los eventos de Gears of War 4, el mundo se está desmoronando. La dependencia de la tecnología de los humanos se ha convertido en su caída y los enemigos se están uniendo para eliminar a todos los supervivientes.",
        "Price":60,
        "Stock":"2",
        "Type":"xbox",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dd8ybtq-d9662a23-5d1f-45e8-81a9-7597f74c865d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGQ4eWJ0cS1kOTY2MmEyMy01ZDFmLTQ1ZTgtODFhOS03NTk3Zjc0Yzg2NWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Zx9lF-kfaasMe7_jrFqsFXSPwF7dJFsebv5i65Q4bhs"
    },{
        "Id":10,
        "Image":"https://i.3djuegos.com/juegos/12581/psychonauts_2/fotos/ficha/psychonauts_2-5503805.jpg",
        "Name":"Psychonauts 2",
        "Description":"Psychonauts 2 trata temas relacionados con los trastornos mentales, desde la ludopatía hasta la ansiedad social, pasando por el trastorno de personalidad múltiple. El gran acierto de Double Fine es que lo hace desde un lugar de empatía y búsqueda de bienestar.",
        "Price":25,
        "Stock":"7",
        "Type":"xbox",
        "Icon":"https://cdn2.steamgriddb.com/file/sgdb-cdn/icon_thumb/741a0099c9ac04c7bfc822caf7c7459f.png"
    },
    {
        "Id":11,
        "Image":"https://www.zurpusiangames.com/img/hellblade_senuas_sacrifice.jpg",
        "Name":"Hellblade Senua's Sacrifice",
        "Description":"Hellblade: Senua's Sacrifice cuenta la historia de Senua, una guerrera nórdica que quiere llegar a Helheim para derrotar a Hela, la diosa de la muerte, para así recuperar el alma de su esposo, Dillion.",
        "Price":"15",
        "Stock":8,
        "Type":"xbox",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dbnps2w-5f684e72-26df-4025-be80-a7c9aa76b6c6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGJucHMydy01ZjY4NGU3Mi0yNmRmLTQwMjUtYmU4MC1hN2M5YWE3NmI2YzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A93Bqc3K9VJr1_BD8Hq2V97hL775Yb4RwkAEEULu1CE"
    },
    {
        "Id":12,
        "Image":"https://media.vandal.net/m/23887/the-last-of-us-remastered-201449185610_1.jpg",
        "Name":"The Last of Us",
        "Description":"The Last of Us, en septiembre de 2013 se desata una pandemia en Estados Unidos ocasionada por una cepa del hongo Cordyceps, que al infectar a los humanos los convierte en criaturas caníbales, y que se transmite a través de una simple mordedura.",
        "Price":"10",
        "Stock":8,
        "Type":"ps",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cce65a10-b101-437c-bf20-6697fc4fc4c0/d5wof18-c7f5ea09-1c86-4450-997b-82caaaa2231f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NjZTY1YTEwLWIxMDEtNDM3Yy1iZjIwLTY2OTdmYzRmYzRjMFwvZDV3b2YxOC1jN2Y1ZWEwOS0xYzg2LTQ0NTAtOTk3Yi04MmNhYWFhMjIzMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BLVvLqex9Lc7D4O2u1ucaAk8OKrhZYCbABtQAkVsZyU"
    },
    {
        "Id":13,
        "Image":"https://s3.gaming-cdn.com/images/products/10178/orig/elden-ring-xbox-one-xbox-one-juego-microsoft-store-cover.jpg",
        "Name":"Elden Ring",
        "Description":"La historia de Elden Ring es la del Sinluz, un exiliado que regresa a un marchito y enorme reino conocido como las Tierras Intermedias. Su propósito: reclamar el poder del Círculo de Elden. Una gesta que lo enfrentará a criaturas de pesadilla y un cruel destino.",
        "Price":"70",
        "Stock":8,
        "Type":"pc",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2eccc60d-e89e-4286-9b96-b7ca30e49370/desrap6-73766f9c-4cec-4b22-9864-48555d3acf94.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJlY2NjNjBkLWU4OWUtNDI4Ni05Yjk2LWI3Y2EzMGU0OTM3MFwvZGVzcmFwNi03Mzc2NmY5Yy00Y2VjLTRiMjItOTg2NC00ODU1NWQzYWNmOTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.420H5JOa876JCgcUPPDRwUbbgwhNwZOv3uFrNE1CUrg"
    },
    {
        "Id":14,
        "Image":"https://www.gamereactor.es/media/53/legendzelda_885314.jpg",
        "Name":"Zelda The Wind Waker",
        "Description":"The Wind Waker, ocurre cientos de años después de la derrota de Ganon en Ocarina of Time,​​ y se sitúa en un vasto océano repleto de islas.",
        "Price":5,
        "Stock":"8",
        "Type":"nintendo",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a98cff5d-a612-49d8-a0db-175994384b20/dc4dbha-05a01483-3781-43c3-b950-0362d9adae03.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5OGNmZjVkLWE2MTItNDlkOC1hMGRiLTE3NTk5NDM4NGIyMFwvZGM0ZGJoYS0wNWEwMTQ4My0zNzgxLTQzYzMtYjk1MC0wMzYyZDlhZGFlMDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.593-TemE8E8xOeN8nMcEkt16WZVmxO0QAUhyd0JjpkM"
    },
    {
        "Id":15,
        "Image":"https://www.juegostorrentpc.net/wp-content/uploads/2021/03/zelda-link-awakening-cover-pc.jpg",
        "Name":"Zelda Link's Awakening",
        "Description":"Link's Awakening es el primer Zelda con perspectiva arriba-abajo que permite a Link saltar (con la ayuda de un objeto). Además, contiene rompecabezas en scroll lateral,​​ similares a los encontrados en el juego anterior Zelda II: The Adventure of Link.",
        "Price":7,
        "Stock":"8",
        "Type":"nintendo",
        "Icon":"https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/90e715513174fd117c8f87c3c61d7d5d.png"
    },
    {
        "Id":16,
        "Image":"https://muropaketti.com/wp-content/uploads/2020/12/cyberpunk-box.jpg",
        "Name":"Cyberpunk 2077",
        "Description":"Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad.",
        "Price":35,
        "Stock":"8",
        "Type":"pc",
        "Icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dd8ybgt-febb8d1e-709e-4115-a982-39fb7dc387dc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGQ4eWJndC1mZWJiOGQxZS03MDllLTQxMTUtYTk4Mi0zOWZiN2RjMzg3ZGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.F3reU4lEWie7ewhmVAZK1BLM9OEJp_S2A1nsSmwrlPo"
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