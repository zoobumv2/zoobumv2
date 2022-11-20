
$(document).ready(function(){
    
    var $overlay = $('<div id="overlay"></div>');
    var $secondOverlay = $('<div id="secondOverlay"></div>');
    var $image = $('<img class="uvecane_slike">');
    var $bigImage = $('<img class="bigImage">');
    var $text = $('<p class="alt"></p>');

    $overlay.hide();
    $secondOverlay.hide();
    $overlay.append($image);
    $overlay.append($text);
    $secondOverlay.append($bigImage);
    $("body").append($overlay);
    $("body").append($secondOverlay);

    $("#gallery li").hover(function(){
        $(this).children("img").css("opacity", "0.8");
    });


    $("#gallery a").click(function(event){
        event.preventDefault();
        var $imglocation = $(this).attr("href");
        var $alt = $(this).children("img").attr("alt");
        $("#gallery img").css("opacity", "0.6");
        $(this).children("img").css("opacity", "1");

        $overlay.css({"display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "column"});
        $image.attr("src", $imglocation);
        $text.text($alt);

    });

    $overlay.click(function(){
        $(this).hide();
        $("#gallery img").css("opacity", "0.6");
    })

    $("#gallery a").dblclick(function(event){
        event.preventDefault();
        $overlay.css("display", "none");
        var $imglocation = $(this).attr("href");
        var $alt = $(this).children("img").attr("alt");
        $("#gallery img").css("opacity", "0.6");
        $(this).children("img").css("opacity", "1");

        $secondOverlay.css({"display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "column"});
        $bigImage.attr("src", $imglocation);
        $text2.text($alt);
    });

    $secondOverlay.dblclick(function(){
        $(this).hide();
        $overlay.css({"display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "column"});
        $image.attr("src", $imglocation);
        $text.text($alt);
    });



    
});

