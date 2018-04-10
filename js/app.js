var memoryGame = {
    init: function(allCards){
        console.log("memoryGame initted");
        const canvas = document.getElementById("canvas");
        let deck = [];

    },

    // createDeck should create an array of images, with a length of num
    createDeck: function(num, allCards){
        console.log("creating deck");
        console.log("num:", num);
        console.log(allCards);
        // shuffle allCards
        memoryGame.shuffleCards(allCards);

        //
        while (num > 0){
            // import an image and save it to something/


            $("<img class='card' src='images/cardImages/" + filename + "'>").appendTo("#canvas");
            num--;
        }
    },

    // Shuffle function from http://stackoverflow.com/a/2450976
    shuffleCards: function shuffle(array) {
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

    // numPairs is called when user Starts the game (via button)
    numPairs: function(event){
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        const pairs = document.getElementById("#pairs").value;
        // numPairs is half the deck

        memoryGame.createDeck(pairs);
    },

    displayBoard: function(numPairs){
        console.log("displayBoard is running");
        // clear the canvas!
        canvas.innerHTML = "";

        // HTML for each card
        const board = document.createDocumentFragment();

        // for each card
        while (numPairs > 0) {
            deck.push(card);
            numPairs--;
        }


        // display board on canvas
        canvas.appendChild(board);
        console.log(canvas);

        // add click handles
        board.addEventListener("click", function(evt){
            evt.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            const row = evt.target.parentNode.rowIndex;
            const column = evt.target.cellIndex;

            console.log("row, column: ", row, column);

            // what happens when clicked??
        });
    }

    // matching logic - how to tell if a player guesses correctly?

    // how to tell if the game is won/over?


};

