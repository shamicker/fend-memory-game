let allCards = [];

(function(){
  let images = [];

  // get ALL images!
  const dir = "https://github.com/shamicker/fend-memory-game/tree/master/images/";
  // const dir = "https://github.com/shamicker/fend-memory-game/blob/master/images/cardImages";

  $.ajax({
    url: dir,
    success: function(data){
      // from the page, of all the anchors with hrefs,
      $(data).find("a").attr("href", function(i, val){

        // if it's an image add it to images
        if( val.match(/\.(jpe?g|png|svg)$/) ){
          let filename = this.title;
          images.push(filename.toString());
        }

      });
      console.log("List of images populated");
      console.log("Shuffle these images.");

      // Make images global
      allCards = images;

      // shuffle the cards
      shuffleCards(allCards);
    }
  });
})();

