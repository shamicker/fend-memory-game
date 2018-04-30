
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffleCards(array) {
  console.log("- Shuffling");
  console.log('length:', array.length);

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

// createDeck returns a list of card objects,
// of num*2 length
// having 2 of each card ('num' pairs of cards)
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

// either add the deck to the argument, or (probably better way)
// is to make a function to getCardObject, similar to getCatInfo
function flipCard(thisOne, deck, whichWay){
  console.log('thisOne:', thisOne);
  let thisObject;

  for (i in deck) {
    const card = deck[i];
    if ( card.id === thisOne.id) {
      thisObject = card;
    }
  }
  thisObject.status = whichWay;

  thisOne.className = `card ${thisObject.status}`;

  return thisOne;
}

// my attempt at creating a dynamically-sized board,
// to always contain a square (or near-square) of cells
function squareSize(numb){
  // console.log("- Getting dimensions of", numb);
  // find all the factors of the number
  let factors = [];
  for (i=0; i <= numb; i++){
    if (numb % i === 0){
      factors.push(i);
    }
  }

  // Find the middle-most of 'factors'.
  // If it's not an integer, round up.
  const middle = factors.length/2.0;

  if ( Number.isInteger(middle) ){
    // if a whole number, round down and return the 2 middles
    return [factors[middle], factors[middle - 1]];
  } else {
    // otherwise, it's an odd-length list and the 2 middle factors are identical
    return [factors[Math.floor(middle)], factors[Math.floor(middle)]];
  }
}

// Calculates total width of a single card item to dictate # columns
// It's hard-coded because the cards don't exist yet, except in the CSS
function hardcodeTableWidth(columns){

  // padding, margin, border all have 2 sides to calculate
  const liPadding = 0;
  const liMargin = 10;
  const liBorder = 0;
  const liWidth = 125;
  return (liWidth + (liPadding + liBorder + liMargin)*2 ) * columns;
}

// takes in a 'deck' (list of images) and displays them
function displayBoard(deck, dimensions){
  const [columns, rows] = dimensions;

  // get DOM variable
  const canvas = document.getElementsByClassName('canvas')[0];
  // clear the canvas!
  canvas.innerHTML = "";

  // create the ul that will hold the list of cards
  const ul = document.createElement('ul');
  ul.className = "table";
  ul.style.width = hardcodeTableWidth(columns) + "px";

  deck.forEach(function(card, index){
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

function flipCards(deck){
  const cardList = document.getElementsByClassName('card');

  for (let i = 0; i < cardList.length; i++){
    cardList[i].addEventListener('click', function(){
      console.log('this card was', this.classList[1]);

      if ( this.classList[1] === 'hidden' ){
        flipCard(this, deck, 'shown');
      } else {
        flipCard(this, deck, 'hidden');
      }
    });
  }

}



// function getPair(pairsFound){
//   let firstCard;

//   const canvas = document.getElementsByClassName('canvas')[0];

//   // click
//   canvas.addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     e.stopImmediatePropagation();

//     const clicked = e.target.parentNode;

//     // firstCard? set & flip
//     if ( firstCard === undefined ){
//       firstCard = clicked;
//       console.log("firstCard is:", firstCard);
//       showCard(firstCard);

//     // flip second card & check for a match
//     } else {
//       showCard(clicked);
//       console.log('firstCard again:', firstCard);
//       console.log('second card:', clicked);
//     }

//     // if second card matches firstCard
//     console.log( clicked.id === firstCard.id);
//     if ( clicked.id === firstCard.id ){

//       // it's a match!
//       // subtract from pairsFound and return
//       pairsFound++;

//     } else {
//       // not a match...
//       // hide both cards and try again
//       hideCard(firstCard);
//       hideCard(clicked);
//     }


//   });
//   return pairsFound;
// }








