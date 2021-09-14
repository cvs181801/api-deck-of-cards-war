//grab elements from the DOM
dealButton = document.querySelector(".btn__deal");
drawButton = document.querySelector(".btn__draw");

//create a way to get a new deck of cards from the deck of cards api.

dealButton.addEventListener("click", function(e) {
    e.preventDefault();
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/draw/?count=2", {
        method: 'GET',
        jokers_enabled = true,
    })
    .then(res => res.json())
    .then((data) => {
        let deckId = `${data.deck_id}`;
        console.log(data);
        //console.log(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
       
    });

    //drawButton.addEventListener("click", function(e) {
        //e.preventDefault();
        //console.log(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
    //    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data); 
    //     });
    // })

})

