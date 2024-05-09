// const cardsArray = [
//     {
//         nombre: "Mega",
//         vida: 3308,
//         dano: 222,
//         tipo: "Legendaria",
//         inDeck: false,
//         id: 1
//     },
//     {
//         nombre: "Cañón",
//         vida: 1100,
//         dano: 159,
//         tipo: "Común",
//         inDeck: false,
//         id: 2
//     },
//     {
//         nombre: "Balle",
//         vida: 1300,
//         dano: 159,
//         tipo: "Épica",
//         inDeck: false,
//         id: 3
//     },
//     {
//         nombre: "Pandilla",
//         vida: 0,
//         dano: 264,
//         tipo: "Común",
//         inDeck: false,
//         id: 4
//     },
//     {
//         nombre: "Espíritu",
//         vida: 0,
//         dano: 0,
//         tipo: "Legendaria",
//         inDeck: false,
//         id: 5
//     },
//     {
//         nombre: "Rascaci",
//         vida: 4000,
//         dano: 125,
//         tipo: "Común",
//         inDeck: false,
//         id: 6
//     },
//     {
//         nombre: "Lanza",
//         vida: 0,
//         dano: 184,
//         tipo: "Épica",
//         inDeck: false,
//         id: 7
//     },
//     {
//         nombre: "Pescador",
//         vida: 1076,
//         dano: 96,
//         tipo: "Legendaria",
//         inDeck: false,
//         id: 8
//     }
// ];

const cardsArray = [
    {
        nombre: "Arquero Mágico",
        vida: 1100,
        daño: 176,
        id: 1,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Arqueras",
        vida: 700, // Vida por arquera
        daño: 90, // Daño por arquera
        id: 2,
        tipo: "Común",
        inDeck: false
    },
    {
        nombre: "Ballesta",
        vida: 2800,
        daño: 560,
        id: 3,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Torre Tesla",
        vida: 1300,
        daño: 110,
        id: 4,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Bárbaros",
        vida: 1700, // Vida por bárbaro
        daño: 80, // Daño por bárbaro
        id: 5,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Bebé Dragón",
        vida: 1150,
        daño: 130,
        id: 6,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Dragón Infernal",
        vida: 3000,
        daño: 120,
        id: 7,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Bola de Fuego",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 490,
        id: 8,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Bola de Nieve",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 110,
        id: 9,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Rayo",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 520,
        id: 10,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Bombardero",
        vida: 1400,
        daño: 220,
        id: 11,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Fantasma",
        vida: 1200,
        daño: 170,
        id: 12,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Bruja",
        vida: 1300,
        daño: 90,
        id: 13,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Cañón",
        vida: 1100,
        daño: 110,
        id: 14,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Cañón con Ruedas",
        vida: 1800,
        daño: 140,
        id: 15,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Ariete",
        vida: 4200,
        daño: 160,
        id: 16,
        tipo: "Épica",
        inDeck: false
    },

    {
        nombre: "Cazador",
        vida: 1500,
        daño: 150,
        id: 17,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Cementerio",
        vida: 0, // No tiene vida (es un hechizo de invocación)
        daño: 110, // Daño por esqueleto
        id: 18,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Golem de Elixir",
        vida: 3000, // Vida inicial
        daño: 90, // Daño por golpe
        id: 19,
        tipo: "Épica",
        inDeck: false
    },

    {
        nombre: "Horno",
        vida: 1300,
        daño: 110,
        id: 20,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Choza de Duendes",
        vida: 700,
        daño: 0, // No ataca directamente
        id: 21,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Clonación",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 0, // No causa daño
        id: 22,
        tipo: "Épica",
        inDeck: false
    },

    {
        nombre: "Cohete",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 490,
        id: 23,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Descarga",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 500, // Daño a tropas y estructuras
        id: 24,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Terremoto",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 280, // Daño a estructuras
        id: 25,
        tipo: "Épica",
        inDeck: false
    },

    {
        nombre: "Duendes",
        vida: 190, // Vida por duende
        daño: 50, // Daño por duende
        id: 26,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Espíritu de Hielo",
        vida: 800,
        daño: 110,
        id: 27,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Espíritu Sanador",
        vida: 450, // Vida inicial
        daño: 0, // No ataca directamente, solo cura
        id: 28,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Esbirros",
        vida: 700, // Vida por esbirro
        daño: 90, // Daño por esbirro
        id: 29,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Espejo",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 0, // No causa daño
        id: 30,
        tipo: "Legendaria",
        inDeck: false
    },

    {
        nombre: "Esqueletos",
        vida: 130, // Vida por esqueleto
        daño: 40, // Daño por esqueleto
        id: 31,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Esqueleto Gigante",
        vida: 3000,
        daño: 170,
        id: 32,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Verdugo",
        vida: 2300,
        daño: 170,
        id: 33
    },

    {
        nombre: "Fénix",
        vida: 1750, // Vida inicial
        daño: 110, // Daño por golpe
        id: 33,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Furia",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 0, // No causa daño
        id: 34,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Gigante",
        vida: 3000,
        daño: 170,
        id: 35,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Golem",
        vida: 4500,
        daño: 90,
        id: 36,
        tipo: "Épica",
        inDeck: false
    },

    {
        nombre: "Guardias",
        vida: 800, // Vida por guardia
        daño: 60, // Daño por guardia
        id: 37,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Pandilla",
        vida: 500, // Vida por miembro
        daño: 90, // Daño por miembro
        id: 38,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Lanzafuegos",
        vida: 1100,
        daño: 170,
        id: 39,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Leñador",
        vida: 2100,
        daño: 180,
        id: 40,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Mago Eléctrico",
        vida: 1700,
        daño: 110,
        id: 41,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Máquina Voladora",
        vida: 1600,
        daño: 110,
        id: 42,
        tipo: "Épica",
        inDeck: false
    },

    {
        nombre: "Megacaballero",
        vida: 6100,
        daño: 350,
        id: 43,
        tipo: "Épica",
        inDeck: false
    },

    {
        nombre: "Megaesbirro",
        vida: 2000, // Vida por esbirro
        daño: 170, // Daño por esbirro
        id: 44,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Minero",
        vida: 1400,
        daño: 170,
        id: 45,
        tipo: "Legendaria",
        inDeck: false
    },

    {
        nombre: "Veneno",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 140, // Daño por segundo
        id: 46,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Taladro",
        vida: 1800,
        daño: 170,
        id: 47,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Monje",
        vida: 1800,
        daño: 140,
        id: 48,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Caballero Dorado",
        vida: 2800,
        daño: 170,
        id: 49,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Mosquetera",
        vida: 1500,
        daño: 110,
        id: 50,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Reina Arquera",
        vida: 2500,
        daño: 170,
        id: 51,
        tipo: "Legendaria",
        inDeck: false
    },

    {
        nombre: "Mortero",
        vida: 1300,
        daño: 140,
        id: 52,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Murciélagos",
        vida: 500, // Vida por murciélago
        daño: 90, // Daño por murciélago
        id: 53,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Pescador",
        vida: 1800,
        daño: 110,
        id: 54,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Pekka",
        vida: 6300,
        daño: 350,
        id: 55,
        tipo: "Épica",
        inDeck: false
    },

    {
        nombre: "Príncipe",
        vida: 2600,
        daño: 270,
        id: 56,
        tipo: "Rara",
        inDeck: false
    },

    {
        nombre: "Rey Esqueleto",
        vida: 5000,
        daño: 170,
        id: 57,
        tipo: "Legendaria",
        inDeck: false
    },

    {
        nombre: "Sabueso de Lava",
        vida: 4800,
        daño: 110,
        id: 58,
        tipo: "Épica",
        inDeck: false
    },

    {
        nombre: "Tornado",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 0, // No causa daño
        id: 59,
        tipo: "Común",
        inDeck: false
    },

    {
        nombre: "Tronco",
        vida: 0, // No tiene vida (es un hechizo)
        daño: 560, // Daño a tropas y estructuras
        id: 60,
        tipo: "Común",
        inDeck: false
    },
    
    {
        nombre: "Valquiria",
        vida: 3000,
        daño: 170,
        id: 61,
        tipo: "Común",
        inDeck: false
    }
];


