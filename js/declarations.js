
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffleCards(array) {
  // console.log("- Shuffling");

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

// createDeck creates a list of 'num' pairs of images, to be our playing deck
function createDeck(num, allCards){
  // console.log("- Creating deck");

  let deck = [];
  // for each pair of cards, create object holding image filename
  // and status (hidden or shown), and then add each image 2x to the deck
  for (let i = 0; i < num; i++) {
    let card = {
      image: allCards[i],
      id: i,
      status: "hidden"
    };
    deck.push(card);
    deck.push(card);
  }
  return deck;
}

// takes in a 'deck' (list of images) and displays them
function displayBoard(deck, dimensions){
  // console.log("- Displaying board");
  const [width, height] = dimensions;

  // set DOM variables
  const canvas = document.getElementsByClassName('canvas')[0];

  // clear the canvas!
  canvas.innerHTML = "";

  // create HTML for each card
  // const table = document.createElement("table");
  // let cellCounter = 0;

  // // for each row, make a row
  // for (let ri = 0; ri < height; ri++) {
  //   let row = document.createElement('tr');
  //   // append cells to the row
  //   for (let cin = 0; cin < width; cin++){
  //     let cell = document.createElement('td');
  //     cell.innerHTML = `<img id='${deck[cellCounter].id}' class='card ${deck[cellCounter].status}' src='images/cardImages/${deck[cellCounter].image}'>`;
  //     row.appendChild( cell );
  //     cellCounter++;
  //   }
  //   // and append each row to the table
  //   table.className = 'table';
  //   table.appendChild(row);
  // }

  // // display board on canvas
  // canvas.appendChild(table);
  // console.log(canvas);

  const ul = document.createElement('ul');
  ul.className = 'table';
  const url = "url('images/abstract-2924732_960_720.jpg') no-repeat center";

  deck.forEach(function(card, index){
    const item = document.createElement('li');
    let img = document.createElement('img');
    item.className = `card ${card.status}`;
    item.id = card.id;

    // if hidden, show back of card
    if (card.status === 'hidden'){
      item.style.background = url;
      item.style.backgroundSize = "cover";
    } else {
      img.src = 'images/cardImages/' + card.image;
      item.appendChild(img);
    }

    ul.appendChild(item);
  })

  canvas.appendChild(ul);

  // add click handles
  canvas.addEventListener("click", function(evt){
    evt.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    console.log(evt.target);
    showCard(evt.target);

    // if it's the first card flipped, wait for another to flip

    // what happens when clicked??
  });
}


// either add the deck to the argument, or (probably better way)
// is to make a function to getCardObject, similar to getCatInfo
function showCard(thisOne){
  console.log('thisOne: ', thisOne);
  // Flip the card over
  let image = document.createElement('img');
  // status is shown - and change class
  thisOne.status = "shown";
  thisOne.className = `card ${thisOne.status}`;
  // remove cardback image and replace with img element with image
  thisOne.style.background = "";
  image.src = 'images/cardImages/' + thisOne.image;

  thisOne.appendChild( image );

  return thisOne;s
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








