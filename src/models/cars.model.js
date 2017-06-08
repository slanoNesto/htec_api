import {apiUrl} from '../config.json';

const model = {
    cars: [
        {
            id: 1,
            image: apiUrl + '/cars/punto.png',
            speed: 148,
            description: 'The Fiat Punto is a supermini car produced by the Italian manufacturer Fiat since 1993.',
            name: 'Fiat Punto'
        },
        {
            id: 2,
            image: apiUrl + '/cars/cla.png',
            speed: 280,
            description: 'The Mercedes-Benz CLA-Class is a compact executive car developed and manufactured by Mercedes-Benz, based on the platform of the Mercedes-Benz W176 A-Class and W246 B-Class compact cars, formally launched at the January 2013 North American International Auto Show. The vehicle was previewed as the 2012 Concept Style Coupe at various international locations.',
            name: 'Mercedes Benz CLA'
        },
        {
            id: 3,
            image: apiUrl + '/cars/mazda3.png',
            speed: 235,
            description: 'The Mazda3 (known as the Mazda Axela in Japan, a combination of "accelerate" and "excellent") is a compact car manufactured in Japan by Mazda. It was introduced in 2003 as a 2004 model, replacing the Familia/323/Protege.',
            name: 'Mazda 3'
        }
    ]
};

export default model;
