let globalVariables = {
  deckObj: {},
  tries: 0,
  cardsSelected: []
};

// 1. wait for click event
// The user Starts the game (via button)
$("#start").click(function(){
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();

  console.log("Click! Play game!");
  console.log("tries:", globalVariables.tries, "cardsSelected:", globalVariables.cardsSelected);

  // How big will the board be?
  const numPairs = $("#pairs").val();

  // 2. shuffle cards if they haven't been in the ajax request
  // shuffleCards(allCards);

  // 3. create the deck (populates deckObj)
  globalVariables.deckObj = createDeck(numPairs, allCards);
  console.log("deckObj has", globalVariables.deckObj.length, "cards.");

  // 3.5 shuffle the deck!
  shuffleCards(globalVariables.deckObj);

  // 3.4 Size of deck determines size of board
  // Get the board's dimensions
  const dimensions = squareSize(numPairs);

  // 4. put deck on board
  displayBoard(dimensions);

  // flip cards
  flipCards();
});

  // 5. wait for click event1
  // 6. wait for click event2
  // 7. check if click1 and click2 are a card match
  // 8. if so, leave face up and repeat 5-7
  // 9. keep repeating until all cards face up OR timer runs out
  // 10. win or lose?
