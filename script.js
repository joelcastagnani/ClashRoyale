//Cards instance
const cards =[
    {id: 1, name: "Mega Knight", elixir: 7},
    {id: 2, name: "Lumberjack", elixir: 4},
    {id: 3, name: "Baloon", elixir: 5},
    {id: 4, name: "Firecracker", elixir: 3},
    {id: 5, name: "Miner", elixir: 3},
    {id: 6, name: "Phoenix", elixir: 4},
    {id: 7, name: "Golem", elixir: 8},
    {id: 8, name: "Prince", elixir: 6},
    {id: 9, name: "Baby Dragon", elixir: 4},
    {id: 10, name: "Musketeer", elixir: 4}
    ];

function showCard(card){
    return "ID: " + card.id + " | Name: " + card.name + " | Elixir: " + card.elixir;
} //Show just 1 card
function showCards(arrayObject){
    let cardsList = "";
    let i = 1;
    arrayObject.forEach(card => {
        cardsList += i + "- " + showCard(card);
        i++;
    });
    return cardsList;
}//Show cards list
function addCard(deck){
    const idCard = parseInt(prompt("Ingrese el ID de la carta que quiere agregar"));
    const card = cards.find(ca => ca.id === idCard);
    let text = "";
    if(card){
        deck.push(card);
        text = `${card.name} ha sido agregado correctamente a su mazo.`;
    }else{
        text = "Producto no encontrado";
    }
    return text;
}//Add cards to your deck
function deleteCard(deck){
    const idCard = parseInt(prompt("Ingrese el ID de la carta que quiere eliminar"));
    const index = cards.findIndex(ca => ca.id === idCard);
    const card = cards.find(ca => ca.id === idCard);
    let text = "";
    if(index !== -1){
        const deletedCard = deck.splice(index, 1)[0];
        text = (`${card.name} ha sido eliminado correctamente de su mazo.`);
    }else{
        text = "Producto no encontrado en el mazo";
    }
    return text;
}//Delete one card from your deck




//Test Board
const deck = [];
//alert(showCard(cards[5]));
//alert(addCard(deck));
//alert(showCards(deck));
//alert(deleteCard(deck));