// 1. wait for click event
// The user Starts the game (via button)
$("#start").click(function(){
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log("Click! Play game!");

  // How big will the board be?
  const numPairs = $("#pairs").val();
  console.log("You chose a game with", numPairs, "pairs.");
  console.log("Shuffle all the images again, just for fun.");

  // Separate out my card back:
  const cardBack = allCards.unshift();
  console.log(cardBack);

  // 2. shuffle cards if they haven't been in the ajax request
  shuffleCards(allCards);
  // console.log("First 2 allCards:", allCards[0], allCards[1]);

  // 3. create deck
  const deck = createDeck(numPairs, allCards);
  console.log("Your deck has", deck.length, "cards...");
  console.log("(shuffling your new deck)");

  // 3.5 shuffle the deck!
  shuffleCards(deck);

  // 3.4 Size of deck determines size of board
  // Get the board's dimensions
  const dimensions = squareSize(deck.length);
  console.log("...and the dimensions of your gameboard is", dimensions[0] + "x" + dimensions[1] + ".");
  console.log("Let's see this board!");

  // 4. put deck on board
  displayBoard(deck, dimensions);
  console.log("Is the board", dimensions[0] + "x" + dimensions[1] + "?");
});

  // 5. wait for click event1
  // 6. wait for click event2
  // 7. check if click1 and click2 are a card match
  // 8. if so, leave face up and repeat 5-7
  // 9. keep repeating until all cards face up OR timer runs out
  // 10. win or lose?