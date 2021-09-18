//grab elements from the DOM
const dealBtn = document.querySelector(".btn__deal");
const container = document.querySelector(".container");
const paragraph = document.createElement("p");
const resultDiv = document.querySelector(".resultDiv");
const drawBtn = document.querySelector(".btn__draw");
const discardBtn = document.querySelector(".btn__discard");

//create a way to get a new deck of cards from the deck of cards api.

dealBtn.addEventListener("click", function(e) {
    e.preventDefault();
    dealBtn.classList.add("hidden");
    discardBtn.classList.remove("hidden");
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/draw/?count=2", {
        method: 'GET',
        jokers_enabled: true,
    })
    .then(res => res.json())
    .then((data) => {
        let deckId = `${data.deck_id}`;
        console.log(data);
        let cardsLeft = data.remaining;
        let renderCardsLeft = document.createElement("p");
        renderCardsLeft.textContent = `Cards left: ${cardsLeft}`;
        resultDiv.append(renderCardsLeft);
        let card1Img = document.createElement('img');
        card1Img.src = `${data.cards[0].image}`
        container.append(card1Img);
        let card2Img = document.createElement('img');
        console.log(`${data.cards[1].image}`)
        card2Img.src = `${data.cards[1].image}`;
        container.append(card2Img);

//create a way to determine the winner. * for more possible solutions see bottom part of code.*
    let playerCardValue = data.cards[0].value;
    let computerCardValue = data.cards[1].value;
        
    console.log(playerCardValue);
    console.log(computerCardValue);
        
    let valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
        "10", "JACK", "QUEEN", "KING", "ACE"]
    
    
    let playerCardValueIndex = valueOptions.findIndex((cardValue) =>  
         cardValue == playerCardValue
     );
    
    let computerCardValueIndex = valueOptions.findIndex((cardValue) =>
     cardValue == computerCardValue)
    
        if (playerCardValueIndex == computerCardValueIndex) {
            paragraph.textContent = `It's a tie!`;
            resultDiv.append(paragraph);
        } else if (playerCardValueIndex > computerCardValueIndex) {
            paragraph.textContent = `You won this battle!`;
            resultDiv.append(paragraph);
        } else {
            paragraph.textContent = `The computer won this battle...`;
            resultDiv.append(paragraph);
        } 

discardBtn.addEventListener("click", function(e) {
    e.preventDefault();
    paragraph.textContent = "";
    discardBtn.classList.add("hidden");
    drawBtn.classList.remove("hidden");
    console.log(deckId);
    let playerCardCode = data.cards[0].code;
    let computerCardCode = data.cards[1].code;
    console.log(playerCardCode);
    console.log(computerCardCode); //https://apis.scrimba.com/deckofcards/api/deck/new/draw/?count=2   //`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/${discardPile}/add/?cards=${playerCardCode},${computerCardCode}`
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/pile/discardPile/add/?cards=${playerCardCode},${computerCardCode}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            console.log(data.remaining)
            card1Img.src = "";
            card2Img.src = "";
        })   
    })

    drawBtn.addEventListener("click", function(e) {
        e.preventDefault();
        discardBtn.classList.remove("hidden");
        drawBtn.classList.add("hidden");
        paragraph.textContent = "";
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res=> res.json())
        .then((data) => {
            console.log(data)
            card1Img.src = `${data.cards[0].image}`;
            card2Img.src = `${data.cards[1].image}`;
            let cardsLeft = data.remaining;
            renderCardsLeft.textContent = `Cards left: ${cardsLeft}`;
            
            let playerCardValue = data.cards[0].value;
            let computerCardValue = data.cards[1].value;
                
            console.log(playerCardValue);
            console.log(computerCardValue);
              
            
            let valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
                "10", "JACK", "QUEEN", "KING", "ACE"]
            
            
            let playerCardValueIndex = valueOptions.findIndex((cardValue) =>  
                 cardValue == playerCardValue
             );
            
            let computerCardValueIndex = valueOptions.findIndex((cardValue) =>
             cardValue == computerCardValue)
            
                if (playerCardValueIndex == computerCardValueIndex) {
                    paragraph.textContent = `It's a tie!`;
                    //resultDiv.append(paragraph);
                    //console.log("its a tie!");
                } else if (playerCardValueIndex > computerCardValueIndex) {
                    paragraph.textContent = `You won this battle!`;
                    //resultDiv.append(paragraph);
                    //console.log("you won this battle");
                } else {
                    paragraph.textContent = `The computer won this battle...`;
                    //resultDiv.append(paragraph);
                    //console.log("the computer won this battle");
                }   
            
    })//close the draw btn e listener
    
})//close the discard btn e listener

});//close the second .then
    
}); //close the deal new deck e listener


//**** More algorithmic ways to solve the 'determine winner' challenge */

//1. first solution using if...else statements:

//let playerCardValue = data.cards[0].value;
//let computerCardValue = data.cards[1].value;

    //     if (playerCardValue == "ACE") {
    //         playerCardValue = 14;
    //     } else if (playerCardValue == "KING") {
    //         playerCardValue = 13;
    //     } else if (playerCardValue == "QUEEN") {
    //         playerCardValue = 12;
    //     } else if (playerCardValue == "JACK") {
    //         playerCardValue = 11;
    //     } else if (playerCardValue == "10" || "9" || "8" || "7" || "6" || "5" || "4" || "3" || "2") {
    //         parseInt(playerCardValue);
    //     }

        

    //     if (computerCardValue == "ACE") {
    //         computerCardValue = 14;
    //     } else if (computerCardValue == "KING") {
    //         computerCardValue = 13;
    //     } else if (computerCardValue == "QUEEN") {
    //         computerCardValue = 12;
    //     } else if (computerCardValue == "JACK") {
    //         computerCardValue = 11;
    //     } else if (computerCardValue == "10" || "9" || "8" || "7" || "6" || "5" || "4" || "3" || "2") {
    //         parseInt(computerCardValue);
    //     }

        

    //     function compareHands(card1, card2) {

    //     if (playerCardValue == computerCardValue) {
    //         console.log("its a tie");
    //     } else if (playerCardValue > computerCardValue) {
    //         console.log("player 1 wins");
    //     } else {
    //         console.log("computer wins");
    //     }
    // }
    //     compareHands(playerCardValue, computerCardValue);

    //2.here is another way to create the algorithm:

//     const cardValues = {
//         2: 2,
//         3: 3,
//         4: 4,
//         5: 5,
//         6: 6,
//         7: 7,
//         8: 8,
//         9: 9,
//         10: 10,
//         JACK: 11,
//         QUEEN: 12,
//         KING: 13,
//         ACE: 14
//     }

// console.log(cardValues[playerCardValue]);

// function compareHands(card1, card2) {

//         if (cardValues[card1] == cardValues[card2]) {
//             console.log("its a tie");
//         } else if (cardValues[card1] > cardValues[card2]) {
//             console.log("player 1 wins");
//         } else {
//             console.log("computer wins");
//         }
//     }
//         compareHands(playerCardValue, computerCardValue);


//3. another way to solve it using an array with array method:





