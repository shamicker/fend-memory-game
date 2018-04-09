var memoryGame = {
    init: function(){
        const canvas = document.getElementById("canvas");
        // build grid of cards
        let faceDown = [];
        let faceUp = [];

        // face cards and back sides (both sides are needed)




    },

    // getGridSize is called when user Starts the game (via button)
    getGridSize: function(event){
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        const numPairs = document.getElementById("pairs").value;

        memoryGame.displayBoard(numPairs);
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

    displayBoard: function(numPairs){
        console.log("displayBoard is running");
        // clear the canvas!
        canvas.innerHTML = "";

        // HTML for each card
        const board = document.createDocumentFragment();


        // for each row, create row
        // for (let ri = 0; ri < height; ri++ ){
        //     let row = document.createElement("tr");

        //     // append cells to row
        //     for ( let cin = 0; cin < width; cin++ ){
        //         let cell = document.createElement("td");
        //         cell.innerHTML = "hi";
        //         row.appendChild( cell );
        //     }

        // shuffle the cards

            // append row to board
            board.appendChild(row);
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

$( document ).ready( memoryGame.init() );
