var getImages = {
    init: function(){
        let allImages = [];

        // get ALL images!
        const dir = "https://github.com/shamicker/fend-memory-game/blob/master/images/cardImages";

        $.ajax({
            url: dir,
            success: function(data){
                // list all image filenames in the page
                $(data).find("a").attr("href", function(i, val){
                    if( val.match(/\.(jpe?g|png|svg)$/) ){
                        let filename = this.title;
                        allImages.push('images/' + filename);
                        // $("#canvas").append("<img src='" + filename + "'>");
                    }
                });
            }
        });

        // initialize the game
        memoryGame.init(allImages);
    }
};

$( document ).ready( getImages.init() );
