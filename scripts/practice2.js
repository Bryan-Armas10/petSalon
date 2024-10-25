// challenge 2: Toggle Visivility of a image
// Objetive 

$(document).ready(function(){
    
    $("#toggleBtn").on('click',function(){
        $("#myImg").toggle();   
    });

    $(".answer").hide();

    $(".question").on('click',function(){
        $(".answer").slideToggle("slow");   
    });

}); 