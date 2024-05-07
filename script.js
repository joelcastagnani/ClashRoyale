// const cards = [
//     { id: 1, name: "Mega Knight", elixir: 7 },
//     { id: 2, name: "Lumberjack", elixir: 4 },
//     { id: 3, name: "Baloon", elixir: 5 },
//     { id: 4, name: "Firecracker", elixir: 3 },
//     { id: 5, name: "Miner", elixir: 3 },
//     { id: 6, name: "Phoenix", elixir: 4 },
//     { id: 7, name: "Golem", elixir: 8 },
//     { id: 8, name: "Prince", elixir: 6 },
//     { id: 9, name: "Baby Dragon", elixir: 4 },
//     { id: 10, name: "Musketeer", elixir: 4 }
// ];//Cards instance

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


function renderCards(cards, elementId) {
    let mainContainer = document.getElementById(elementId);
    mainContainer.innerHTML = "";

    cards.forEach(card => {
        let troopCard = document.createElement("card");
        troopCard.classList.add("troopCard");
        troopCard.innerHTML = `
            <h3>${card.nombre}</h3>
            <h3>${card.vida}</h3>
            <h3>${card.tipo}</h3>
            `;
        mainContainer.appendChild(troopCard);

        //let botonAgregarAlCarrito = document.getElementById("botonCarrito" + producto.id);
        //botonAgregarAlCarrito.addEventListener("click", (e) => AgregarProductoAlCarrito(e, productos, carrito));
    });
}
function switchClass(elementId, class1, class2) {
    var elemento = document.getElementById(elementId);
    elemento.classList.remove(class1);
    elemento.classList.add(class2);
}
function rerenderEmpty(elementId) {
    let element = document.getElementById(elementId);
    element.innerHTML = "";
}
function buildDeck() {
    let buildedDeck = [];
    let addCardButton = document.getElementById("" + producto.id);
    botonAgregarAlCarrito.addEventListener("click", (e) => AgregarProductoAlCarrito(e, productos, carrito));
}//Build an 8 cards deck / funcion de la clase todavia
function renderBuildDeck(containerId, newClass, cards){
    let mainContainer = document.getElementById(containerId);
    switchClass(containerId, mainContainer.className, newClass);
    mainContainer.innerHTML = `
        <section class=main__container__section>
            <div class=deck>
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

            <div>
                <button class=buildDeckButtons>botones</button>
            </div>
        </section>

        <section id=cardsCont class=main__container__section-cards>`
            renderCards(cards, "cardsCont");
    `</section>`;
}
function clickButton(buttonId, renderId, newClass, cards){
    let button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
        rerenderEmpty(renderId);
        renderBuildDeck(renderId, newClass, cards);
    });
}









renderCards(cardsArray, "main__container");
clickButton("deckBuilder", "main__container", "mainContainerBuildDeck", cardsArray);
/* ------------------------------------------------------------------------------------------------------------ */

/* Functions */
function showCard(card) {
    return "ID: " + card.id + " | Name: " + card.name + " | Elixir: " + card.elixir;
} //Show just 1 card
function showCards(arrayObject) {
    let cardsList = "";
    let i = 1;
    if (arrayObject.length > 0) {
        arrayObject.forEach(card => {
            cardsList += "\n" + i + "- " + showCard(card);
            i++;
        });
    } else {
        cardsList = "-----Su mazo esta vacio-----";
    }
    return cardsList;
}//Show cards list
function addCard(idCard, buildedDeck) {
    let text = "";
    if (buildedDeck.length < 8) {
        const card = cards.find(ca => ca.id === idCard);
        if (card) {
            buildedDeck.push(card);
            text = `\n*${card.name} ha sido agregado correctamente a su mazo.`;
        } else {
            text = "Producto no encontrado";
        }
    } else {
        text = "Debe eliminar al menos 1 carta de su mazo para sumar una (Ya completo las 8)";
    }
    alert(text);
    return buildedDeck;
}//Add cards to your deck
function deleteCard(idCard, deck) {
    const index = cards.findIndex(ca => ca.id === idCard);
    const card = cards.find(ca => ca.id === idCard);
    let text = "";
    if (index !== -1) {
        const deletedCard = deck.splice(index, 1)[0];
        text = (`${card.name} ha sido eliminado correctamente de su mazo.`);
    } else {
        text = "Carta no encontrado en el mazo";
    }
    alert(text);
    return deck;
}//Delete one card from your deck
// function buildDeck() {
//     let buildedDeck = [];
//     let i = 0;
//     while (i < 8) {
//         let id = parseInt(prompt("Mazo actual:\n" + showCards(buildedDeck) + "\nIngrese el id de la carta numero " + (i + 1) + ":"));
//         buildedDeck = addCard(id, buildedDeck);
//         i++;
//     }
//     return buildedDeck;
// }//Build an 8 cards deck

/* On click functions */
function clickShowCards() {
    alert(showCards(cards));
}
const boton = document.getElementById("card");
//boton.onclick = clickShowCards;



//Principal function
// function mainFunction() {
//     let deck = [];
//     let opcion = 0;

//     while ((opcion = parseInt(prompt("Menu de opciones:\n" + "1- Mostrar lista de cartas\n" + "2- Mostrar mi mazo\n" + "3- Armar mi mazo de 8 cartas\n" + "4- Eliminar una carta\n" + "5- Agregar una carta\n" + "0- Salir \n" + "Ingrese una opcion: "))) !== 0) {
//         console.log("entro al while");
//         switch (opcion) {
//             case 1:
//                 alert(showCards(cards));
//                 break;
//             case 2:
//                 alert(showCards(deck));
//                 break;
//             case 3:
//                 deck = buildDeck();
//                 alert(showCards(deck));
//                 break;
//             case 4:
//                 let id4 = 0;
//                 deck = deleteCard(id4 = parseInt(prompt("Ingrese el ID de la carta que desea eliminar: ")), deck);
//                 alert(showCards(deck));
//                 break;
//             case 5:
//                 let id5 = 0;
//                 deck = addCard((id5 = parseInt(prompt("Ingrese el ID de la carta que quiere agregar:"))), deck);
//                 alert(showCards(deck));
//                 break;
//             default:
//                 console.log("La opción no es ni 1, ni 2, ni 3");
//                 break;
//         }
//     }
// }









/* Test Board */
//alert(showCard(cards[5]));
//alert(showCards(deck));
//let deck = buildDeck();
//deck = deleteCard(parseInt(prompt("Ingrese el ID de la carta que desea eliminar: ")), deck);
//deck = addCard(parseInt(prompt("Ingrese el ID de la carta que desea agregar: ")), deck);





//mainFunction();




// const $cartas = document.querySelectorAll(".carta");
// for (let i = 0; i < $cartas.length; i++) {
//     let elemento = $cartas[i];
//     elemento.setAttribute('id', `carta${i}`);

//     let idCarta = document.getElementById(elemento.id);
//     idCarta.addEventListener("click", () => {
//         idCarta.classList.toggle("vuelta");
//     });
// }

// // Swiper init
// var swiper = new Swiper('.slider-cartas', {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//         el: '.slider-cartas__paginacion',
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//     }
// });

