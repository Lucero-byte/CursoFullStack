import { Product } from "../models/product";

export const products: Product[] = [
    {
        id: 1,
        name: 'Teclado mecanico Asus RBG',
        description: 'Algún teclado mecanico con luces RGB cherry red',
        price: 1000,
        image: '/img/producto1.jpg'
    },
    {
        id: 2,
        name: 'Samsung Smart TV LED 75',
        description: 'Algún LCD excelente OLED',
        price: 2400,
        image: '/img/producto2.webp'
    },
    {
        id: 3,
        name: 'Sony Camara Video',
        description: 'Alguna camara de video para streaming',
        price: 1600,
        image: '/img/producto3.webp'
    },
    {
        id: 4,
        name: 'Corsair memorias ram 16 GB DDR5',
        description: 'Memoria ram optimizadas para videos y juegos',
        price: 3800,
        image: '/img/producto4.webp'
    },
    {
        id: 5,
        name: 'Nvidia ASUS RTX4900',
        description: 'Tarjeta de video NVidia optimizada para tareas multicore video juegos en 4K',
        price: 5000,
        image: '/img/producto5.webp'
    },
        {
        id: 6,
        name: 'CPU Intel core i7',
        description: 'CPU optimizadas para tareas multicore',
        price: 4000,
        image: '/img/producto6.webp'
    }
]