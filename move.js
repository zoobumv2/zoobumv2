$(document).ready(function(){
    var counter = 1;
    var imgcount = $("#gallery li").length;
    var imgslides = 0;
    var $sliderWidth = $(".slider").width();
    
    if(imgcount%4===0){
        imgslides = imgcount / 4;
    }
    else{
        imgslides = Math.round((imgcount / 4)+1);
    } 
    
    $("#gallery").css("width", ($sliderWidth*imgslides)+"px");
    
    $(".slide_right").click(function(){  
      if(counter<imgslides-1){
        $("#gallery").animate({'margin-left': '-='+$sliderWidth+'px'},700);
        counter++;
      };
    });
    $(".slide_left").click(function(){
      if(counter>1){
        $("#gallery").animate({'margin-left': '+='+$sliderWidth+'px'},700);
        counter--;
      };
    }); 
    
    
});