let globalVariables = {
  numPairs: 0,
  deckObj: {},
  mismatches: 0,
  cardsSelected: []
};

// 1. wait for click event
// The user Starts the game (via button)
$("button").click(function(){
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();

  // close the popup if it's open
  $(".win")[0].close();

  // if cancel button was clicked, stop play
  if ( this.id === 'cancel' ){
    return;
  }

  // How big will the board be?
  globalVariables.numPairs = Number( $(this).prev().val() );

  // 2. shuffle ALL cards
  // from ajax request
  // shuffleCards(allCards);
  // from non-ajax list
  shuffleCards(cardImages);

  // close the winner's modal
  // if ( this.id === 'replay' ){
  //   $( "dialog" )[0].close();
  // }

  // 3. create the deck (populates deckObj)
  globalVariables.deckObj = createDeck();
  console.log("deckObj has", globalVariables.deckObj.length, "cards.");

  // 3.5 shuffle the deck!
  shuffleCards(globalVariables.deckObj);

  // 3.4 Size of deck determines size of board
  // Get the board's dimensions
  const dimensions = squareSize();

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
