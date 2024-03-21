import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jenny-jack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salad from '../assets/produtores/salad .png';

const gerarDistancia = (min, max) =>{
    return Math.floor((Math.random()*(min - max + 1 ) + min));   
}

const produtores = {
    titulo: "Produtores",
    lista: [{
        nome:"Green",
        image: green,
        distancia: `${gerarNumeroAleatorio(1, 500)}m`,
        estrelas: gerarNumeroAleatorio(1,5),
    },
    {
        nome:"Grow",
        image: grow,
        distancia: `${gerarNumeroAleatorio(1, 500)}m`,
        estrelas: gerarNumeroAleatorio(1,5),
    },
    {
        nome:"Jenny-jack",
        image: jenny-jack,
        distancia: `${gerarNumeroAleatorio(1, 500)}m`,
        estrelas: gerarNumeroAleatorio(1,5),
    },
    {
        nome:"Potager",
        image: potager,
        distancia: `${gerarNumeroAleatorio(1, 500)}m`,
        estrelas: gerarNumeroAleatorio(1,5),
    },{
        nome:"Salad",
        image: salad,
        distancia: `${gerarNumeroAleatorio(1, 500)}m`,
        estrelas: gerarNumeroAleatorio(1,5),
    }
]
};