const cards = [
    { id: 1, name: "Mega Knight", elixir: 7 },
    { id: 2, name: "Lumberjack", elixir: 4 },
    { id: 3, name: "Baloon", elixir: 5 },
    { id: 4, name: "Firecracker", elixir: 3 },
    { id: 5, name: "Miner", elixir: 3 },
    { id: 6, name: "Phoenix", elixir: 4 },
    { id: 7, name: "Golem", elixir: 8 },
    { id: 8, name: "Prince", elixir: 6 },
    { id: 9, name: "Baby Dragon", elixir: 4 },
    { id: 10, name: "Musketeer", elixir: 4 }
];//Cards instance
const cardsArray = [
    {
        nombre: "Megacaballero",
        vida: 3308,
        dano: 222,
        tipo: "Legendaria"
    },
    {
        nombre: "Cañón con Ruedas",
        vida: 1100,
        dano: 159,
        tipo: "Común"
    },
    {
        nombre: "Ballesta",
        vida: 1300,
        dano: 159,
        tipo: "Épica"
    },
    {
        nombre: "Pandilla de Duendes",
        vida: 0,
        dano: 264,
        tipo: "Común"
    },
    {
        nombre: "Espíritu Sanador",
        vida: 0,
        dano: 0,
        tipo: "Legendaria"
    },
    {
        nombre: "Rascacielos",
        vida: 4000,
        dano: 125,
        tipo: "Común"
    },
    {
        nombre: "Lanzahechizos",
        vida: 0,
        dano: 184,
        tipo: "Épica"
    },
    {
        nombre: "Pescador",
        vida: 1076,
        dano: 96,
        tipo: "Legendaria"
    },
    {
        nombre: "Máquina Voladora",
        vida: 2500,
        dano: 250,
        tipo: "Épica"
    },
    {
        nombre: "Montapuercos de Batalla",
        vida: 2420,
        dano: 172,
        tipo: "Común"
    },
    {
        nombre: "Dragón Infernal Eléctrico",
        vida: 1500,
        dano: "100-300 (Daño por segundo)",
        tipo: "Legendaria"
    },
    {
        nombre: "Hidracto",
        vida: 2672,
        dano: 200,
        tipo: "Épica"
    },
    {
        nombre: "Globo Bombástico",
        vida: 1273,
        dano: 1060,
        tipo: "Épica"
    },
    {
        nombre: "Lápida de Esqueletos",
        vida: 2838,
        dano: 93,
        tipo: "Rara"
    },
    {
        nombre: "Horda de Murciélagos",
        vida: 0,
        dano: 67,
        tipo: "Común"
    },
    {
        nombre: "Guardias",
        vida: 328,
        dano: 84,
        tipo: "Épica"
    },
    {
        nombre: "Esqueletos Gigantes",
        vida: 1050,
        dano: 64,
        tipo: "Rara"
    },
    {
        nombre: "Torre de Tesla",
        vida: 954,
        dano: 128,
        tipo: "Común"
    },
    {
        nombre: "Dragón Bebé",
        vida: 1000,
        dano: 200,
        tipo: "Común"
    },
    {
        nombre: "Bruja Esqueleto",
        vida: 665,
        dano: 69,
        tipo: "Legendaria"
    },
    {
        nombre: "Hacha",
        vida: 990,
        dano: 200,
        tipo: "Épica"
    },
    {
        nombre: "Lanzarrocas",
        vida: 4320,
        dano: 253,
        tipo: "Rara"
    },
    {
        nombre: "Bárbaros de Élite",
        vida: 970,
        dano: 208,
        tipo: "Común"
    },
    {
        nombre: "Cohete de Élite",
        vida: 0,
        dano: 0,
        tipo: "Épica"
    },
    {
        nombre: "Minions",
        vida: 190,
        dano: 86,
        tipo: "Común"
    },
    {
        nombre: "Golem de Hielo",
        vida: 3420,
        dano: 45,
        tipo: "Épica"
    },
    {
        nombre: "Recolector de Elixir",
        vida: 0,
        dano: 0,
        tipo: "Épica"
    },
    {
        nombre: "Trío de Mosqueteras",
        vida: 497,
        dano: 177,
        tipo: "Rara"
    },
    {
        nombre: "Dragón de Hielo",
        vida: 1000,
        dano: 63,
        tipo: "Legendaria"
    },
    {
        nombre: "Gárgola",
        vida: 289,
        dano: 65,
        tipo: "Épica"
    },
    {
        nombre: "Esqueletos",
        vida: 67,
        dano: 67,
        tipo: "Común"
    },
    {
        nombre: "Gigante Noble",
        vida: 3016,
        dano: 159,
        tipo: "Común"
    },
    {
        nombre: "Cabaña de Duendes",
        vida: 1100,
        dano: 108,
        tipo: "Rara"
    },
    {
        nombre: "Horno",
        vida: 0,
        dano: 169,
        tipo: "Común"
    },
    {
        nombre: "Tótem de Sanación",
        vida: 0,
        dano: 0,
        tipo: "Rara"
    },
    {
        nombre: "Torre de Bárbaros",
        vida: 2720,
        dano: "Depende del nivel",
        tipo: "Rara"
    },
    {
        nombre: "Cementerio",
        vida: 0,
        dano: 0,
        tipo: "Épica"
    }
];
/* 
arqueroMagico
arqueras
ballesta
torreTesla
barbaros
bebeDragon
dragonInfernal
bolaDeFuego
bolaDeNieve
Rayo
bombardero
Fantasma
bruja
canon
canonConRuedas
ariete
cazador
cementerio
golemDeElixir
horno
chozaDeDuendes
clonacion
cohete
descarga
terremoto
duendes
espirituDeHielo
espirituSanador
esbirros
espejo
esqueletos
esqueletoGigante
verdugo
fenix
furia
gigante
golem
guardias
pandilla
lanzaFuegos
lenador
magoElectrico
maquinaVoladora
megacaballero
megaesbirro
minero
veneno
taladro
monje
caballeroDorado
mosquetera
reinaArquera
mortero
murcielagos
pescador
pekka
principe
reyEsqueleto
sabuesoDeLava
tornado
tronco
valquiria
*/
function AgregarProductoAlCarrito(e, productos, carrito) {
    let idDelProducto = Number(e.target.id.substring(12));

    let posProductoEnCarrito = carrito.findIndex(producto => producto.id === idDelProducto);
    let productoBuscado = productos.find(producto => producto.id === idDelProducto);

    if (posProductoEnCarrito !== -1) {
        carrito[posProductoEnCarrito].unidades++;
        carrito[posProductoEnCarrito].subtotal = carrito[posProductoEnCarrito].precioUnitario * carrito[posProductoEnCarrito].unidades;
    } else {
        carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            precioUnitario: productoBuscado.precio,
            unidades: 1,
            subtotal: productoBuscado.precio
        })
    }

    console.log(carrito);
    renderizarCarrito(carrito);
}

