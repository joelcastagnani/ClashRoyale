const cardsArray = [
    {
        nombre: "Mega",
        vida: 3308,
        dano: 222,
        tipo: "Legendaria",
        inDeck: false,
        id: 1
    },
    {
        nombre: "Cañón",
        vida: 1100,
        dano: 159,
        tipo: "Común",
        inDeck: false,
        id: 2
    },
    {
        nombre: "Balle",
        vida: 1300,
        dano: 159,
        tipo: "Épica",
        inDeck: false,
        id: 3
    },
    {
        nombre: "Pandilla",
        vida: 0,
        dano: 264,
        tipo: "Común",
        inDeck: false,
        id: 4
    },
    {
        nombre: "Espíritu",
        vida: 0,
        dano: 0,
        tipo: "Legendaria",
        inDeck: false,
        id: 5
    },
    {
        nombre: "Rascaci",
        vida: 4000,
        dano: 125,
        tipo: "Común",
        inDeck: false,
        id: 6
    },
    {
        nombre: "Lanza",
        vida: 0,
        dano: 184,
        tipo: "Épica",
        inDeck: false,
        id: 7
    },
    {
        nombre: "Pescador",
        vida: 1076,
        dano: 96,
        tipo: "Legendaria",
        inDeck: false,
        id: 8
    }
];

mainFunction(cardsArray);

function mainFunction(cards) {
    let deck = [];

    let mainSearchButton = document.getElementById("mainSearchButton");
    mainSearchButton.addEventListener("click", () => filterAndRender(cards, deck));
    renderCards(cards, deck);
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
        console.log(`ya esta en el mazo`);
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












