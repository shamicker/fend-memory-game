var getImages = {
    init: function(){
        let allImages = [];

        // get ALL images!
        const dir = "https://github.com/shamicker/fend-memory-game/blob/master/images/cardImages";

        $.ajax({
            url: dir,
            success: function(data){
                // from the page, of all the anchors with hrefs,
                $(data).find("a").attr("href", function(i, val){

                    // if it's an image add it to allImages
                    if( val.match(/\.(jpe?g|png|svg)$/) ){
                        let filename = this.title;
                        allImages.push(filename);

                        // write to offlineImages for a default deck
                        // I don't think this'll work... so it's just for me right now
                        $("<li>" + filename + "</li>").appendTo(".offlineImages");
                    }
                });
            }
        });

        // initialize the game
        memoryGame.init(allImages);
    }
};

$( document ).ready( getImages.init() );