/*************************************************************************************************************/

function addCardsToDeck(e, cards, deck) {
    let cardId = e.target.id;

    let cardPositionInDeck = deck.findIndex(card => card.id === cardId);
    let findedCard = cards.find(card => card.id === cardId);

    if (cardPositionInDeck !== -1) {
        console.log("La carta ya esta en el mazo, elija otra");
    } else {
        deck.push({
            nombre: findedCard.nombre,
            vida: findedCard.vida,
            dano: findedCard.dano,
            tipo: findedCard.tipo,
            inDeck: true
        })
    }

    console.log(deck);
    renderDeck(deck);
}
function renderDeck(deck) {
    let deckContainer = document.getElementById("deck");
    deckContainer.innerHTML = "";

    deck.forEach(card => {
        let troopCard = document.createElement("card");
        troopCard.classList.add("troopCard");
        troopCard.innerHTML = `
            <h3>${card.nombre}</h3>
            <h3>${card.vida}</h3>
            <h3>${card.tipo}</h3>
            `;
        deckContainer.appendChild(troopCard);

        //let botonAgregarAlCarrito = document.getElementById("botonCarrito" + producto.id);
        //botonAgregarAlCarrito.addEventListener("click", (e) => AgregarProductoAlCarrito(e, productos, carrito));
    });
}

/*************************************************************************************************************/

function clickButtonAdd(buttonId, renderId, deck, cards) {
    let button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
        rerenderEmpty(renderId)
        addCardsToDeck(e, cards, deck);
    });
}

