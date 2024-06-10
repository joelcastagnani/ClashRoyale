async function mainFunction() {
    const response = await fetch("./data.json");
    const cards = await response.json();

    let deck = getDeckLS();
    renderDeck(deck);

    let mainSearchButton = document.getElementById("mainSearchButton");
    mainSearchButton.addEventListener("click", () => filterAndRender(cards));

    let resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => resetDeck(deck));

    let mainSearchIput = document.getElementById("mainSearchInput");
    mainSearchIput.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
            filterAndRender(cards);
        }
    });

    filterByAndRender(cards);

    renderCards(cards);
}
function getDeckLS() {
    let deck = [];
    let deckLS = JSON.parse(localStorage.getItem("deck"));
    if (deckLS) {
        deck = deckLS;
    }
    return deck;
}
function resetDeckLS() {
    localStorage.removeItem("deck");
    renderDeck([]);
}
function filterAndRender(cards) {
    let filteredCards = filterCards(cards);
    renderCards(filteredCards);
}
function filterCards(cards) {
    let mainSearchInput = document.getElementById("mainSearchInput");
    return cards.filter(card => card.nombre.includes(mainSearchInput.value));
}
function addCardToDeck(e, cards) {
    let deck = getDeckLS();
    let cardId = Number(e.target.id.substring(19));
    let cardPositionInDeck = deck.findIndex(card => card.id === cardId);
    let cardToAdd = cards.find(card => card.id === cardId);

    if (cardPositionInDeck !== -1) {
        let element = document.getElementById("mainAlertContainer");
        element.innerHTML = "la carta ya esta en el mazo";
        element.classList.replace("main__main-container__alert", "main__main-container__alertNew");
    } else if (deck.length < 8) {
        deck.push({
            id: cardToAdd.id,
            nombre: cardToAdd.nombre,
            tipo: cardToAdd.tipo,
            vida: cardToAdd.vida,
            daño: cardToAdd.daño,
            inDeck: true
        });
        cardToAdd.inDeck = true;
        sendToast();
    } else {
        let element = document.getElementById("mainAlertContainer");
        element.innerHTML = "El mazo ya está lleno (máximo 8 cartas)";
        element.classList.replace("main__main-container__alert", "main__main-container__alertNew");
    }

    localStorage.setItem("deck", JSON.stringify(deck));//1-PRIMERO TENES QUE STRINGIFEAR UN EL MAZO, Y DESPUES SETEARLO EL STORAGE
    renderDeck(deck);
    renderEmpty("mainCardsContainer");
    renderCards(cards)
}
function removeCardFromDeck(cardId) {
    let deck = getDeckLS();
    let cardIndex = deck.findIndex(card => card.id === cardId);

    if (cardIndex !== -1) {
        deck.splice(cardIndex, 1); // Remove the card from the deck array
        localStorage.setItem("deck", JSON.stringify(deck)); // Update the local storage with the modified deck
        renderDeck(deck); // Re-render the deck to reflect the changes
        renderCards(cardsArray);
        deck[cardIndex].inDeck = false;
    }

    let element = document.getElementById("mainAlertContainer");
    element.classList.replace("main__main-container__alertNew", "main__main-container__alert");
}
function renderEmpty(elementId) {
    let element = document.getElementById(elementId);
    element.innerHTML = "";
}
function resetDeck() {
    let deck = getDeckLS();
    deck.length = 0; // Reset deck array to empty
    resetDeckLS();
    renderDeck(deck);
    renderCards(cardsArray);

    let element = document.getElementById("mainAlertContainer");
    element.innerHTML = "";
    element.classList.replace("main__main-container__alertNew", "main__main-container__alert");

    renderCards(cards)
}
function renderCards(cards) {
    let deck = getDeckLS();
    let mainCardsContainer = document.getElementById("mainCardsContainer");
    mainCardsContainer.innerHTML = "";

    cards.forEach(card => {
        let flag = false;
        deck.forEach(element => {
            if (card.id === element.id) {
                flag = true;
            }
        });

        if (flag === false) {
            let cardContainer = document.createElement("article");
            cardContainer.className = "cardContainer cardContainerCards";
            let img = "";
            if (card.tipo === "Común") {
                img = "./img/png/comun.png";
            } else if (card.tipo === "Épica") {
                img = "./img/png/epica.png";
            } else if (card.tipo === "Legendaria") {
                img = "./img/png/legendaria.png";
            } else if (card.tipo === "Rara") {
                img = "./img/png/rara.png";
            }
            cardContainer.innerHTML = `
                <img src=./img/background.png>
                <div class=cardContainer__text>
                    <div>${card.nombre}</div>
                    <div>${card.id}</div>
                </div>
                <img class=cardContainer__type src=${img}>
                <button class="addButton button" id="addCardToDeckButton${card.id}">AGREGAR</button>
                <img src=./img/png/${card.id}.png>
            `;
            mainCardsContainer.appendChild(cardContainer);
            let addCardToDeckButton = document.getElementById("addCardToDeckButton" + card.id);
            addCardToDeckButton.addEventListener("click", (e) => addCardToDeck(e, cards));
        }
    });
}
function renderDeck() {
    let deck = getDeckLS();
    let cont = 0;
    let deckContainer = document.getElementById("mainDeckContainer");
    deckContainer.innerHTML = "";

    deck.forEach(card => {
        let cardContainer = document.createElement("article");
        cardContainer.classList = "cardContainerDeck cardContainer";

        let img = "";
        if (card.tipo === "Común") {
            img = "./img/png/comun.png";
        } else if (card.tipo === "Épica") {
            img = "./img/png/epica.png";
        } else if (card.tipo === "Legendaria") {
            img = "./img/png/legendaria.png";
        } else if (card.tipo === "Rara") {
            img = "./img/png/rara.png";
        }

        cardContainer.innerHTML = `
            <img src=./img/background.png>
            <div class=cardContainer__text>
                <div>${card.nombre}</div>
                <div>id:${card.id}</div>
            </div>
            <img class=cardContainer__type src=${img}>
            <button class="deleteButton button" id="eliminar${card.id}">ELIMINAR</button>
            <img src=./img/png/${card.id}.png>
        `;

        if (cont < 8) {
            deckContainer.appendChild(cardContainer);

            let eliminarButton = document.getElementById("eliminar" + card.id);
            eliminarButton.addEventListener("click", () => removeCardFromDeck(card.id, deck));
        } else {
            alert(`El mazo ya esta yeno`);
        }
    });
}
function filterByAndRender(cards) {
    let commonButton = document.getElementById("comunes");
    let rareButton = document.getElementById("raras");
    let epicButton = document.getElementById("epicas");
    let legendaryButton = document.getElementById("legendarias");

    legendaryButton.addEventListener("click", () => {
        let typeCards = cards.filter(card => card.tipo === "Legendaria");
        renderCards(typeCards);
    });
    epicButton.addEventListener("click", () => {
        let typeCards = cards.filter(card => card.tipo === "Épica");
        renderCards(typeCards);
    });
    rareButton.addEventListener("click", () => {
        let typeCards = cards.filter(card => card.tipo === "Rara");
        renderCards(typeCards);
    });
    commonButton.addEventListener("click", () => {
        let typeCards = cards.filter(card => card.tipo === "Común");
        renderCards(typeCards);
    });
}
function sendToast(){
    Toastify({
        text: "Carta agregada al mazo correctamente",
        duration: 1000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
}


mainFunction();

// async function pedirInfo(){
//     return new Promise()
//     fetch("./data.json")
//         .then(response => response.json())
//         .then(cards => {
//             return cards;
//         })
// }



