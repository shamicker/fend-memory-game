var memoryGame = {
    init: function(){
        let canvas = document.getElementById("canvas");
        // build grid of cards
        let faceDown = [];
        let faceUp = [];

        // face cards and back sides (both sides are needed)




    },

    // get user grid size
    getGridSize: function(event){
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        const width = document.getElementById("width").value;
        const height = document.getElementById("height").value;

        // make the board
        memoryGame.displayBoard(width, height);
    },

    displayBoard: function(width, height){
        // clear the canvas!
        canvas.innerHTML = "";

        // HTML for each card
        const board = document.createDocumentFragment();

        // for each row, create row
        for (let ri = 0; ri < height; ri++ ){
            let row = document.createElement("tr");

            // append cells to row
            for ( let cin = 0; cin < width; cin++ ){
                let cell = document.createElement("td");
                cell.innerHTML =
                row.appendChild( cell );
            }

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

memoryGame.init();