function switchClass(elementId, class1, class2) {
    var elemento = document.getElementById(elementId);
    elemento.classList.remove(class1);
    elemento.classList.add(class2);
}
function clickButton(buttonId, renderId, newClass, cards) {
    let button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
        rerenderEmpty(renderId)
        renderBuildDeck(renderId, newClass, cards);
    });
}
function rerenderEmpty(elementId) {
    let element = document.getElementById(elementId);
    element.innerHTML = "";
}
function renderBuildDeck(containerId, newClass, cards) {
    let mainContainer = document.getElementById(containerId);
    switchClass(containerId, mainContainer.className, newClass);
    mainContainer.innerHTML = `
        <section class=main__container__section>
            <div id=deck class=deck>
                <section class=deck__section>
                    <card id=troopCard1 class=troopCard>1</card>
                    <card id=troopCard2 class=troopCard>2</card>
                    <card id=troopCard3 class=troopCard>3</card>
                    <card id=troopCard4 class=troopCard>4</card>
                </section>

                <section class=deck__section>
                    <card id=troopCard5 class=troopCard>5</card>
                    <card id=troopCard6 class=troopCard>6</card>
                    <card id=troopCard7 class=troopCard>7</card>
                    <card id=troopCard8 class=troopCard>8</card>
                </section>
            </div>
        </section>

        <section id=cardsCont class=main__container__section-cards>`
    renderCards(cards, "cardsCont");
    `</section>`;
}
function addCardToDeck(e){
    console.log("entro a addcardtodeck");
    let cardId = Number(e.target.id);
    let cardPositionInDeck = deck.findIndex(card => card.id === cardId);
    let cardInDeck = cardsArray.find(card => card.id === cardId);

    if (cardPositionInDeck !== -1) {
        alert(`CARTA YA EN EL MAZO`);
    }else{
        mazo.push({
            id: cardInDeck.id,
            nombre: cardInDeck.nombre,
            enMazo: cardInDeck.inDeck
        })
    }

    console.log("hola");
}
function renderCards(cards, elementId) {
    let mainContainer = document.getElementById(elementId);
    mainContainer.innerHTML = "";

    cards.forEach(card => {
        let troopCard = document.createElement("card");

        troopCard.classList.add("troopCard");
        troopCard.innerHTML = `
            <div>${card.nombre}</div>
            <div>${card.vida}</div>
            <div>${card.tipo}</div>
            <button id=addButton${card.id}>Agregar al mazo</button>
            `;
        mainContainer.appendChild(troopCard);

        //let addButton = document.getElementById("addButton" + troopCard.id);
        //addButton.addEventListener("click", (e) => addCardToDeck);
    });
}

renderCards(cardsArray, "main__container");
clickButton("deckBuilder", "main__container", "mainContainerBuildDeck", deck);

/*************************************************************************************************************/
// @mixin hexagono-clip-path {
//     clip-path: polygon(50% 0%, 100% 10%, 100% 50%, 100% 90%, 50% 100%, 0% 90%, 0% 50%, 0% 10%);
//     -webkit-clip-path: polygon(50% 0%, 100% 10%, 100% 50%, 100% 90%, 50% 100%, 0% 90%, 0% 50%, 0% 10%);
// }
/**** Base Carta ****/
// .carta {
//     position: relative;
//     // height: 320px;
//     // width: 240px;
//     height: 160px;
//     width: 120px;
//     margin: 2em;
//     transition: 0.8s cubic-bezier(0.215, 0.610, 0.355, 1);
//     margin: 2em auto;
//     cursor: pointer;

//     .carta__cara {
//         position: absolute;
//         backface-visibility: hidden;
//         -webkit-backface-visibility: hidden;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         border-radius: 14px;
//         border: 7px solid #1f1f1f;
//     }

//     .carta__cara_delantera {
//         z-index: 10;
//         transition: 0.5s ease-in-out;

//         .carta__cantidad-elixir {
//             position: absolute;
//             top: -9px;
//             left: -9px;
//             height: 2px;
//             width: 2px;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             padding: 0.8em;
//             line-height: 0;
//             z-index: 9999;
//             font-size: 15px;
//             color: white;
//             border-radius: 50px;
//             border: 3px solid #ab1a94;
//             box-shadow: 2px 2px 4px #a62da4f0;
//             background-color: #bb13b9;

