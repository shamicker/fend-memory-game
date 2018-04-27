
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
  // and status (back or front), and then add each image 2x to the deck
  for (let i = 0; i < num; i++) {
    for (let k = 0; k < 2; k++){
      let card = {
        image: allCards[i],
        id: [i] + '-' + [k],
        status: "back"
      };

    deck.push(card);
    }
  }
  return deck;
}

// armed with only an id, returns a whole card object
// function getCardObject(id){
//   for ( card in deck){
//     if
//   }
// }

// either add the deck to the argument, or (probably better way)
// is to make a function to getCardObject, similar to getCatInfo
function showCard(thisOne){
  console.log('thisOne:', thisOne);
  thisOne.status = "front";
  thisOne.className = `card ${thisOne.status}`;

  thisOne.style.backgroundImage = `url('images/cardImages/${thisOne.image}`;

  return thisOne;
}

function hideCard(thisOne){
  thisOne.status = 'hidden';
  thisOne.className = `card ${thisOne.status}`;
  thisOne.style.backgroundSize = "cover";

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
function hardcodeElementWidth(columns){
  // padding, margin, border all have 2 sides to calculate
  const liPadding = 10 * 2;
  const liMargin = 10 * 2;
  const liBorder = 1 * 2;
  const liWidth = 100;
  return (liWidth + liPadding + liBorder + liMargin ) * columns;
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
  ul.style.width = hardcodeElementWidth(columns) + "px";

  deck.forEach(function(card, index){
    const item = document.createElement('li');
    item.className = `card ${card.status}`;
    item.id = card.id;
    // item.style.backgroundImage = `url('images/cardImages/${card.image}`;

    ul.appendChild(item);

    item.addEventListener('click', function(){
      showCard(card);
    });
  })

  canvas.appendChild(ul);

  // this part is temporary...
  // for whichever li is clicked
  // const domCardList = document.getElementsByClassName('card');

  // add click fn
  // for( let i = 0; i < domCardList.length; i++){
  //   domCardList[i].addEventListener('click', function(){
  //     console.log('this card:', this);
  //     const id = this.id.charAt(0);
  //     console.log("this id is", id);
  //     showCard(this);
  //   });
  // }
}


function getPair(pairsFound){
  let firstCard;

  const canvas = document.getElementsByClassName('canvas')[0];

  // click
  canvas.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    const clicked = e.target.parentNode;

    // firstCard? set & flip
    if ( firstCard === undefined ){
      firstCard = clicked;
      console.log("firstCard is:", firstCard);
      showCard(firstCard);

    // flip second card & check for a match
    } else {
      showCard(clicked);
      console.log('firstCard again:', firstCard);
      console.log('second card:', clicked);
    }

    // if second card matches firstCard
    console.log( clicked.id === firstCard.id);
    if ( clicked.id === firstCard.id ){

      // it's a match!
      // subtract from pairsFound and return
      pairsFound++;

    } else {
      // not a match...
      // hide both cards and try again
      hideCard(firstCard);
      hideCard(clicked);
    }


  });
  return pairsFound;
}








