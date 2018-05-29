
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffleCards(array) {
  console.log("- Shuffling");
  // console.log('first:', array[0], "of", array.length);

  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// my attempt at creating a dynamically-sized board,
// to always contain a square (or near-square) of cells
function squareSize(numb){
  console.log("- Getting dimensions of", numb);

  const numCards = numb * 2;
  // find all the factors of the number
  let factors = [];
  for (let i=0; i <= numCards; i++){
    if (numCards % i === 0){
      factors.push(i);
    }
  }

  // Find the middle-most of 'factors'.
  // If it's not an integer, round up.
  const middle = factors.length/2.0;

  console.log('factors:', factors);

  if ( Number.isInteger(middle) ){
    // if a whole number, round down and return the 2 middles
    return [factors[middle], factors[middle - 1]];
  } else {
    // otherwise, it's an odd-length list and the 2 middle factors are identical
    return [factors[Math.floor(middle)], factors[Math.floor(middle)]];
  }
}

// Calculates total width of a single card item (li) to dictate # columns
// It's hard-coded because the cards don't exist yet, except in the CSS
function hardcodeTableWidth(columns){

  // padding, margin, border all have 2 sides to calculate
  const liPadding = 0;
  const liMargin = 10;
  const liBorder = 0;
  const liWidth = 125;
  return (liWidth + (liPadding + liBorder + liMargin)*2 ) * columns;
}

// createDeck takes in a number and all the card images,
// returns a list having 'num' pairs of card objects
function createDeck(num, allCards){
  // console.log("- Creating deck");

  let deck = [];

  // for each pair of cards, create object holding image filename
  // and status (hidden or shown), and then add each image 2x to the deck
  for (let i = 0; i < num; i++) {
    for (let k = 0; k < 2; k++){

      let dash2;
      // a and b instead of 0 and 1
      if ( k === 0 ){
        dash2 = 'a';
      } else {
        dash2 = 'b';
      }

      let card = {
        image: allCards[i],
        id: `${i}${dash2}-card`,
        status: "hidden"
      };

    deck.push(card);
    }
  }
  return deck;
}

// takes in the dimensions from `squareSize()`
// and displays the deck of cards
function displayBoard(dimensions){
  const [columns, rows] = dimensions;

  // get DOM variable
  const canvas = document.getElementsByClassName('canvas')[0];
  // clear the canvas!
  canvas.innerHTML = "";

  // create the ul that will hold the list of cards
  const ul = document.createElement('ul');
  ul.className = "table";
  ul.style.width = hardcodeTableWidth(columns) + "px";

  globalVariables.deckObj.forEach(function(card, index){
    const item = document.createElement('li');
    const imgFront = document.createElement('img');
    const imgBack = document.createElement('img');

    item.className = `card ${card.status}`;
    item.id = card.id;
    // item.style.backgroundImage = `url('images/cardImages/${card.image}`;

    // to animate, create front and back img tags
    imgFront.className = 'front';
    imgFront.id = `${card.id}-front`;
    imgFront.src = `images/cardImages/${card.image}`;
    imgFront.alt = `${card.image}`;

    imgBack.className = 'back';
    imgBack.id = `${card.id}-back`;
    imgBack.src = 'images/abstract-2924732_960_720.jpg';
    imgBack.alt = 'an abstract design representing the back of the card deck';

    item.appendChild(imgFront);
    item.appendChild(imgBack);
    ul.appendChild(item);
  })

  canvas.appendChild(ul);
}

// Takes in a card element and flips it to show the image
function revealCard(card){
  console.log('Reveal card!');

  if ( $(card).hasClass('matched') ){
    alert('This card already has a known match. Pick a card that is face down.');
  } else if ( $(card).hasClass('hidden') ) {
    $(card).removeClass('hidden').addClass('shown');
     globalVariables.cardsSelected.push(card);
  } else {
    alert('This card is already shown. Pick a card that is face down.');
  }
}

// Flips 2 cards face up
function flipCards(){

  // reveals 2 card elements
  $(".table").click(function(e){
    console.log('tries:', globalVariables.tries+1);
    const card = e.target.parentNode;

    if (globalVariables.cardsSelected.length < 2){
      revealCard(card);
    }

    if (globalVariables.cardsSelected.length === 2){
      checkMatch();
    }
  });

}

// checks face-up cards for a match
function checkMatch(){
  console.log('--Checking for match');
  const first = globalVariables.cardsSelected[0];
  const second = globalVariables.cardsSelected[1];

  // if shown cards are a match, add class match (stay face up)
  if ( first.id.charAt(0) === second.id.charAt(0) ){
    $( first ).addClass('match');
    $( second ).addClass('match');
    setTimeout(function(){
      alert("It's a match!");
    }, 1000);

  // if not a match, hide cards again, tries + 1, try again
  } else {
    setTimeout(function(){
      [first, second].forEach(function(card){
        $( card ).addClass('hidden').removeClass('shown');
      });
    }, 1000);
  }

  globalVariables.tries += 1;
  globalVariables.cardsSelected = [];


}