//             &:hover {
//                 filter: brightness(90%);
//             }
//         }

//         .carta__contenido-delantero {
//             height: 100%;
//             width: 100%;
//             position: relative;
//             margin: 0;
//             overflow: hidden;
//             border: 7px solid #f0ecec1c;
//             border-radius: 9px;
//             color: white;
//             background: radial-gradient(circle, rgba(32, 33, 38, 1) 0%, rgba(29, 53, 103, 1) 47%, rgba(21, 26, 31, 1) 100%);
//             transition: 0.8s cubic-bezier(0.215, 0.610, 0.355, 1);

//             &::after {
//                 content: '';
//                 position: absolute;
//                 top: 0;
//                 left: 0;
//                 width: 100%;
//                 height: 100%;
//                 border-radius: 0.3em;
//                 background: rgb(32, 33, 38);
//                 z-index: 2;
//                 opacity: 0;
//                 background: radial-gradient(circle, rgba(32, 33, 38, 1) 0%, rgb(43, 71, 129) 47%, rgba(21, 26, 31, 0.959) 100%);
//                 transition: opacity 0.5s ease-out;
//             }

//             &:hover::after {
//                 opacity: 1;
//             }

//             .carta__ilustracion {
//                 width: 100%;
//                 position: absolute;
//                 z-index: 3;
//                 transition: 0.7s cubic-bezier(0.215, 0.610, 0.355, 1);
//             }

//             .carta__nivel {
//                 width: 100%;
//                 position: absolute;
//                 bottom: 0;
//                 left: 0;
//                 z-index: 5;
//                 padding: 0.2em 0em;
//                 margin: 0;
//                 text-align: center;
//                 font-size: 20px;
//                 font-weight: 400;
//                 text-shadow: rgba(0, 0, 0, 0.582) 2px 3px;
//             }
//         }
//     }

//     .carta__cara_trasera {
//         width: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         transform: rotateY(180deg);
//         padding: 1.7em;
//         font-size: 0.75em;
//         text-align: center;
//         font-family: 'Verdana';
//         color: white;
//         background: radial-gradient(circle, #202126 0%, #243453 47%, rgba(21, 26, 31, 0.959) 100%);
//         transition: 0.6s ease-in-out;

//         .carta__nombre-personaje {
//             font-size: 1.3em;
//             font-weight: 700;
//             margin: 0;
//             color: #f8e5a6;
//         }

//         .carta__descripcion {
//             margin-top: 0.5em;
//             font-size: 0.95em;
//         }

//         .carta__icono-clash {
//             position: absolute;
//             bottom: 20px;
//             left: 50%;
//             transform: translate(-50%, 0);
//             width: 30px;
//         }
//     }

//     &:hover {
//         transform: scale(1.045);
//     }

//     &:hover .carta__cara_delantera .carta__ilustracion {
//         transform: scale(1.1);
//     }
// }

// /**** Carta Comun **/
// .carta_comun {

//     .carta__cara_delantera {

//         .carta__ilustracion {
//             bottom: 30px;
//         }

//         .carta__nivel {
//             background-color: rgba(0, 0, 0, 0.486);
//             color: #9ddcfa;
//         }
//     }
// }

// /**** Carta Especial ***/
// .carta_especial {

//     .carta__cara {
//         animation: resplandor_carta_especial 1.8s ease-in-out infinite;
//     }

//     .carta__cara_delantera {

//         .carta__ilustracion {
//             bottom: -20px;
//         }

//         .carta__nivel {
//             background-color: #ee8523e8;
//             color: #f8e5a6;
//         }
//     }
// }

// /**** Carta Epica ***/
// .carta_epica {

//     .carta__cara {
//         animation: resplandor_carta_epica 1.8s ease-in-out infinite;
//     }

//     .carta__cara_delantera {

//         .carta__ilustracion {
//             bottom: 30px;
//         }

//         .carta__nivel {
//             background-color: #a62da4bc;
//             color: #fd89cf;
//         }
//     }

// }

// /**** Carta Legendaria ***/
// .carta_legendaria {
//     height: 162.5px;
//     border: 0;

