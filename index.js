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

        let playerCardValue = data.cards[0].value;
        let computerCardValue = data.cards[1].value;

        if (playerCardValue == "ACE") {
            playerCardValue = 14;
        } else if (playerCardValue == "KING") {
            playerCardValue = 13;
        } else if (playerCardValue == "QUEEN") {
            playerCardValue = 12;
        } else if (playerCardValue == "JACK") {
            playerCardValue = 11;
        } else if (playerCardValue == "10" || "9" || "8" || "7" || "6" || "5" || "4" || "3" || "2") {
            parseInt(playerCardValue);
        }

        console.log(playerCardValue);


        if (computerCardValue == "ACE") {
            computerCardValue = 14;
        } else if (computerCardValue == "KING") {
            computerCardValue = 13;
        } else if (computerCardValue == "QUEEN") {
            computerCardValue = 12;
        } else if (computerCardValue == "JACK") {
            computerCardValue = 11;
        } else if (computerCardValue == "10" || "9" || "8" || "7" || "6" || "5" || "4" || "3" || "2") {
            parseInt(computerCardValue);
        }

        console.log(computerCardValue);

        function compareHands(card1, card2) {

        if (playerCardValue == computerCardValue) {
            console.log("its a tie");
        } else if (playerCardValue > computerCardValue) {
            console.log("player 1 wins");
        } else {
            console.log("computer wins");
        }
    }
        compareHands(playerCardValue, computerCardValue);

    });

})

