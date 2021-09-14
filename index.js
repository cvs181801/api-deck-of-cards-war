//grab elements from the DOM
dealButton = document.querySelector(".btn__deal");

//create a way to get a new deck of cards from the deck of cards api.

dealButton.addEventListener("click", function(e) {
    e.preventDefault();
fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res=> res.json())
    .then((data) => {
        const deckId = `${data.deck_id}`;
        console.log(deckId);
    });
})