//     .carta__cara {
//         border: 0;
//     }

//     .carta__borde,
//     .carta__contenido-delantero,
//     .carta__cara_trasera,
//     .carta__contenido-trasero {
//         @include hexagono-clip-path;
//     }

//     .carta__borde,
//     .carta__nivel span::before {
//         animation: resplandor_carta_legendaria 5s ease-in-out infinite;
//     }

//     .carta__borde {
//         position: relative;
//         width: 100%;
//         height: 100%;
//         background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #e81dd7, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
//         background-size: 600% 600%;
//     }

//     .carta__cara_delantera {

//         .carta__cantidad-elixir {
//             top: 10px;
//         }

//         .carta__contenido-delantero {
//             position: absolute;
//             width: 97%;
//             height: 97%;
//             top: 50%;
//             left: 50%;
//             border: 0;
//             transform: translate(-50%, -50%);

//             .carta__ilustracion {
//                 bottom: 70px;
//                 animation: animacion_ilustracion_carta_legendaria 1.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
//             }

//             .carta__nivel {
//                 background-color: #7ce5f6;
//                 color: #ee449c;
//                 text-shadow: rgba(0, 0, 0, 0.17) 2px 2px;
//                 padding-bottom: 0.5em;

//                 span {
//                     width: 100%;
//                     position: relative;
//                     display: inline-block;
//                     color: #000;
//                     background: #fff;
//                     mix-blend-mode: multiply;

//                     &::before {
//                         content: '';
//                         display: block;
//                         position: absolute;
//                         top: 0;
//                         right: 0;
//                         bottom: 0;
//                         left: 0;
//                         mix-blend-mode: screen;
//                         background: linear-gradient(to right, #37f39b, #fad154, #f4a2aa, #fc6eaf, #ff53fc);
//                         background-size: 300% 400%;
//                         pointer-events: none;
//                     }
//                 }
//             }
//         }
//     }

//     .carta__cara_trasera {
//         padding: 0;
//         position: relative;

//         .carta__contenido-trasero {
//             height: 97%;
//             width: 97%;
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             padding: 6em 1em;
//             background: radial-gradient(circle, #202126 0%, #243453 47%, rgba(21, 26, 31, 0.959) 100%);
//         }
//     }
// }

// /**** Rotacion de la carta ****/
// .carta.vuelta {

//     .carta__cara_delantera {
//         z-index: 0;
//         transform: rotateY(180deg);
//     }

//     .carta__cara_trasera {
//         transform: rotateY(0deg);
//     }
// }




// @media (max-width: 575px) {
//     .cartas-contenedor {
//         transform: scale(0.9);
//     }
// }

// @keyframes resplandor_carta_especial {
//     0% {
//         box-shadow: 1px 1px 6px 6px #ee8523f0;
//     }

//     50% {
//         box-shadow: 1px 1px 6px 6px #f1af59f0;
//     }

//     100% {
//         box-shadow: 1px 1px 6px 6px #ee8523f0;
//     }
// }

// @keyframes resplandor_carta_epica {
//     0% {
//         box-shadow: 1px 1px 6px 6px rgba(166, 45, 164, 0.918);
//     }

//     50% {
//         box-shadow: 1px 1px 6px 6px rgba(216, 101, 214, 0.918);
//     }

//     100% {
//         box-shadow: 1px 1px 6px 6px rgba(166, 45, 164, 0.918);
//     }
// }

// @keyframes resplandor_carta_legendaria {
//     0% {
//         background-position: 0% 82%;
//     }

//     50% {
//         background-position: 100% 19%;
//     }

//     100% {
//         background-position: 0% 82%;
//     }
// }

// @keyframes animacion_ilustracion_carta_legendaria {

//     0% {
//         bottom: 70px;
//     }

//     50% {
//         bottom: 80px;
//     }

//     100% {
//         bottom: 70px;
//     }
// }



// <!-- <article class="">
//         <div>
//             <span></span>
//             <div></div>
//             <figure>
//                 <img>
//                 <figcaption>
//                     <span>
//                         Nivel 110
//                     </span>
//                 </figcaption>
//             </figure>
//         </div>