mainFunction(cardsArray);

function mainFunction(cards) {
    let deck = [];

    let mainSearchButton = document.getElementById("mainSearchButton");
    mainSearchButton.addEventListener("click", () => filterAndRender(cards, deck));
    renderCards(cards, deck);
    resetDeck("mainDeckContainer");
}
function filterAndRender(cards, deck) {
    let filteredCards = filterCards(cards);
    renderCards(filteredCards, deck);
}
function renderCards(cards, deck) {
    let mainCardsContainer = document.getElementById("mainCardsContainer")
    mainCardsContainer.innerHTML = ""

    cards.forEach(card => {
        let cardContainer = document.createElement("div")
        cardContainer.className = "troopCard"

        cardContainer.innerHTML = `
            <h3>${card.nombre}</h3>
            <img${card.vida} />
            <h4>${card.tipo}</h4>
            <button class="button" id=addCardToDeckButton${card.id}>Agregar</button>
        `

        mainCardsContainer.appendChild(cardContainer)

        let addCardToDeckButton = document.getElementById("addCardToDeckButton" + card.id);
        addCardToDeckButton.addEventListener("click", (e) => addCardToDeck(e, cards, deck));
    });
}
function addCardToDeck(e, cards, deck) {
    let cardId = Number(e.target.id.substring(19))

    let cardPositionInDeck = deck.findIndex(producto => producto.id === cardId)
    let productoBuscado = cards.find(producto => producto.id === cardId)

    if (cardPositionInDeck !== -1) {
        alert(`ya esta en el mazo`);
    } else {
        deck.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            tipo: productoBuscado.tipo
        })
    }

    renderDeck(deck)
}
function renderDeck(deck) {
    let deckContainer = document.getElementById("mainDeckContainer")
    deckContainer.innerHTML = ""
    deck.forEach(card => {
        let cardContainer = document.createElement("div")
        cardContainer.classList = "troopCard"

        cardContainer.innerHTML = `
            <p>${card.nombre}</p>
            <p>${card.tipo}</p>
            <button class="button" id=eliminar${card.id}>ELIMINAR</button>
        `
        deckContainer.appendChild(cardContainer)
    })
}
function filterCards(cards) {
    let mainSearchIput = document.getElementById("mainSearchIput")
    return cards.filter(card => card.nombre.includes(mainSearchIput.value))
}
function renderEmpty(elementId) {
    let element = document.getElementById(elementId);
    element.innerHTML = "";
}
function resetDeck(elementId){
    let button = document.getElementById("resetButton");
    button.addEventListener("click", () => {renderEmpty(elementId)});
}












