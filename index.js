//grab elements from the DOM
const dealButton = document.querySelector(".btn__deal");
const container = document.querySelector(".container");

//create a way to get a new deck of cards from the deck of cards api.

dealButton.addEventListener("click", function(e) {
    e.preventDefault();
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/draw/?count=2", {
        method: 'GET',
        jokers_enabled: true,
    })
    .then(res => res.json())
    .then((data) => {
        let deckId = `${data.deck_id}`;
        console.log(data);
        let card1Img = document.createElement('img');
        card1Img.src = `${data.cards[0].image}`
        container.append(card1Img);
        let card2Img = document.createElement('img');
        console.log(`${data.cards[1].image}`)
        card2Img.src = `${data.cards[1].image}`;
        container.append(card2Img);
    });

})