//         <div></div> este no lo tocaste todavia
//     </article> ESTO ES UN ESQUELETO DE LA CARTA-->
// <!-- <article class="carta carta legendaria">
//         <div class="carta__cara carta__cara_delantera cara cara-delantera">
//             <span class="carta__cantidad-elixir"></span>
//             <div class="carta__borde"></div>
//             <figure class="carta__contenido-delantero">
//                 <img class="carta__ilustracion" src="https://i.ibb.co/BgDKfpN/arquero.png">
//                 <figcaption class="carta__nivel">
//                     <span>
//                         Nivel 110
//                     </span>
//                 </figcaption>
//             </figure>
//         </div>

//         <div></div>
//     </article> -->
// <!-- <article class="carta carta_legendaria">
//         <div class="carta__cara carta__cara_delantera cara cara-delantera">
//             <span class="carta__cantidad-elixir">4</span>
//             <div class="carta__borde"></div>
//             <figure class="carta__contenido-delantero">
//                 <img class="carta__ilustracion" src="https://i.ibb.co/BgDKfpN/arquero.png" />
//                 <figcaption class="carta__nivel">
//                     <span>
//                         Nivel 11
//                     </span>
//                 </figcaption>
//             </figure>
//         </div>
//     </article>
//     <article class="carta carta_epica">
//         <div class="carta__cara carta__cara_delantera">
//             <span class="carta__cantidad-elixir">5</span>
//             <figure class="carta__contenido-delantero">
//                 <img class="carta__ilustracion" src="https://i.ibb.co/64L07VB/bruja.png" />
//                 <figcaption class="carta__nivel">Nivel 11</figcaption>
//             </figure>
//         </div>
//         <div class="carta__cara carta__cara_trasera">
//             <div class="carta__contenido-trasero">
//                 <h1 class="carta__nombre-personaje">Bruja</h1>
//                 <p class="carta__descripcion">
//                     Invoca esqueletos y dispara rayos destructores. Por desgracia,
//                     sus brillantes ojos de color rosa no disparan rayos láser.
//                 </p>
//                 <img class="carta__icono-clash" src="https://i.ibb.co/Q65LCnk/icono.png" />
//             </div>
//         </div>
//     </article>
//     <article class="carta carta_especial">
//         <div class="carta__cara carta__cara_delantera">
//             <span class="carta__cantidad-elixir">3</span>
//             <figure class="carta__contenido-delantero">
//                 <img class="carta__ilustracion" src="https://i.ibb.co/PrJn44M/golem.png" />
//                 <figcaption class="carta__nivel"> Nivel 12</figcaption>
//             </figure>
//         </div>
//         <div class="carta__cara carta__cara_trasera">
//             <div class="carta__contenido-trasero">
//                 <h1 class="carta__nombre-personaje">Gólem de Elixir</h1>
//                 <p class="carta__descripcion">
//                     "Al ser destruido, se divide en dos golemitas de elixir,que,al ser destruuidos,
//                     se dividen en dos pegotes de elixir. !Cuando tu rival acabe con un pegote,
//                     recibira una gota de elixir"
//                 </p>
//                 <img class="carta__icono-clash" src="https://i.ibb.co/Q65LCnk/icono.png" />
//             </div>
//         </div>
//     </article>
//     <article class="carta carta_comun">
//         <div class="carta__cara carta__cara_delantera">
//             <span class="carta__cantidad-elixir">5</span>
//             <figure class="carta__contenido-delantero">
//                 <img class="carta__ilustracion" src="https://i.ibb.co/ySzdgvR/los-pillos.png" />
//                 <figcaption class="carta__nivel">Nivel 12</figcaption>
//             </figure>
//         </div>
//         <div class="carta__cara carta__cara_trasera">
//             <div class="carta__contenido-trasero">
//                 <h1 class="carta__nombre-personaje">Pillos</h1>
//                 <p class="carta__descripcion">
//                     ¡Libera a un trío de pillos de lo más travieso! El chico toma la delantera,
//                     mientras que las chicas acribillan a los enemigos desde la retaguardia ¡lanzando
//                     bolas de chicle con sus tirachinas!
//                 </p>
//                 <img class="carta__icono-clash" src="https://i.ibb.co/Q65LCnk/icono.png" />
//             </div>
//         </div>
//     </article>
// -->
// <!-- <article class="carta carta_legendaria">
//         <div class="carta__cara carta__cara_delantera cara cara-delantera">
//             <span class="carta__cantidad-elixir">4</span>
//             <div class="carta__borde"></div>
//             <figure class="carta__contenido-delantero">
//                 <img class="carta__ilustracion" src="https://i.ibb.co/BgDKfpN/arquero.png" />
//                 <figcaption class="carta__nivel"><span>Nivel 11</span></figcaption>
//             </figure>
//         </div>

