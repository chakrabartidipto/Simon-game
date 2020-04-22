var c;
function progress(){
    exclusive(gamePattern,userClickedPattern);
    if(c==0){
        nextSequence();
    }
    else{
     console.log("Didn't match");
      gameOver();
    }

}

function exclusive(a,b){
    

    $.each(a, function(){
        var self = this.toString();             //reusable array function comparison

        if(b.indexOf(self) === 0){
            c=0;
        }
    });
    console.log(c);
    return c;
}

// gameover

function gameOver(){
    $("h1").text("Game Over");
    musicPlay(wrong);
    $(".btn").off("click");

}

/// starting with a specific key

$(document).on("keydown", function(event){
    key1=event.key;
    start();
                               // this is gem! Function gets executed
                                                         //only once.
});  
function start(){
    console.log(key1);
    console.log(startKey[0]);
    if(key1 == startKey[0] || key1 == startKey[1]) {
        nextSequence();
        $(document).off("keydown");   
    }
    else {
        $("h1").text("Press A Key to Start");

    }
}

//swap image on click
<img  class="music" src="music.png" alt="mute" data-swap="pause.png"></img>
$(".music").click(function() { 
    //   var _this = $(this);
    //   var current = _this.attr("src");
    //   var swap = _this.attr("data-swap");     
     _this.attr('src', swap).attr("data-swap",current);   
    }); 