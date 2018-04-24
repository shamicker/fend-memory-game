

// background tools - should be the controller; the action functions
const gameSetup = {
  // allCards: [],

  // createDeck creates an array of pairs of images, with num pairs
  createDeck: function(num){
    console.log("- Creating deck");

    let deck = [];
    // add num cards to the deck, twice each to make pairs
    while (num > 0){
      // import an image and save it to something/
      deck.push(gameSetup.allCards[num]);
      deck.push(gameSetup.allCards[num]);

      // $("<img class='card' src='images/cardImages/" + filename + "'>").appendTo("#canvas");
      num--;
    }
    console.log("Deck is", deck.length, " cards long");
    return deck;
  },

  // Shuffle function from http://stackoverflow.com/a/2450976
  shuffleCards: function shuffle(array) {
    console.log("- Shuffling");

    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  },

  // displayBoard: function(numPairs){
//     console.log("displayBoard is running");
//     // clear the canvas!
//     canvas.innerHTML = "";

//     // HTML for each card
//     const board = document.createDocumentFragment();

//     // for each card
//     while (numPairs > 0) {
//         deck.push(card);
//         numPairs--;
//     }


//     // display board on canvas
//     canvas.appendChild(board);
//     console.log(canvas);

//     // add click handles
//     board.addEventListener("click", function(evt){
//         evt.preventDefault();
//         event.stopPropagation();
//         event.stopImmediatePropagation();

//         const row = evt.target.parentNode.rowIndex;
//         const column = evt.target.cellIndex;

//         console.log("row, column: ", row, column);

//         // what happens when clicked??
//     });
  // }



// matching logic - how to tell if a player guesses correctly?

// how to tell if the game is won/over?


};





const gamePlay = function(){
  // const starter = document.getElementById('start');

  // 1. wait for click event
  // The user Starts the game (via button)
  $("#start").click(function(){
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    console.log("Click!");
    const pairs = $("#pairs").val();

    console.log("- Getting pairs");
    console.log("pairs:", pairs);

    gameSetup.createDeck(pairs);
  });

  // 2. shuffle cards
  // 3. create deck
    gameSetup.createDeck(pairs);
  // 4. put deck on board
  // 5. wait for click event1
  // 6. wait for click event2
  // 7. check if click1 and click2 are a card match
  // 8. if so, leave face up and repeat 5-7
  // 9. keep repeating until all cards face up OR timer runs out
  // 10. win or lose?
};
