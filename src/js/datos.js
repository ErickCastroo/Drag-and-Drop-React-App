import { useState } from 'react';

export const usePersonas = () => {
    const [personas, setPersonas] = useState([
        {
            nombre: 'Naruto Shippuden',
            id: 1,
            img: 'https://i.pinimg.com/564x/ae/72/f7/ae72f7d47b93531f43d26d9d10a28324.jpg' 
        },
        {
            nombre: 'Attack on Titan (Shingeki no Kyojin)',
            id: 2,
            img: 'https://i.pinimg.com/564x/7a/ff/f1/7afff1deae1a5ec0925e79190ba43a86.jpg' 
        },
        {
            nombre: 'Fullmetal Alchemist: Brotherhood',
            id: 3,
            img: 'https://i.pinimg.com/564x/53/78/73/5378736d60fbefbda617a99230abf514.jpg' 
        },
        {
            nombre: 'Death Note',
            id: 4,
            img: 'https://i.pinimg.com/564x/c1/7d/af/c17daf0bf50f3c7bbdee8ddf05df5940.jpg' 
        },
        {
            nombre: 'One Piece',
            id: 5,
            img: 'https://i.pinimg.com/564x/b7/2d/df/b72ddf794806cc0fd5d9be9295ec97f9.jpg' 
        },
        {
            nombre: 'Neon Genesis Evangelion',
            id: 6,
            img: 'https://i.pinimg.com/564x/c1/a5/74/c1a5741769a285be45c3ca6487c63808.jpg' 
        },
        {
            nombre: 'Demon Slayer',
            id: 7,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTms-PviCXXXz6u1_11RDACmmV7gWUVE2qrQnOeIU9NGfaGSnDl' 
        },
        {
            nombre: 'Frieren: Más allá del final del viaje',
            id: 8,
            img: 'https://i0.wp.com/josegeek.com/wp-content/uploads/2023/10/Frieren-Mas-alla-del-final-del-viaje.jpg?resize=683%2C1024&ssl=1' 
        },
        {
            nombre: 'Jujutsu Kaisenkomi',
            id: 9,
            img: 'https://pbs.twimg.com/media/FAdlmmHWEAcfMFk?format=jpg&name=4096x4096' 
        },
        {
            nombre: 'Komi-san wa, Komyushō desu.',
            id: 10,
            img: 'https://image.tmdb.org/t/p/original/ss5OTHVH2KOSEhNt2n2lsqbrBh.jpg' 
        },
    ]);
    return [personas, setPersonas];
    };