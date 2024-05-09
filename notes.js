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




// .main {
//     display: flex;
//     justify-content: center;

//     &__options {
//         border: solid white 1px;
//         width: 20%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;

//         .deckBuilder {
//             border: solid;
//         }

//         &__button {
//             width: 150px;
//             margin-top: 1rem;
//             margin-bottom: 1;
//         }
//     }

//     &__container {
//         width: 80%;
//         border: 1px solid white;
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: center;
//         &__section {
//             border: black solid 1px;
//             height: 100%;
//             width: 100%;
//             display: flex;
//             justify-content: center;
//             .deck{
//                 border: black 1px solid;
//                 width: 400px;
//                 height: 210px;
//                 margin: 1rem;
//                 display: flex;
//                 flex-direction: column;
//                 &__section{
//                     border: solid 1px black;
//                     height: 50%;
//                     display: flex;
//                 }
//             }
//             // .buildDeckButtons{
//             //     display: flex;
//             //     flex-direction: column;
//             //     justify-content: center;
//             //     align-items: center;
//             //     width: 100%;
//             //     .button{
//             //         width: 150px;
//             //         margin: 1rem;
//             //     }
//             // }
//             &-cards{
//                 width: 100%;
//                 display: flex;
//                 flex-wrap: wrap;
//                 justify-content: center;
//             }
//         }
//     }
// }