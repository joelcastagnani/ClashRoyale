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

/* Functions */
function showCard(card) {
    return "ID: " + card.id + " | Name: " + card.name + " | Elixir: " + card.elixir;
} //Show just 1 card
function showCards(arrayObject) {
    let cardsList = "";
    let i = 1;
    arrayObject.forEach(card => {
        cardsList += "\n" + i + "- " + showCard(card);
        i++;
    });
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
        text = "Producto no encontrado en el mazo";
    }
    alert(text);
    return deck;
}//Delete one card from your deck
function buildDeck() {
    let buildedDeck = [];
    let i = 0;
    while (i < 8) {
        let id = parseInt(prompt("Mazo actual:\n" + showCards(buildedDeck) + "\nIngrese el id de la carta numero " + (i + 1) + ":"));
        buildedDeck = addCard(id, buildedDeck);
        i++;
    }
    return buildedDeck;
}//Build an 8 cards deck


/* Test Board */
//alert(showCard(cards[5]));
//alert(showCards(deck));
//let deck = buildDeck();
//deck = deleteCard(parseInt(prompt("Ingrese el ID de la carta que desea eliminar: ")), deck);
//deck = addCard(parseInt(prompt("Ingrese el ID de la carta que desea agregar: ")), deck);