//         <div class="carta__cara carta__cara_trasera cara cara-trasera">
//             <div class="carta__borde">
//                 <div class="carta__contenido-trasero">
//                     <h1 class="carta__nombre-personaje">Arquero Magico</h1>
//                     <p class="carta__descripcion">
//                         No es un mago ni tampoco un arquero. Dispara una flecha mágica que atraviesa
//                         y daña a los enemigos que se interponen en su camino. No es ningún truco,
//                         ¡es magia!
//                     </p>
//                     <img class="carta__icono-clash" src="https://i.ibb.co/Q65LCnk/icono.png" />
//                 </div>
//             </div>
//         </div>
//     </article><--Carta Legendaria--
//     <article class="carta carta_epica">
//         <div class="carta__cara carta__cara_delantera">
//             <span class="carta__cantidad-elixir">5</span>
//             <figure class="carta__contenido-delantero">
//                 <img class="carta__ilustracion" src="https://i.ibb.co/64L07VB/bruja.png" />
//                 <figcaption class="carta__nivel">Nivel 11</figcaption>
//             </figure>
//         </div>
//         <div class="carta__cara carta__cara_trasera">
//             <div class="carta__contenido-trasero">
//                 <h1 class="carta__nombre-personaje">Bruja</h1>
//                 <p class="carta__descripcion">
//                     Invoca esqueletos y dispara rayos destructores. Por desgracia,
//                     sus brillantes ojos de color rosa no disparan rayos láser.
//                 </p>
//                 <img class="carta__icono-clash" src="https://i.ibb.co/Q65LCnk/icono.png" />
//             </div>
//         </div>
//     </article><--Ccarta_Epica--
//     <article class="carta carta_especial">
//         <div class="carta__cara carta__cara_delantera">
//             <span class="carta__cantidad-elixir">3</span>
//             <figure class="carta__contenido-delantero">
//                 <img class="carta__ilustracion" src="https://i.ibb.co/PrJn44M/golem.png" />
//                 <figcaption class="carta__nivel"> Nivel 12</figcaption>
//             </figure>
//         </div>
//         <div class="carta__cara carta__cara_trasera">
//             <div class="carta__contenido-trasero">
//                 <h1 class="carta__nombre-personaje">Gólem de Elixir</h1>
//                 <p class="carta__descripcion">
//                     "Al ser destruido, se divide en dos golemitas de elixir,que,al ser destruuidos,
//                     se dividen en dos pegotes de elixir. !Cuando tu rival acabe con un pegote,
//                     recibira una gota de elixir"
//                 </p>
//                 <img class="carta__icono-clash" src="https://i.ibb.co/Q65LCnk/icono.png" />
//             </div>
//         </div>
//     </article><--Carta Especial--
//     <article class="carta carta_comun">
//         <div class="carta__cara carta__cara_delantera">
//             <span class="carta__cantidad-elixir">5</span>
//             <figure class="carta__contenido-delantero">
//                 <img class="carta__ilustracion" src="https://i.ibb.co/ySzdgvR/los-pillos.png" />
//                 <figcaption class="carta__nivel">Nivel 12</figcaption>
//             </figure>
//         </div>
//         <div class="carta__cara carta__cara_trasera">
//             <div class="carta__contenido-trasero">
//                 <h1 class="carta__nombre-personaje">Pillos</h1>
//                 <p class="carta__descripcion">
//                     ¡Libera a un trío de pillos de lo más travieso! El chico toma la delantera,
//                     mientras que las chicas acribillan a los enemigos desde la retaguardia ¡lanzando
//                     bolas de chicle con sus tirachinas!
//                 </p>
//                 <img class="carta__icono-clash" src="https://i.ibb.co/Q65LCnk/icono.png" />
//             </div>
//         </div>
//     </article><-- Carta Comun  --
// -->