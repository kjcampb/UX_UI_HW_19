/*$(document).ready(function() {
    // Fade in the landing section
    $("#myButton").fadeIn(2000);
    console.log('it worked')
});*/

/*$(document).ready(function(){
    $(".bigPic").animate({
      //left: '100vw',
      opacity: 100
    }); 
  });*/

  // With the element initially hidden, we can show it slowly:
//$( "#clickme" ).on( "click", function() {
    //$( "#book" ).fadeIn( "slow", function() {
      // Animation complete
    //});
  //});

/*$(document).ready(function(){
    $(".bigPic").fadeIn("fast", function() {
        opacity: 100;
    });
});*/

/*$(".bigPic").on( "click", function(){
    $( ".bigPic" ).fadeIn( "slow", function() {

    });
});*/

/*$( document.body ).on( "click", function() {
    $( "div:hidden" ).first().fadeIn( "slow" );
  });*/

let myHero = document.getElementById('bigPic');

  $(document).ready(function(){
    myHero.classList.toggle('fade');
    myHero.classList.toggle('move');
  });

/*var insta = document.getElementById('INST');

insta.addEventListener('hover', function(){
    img.src = '.images/Instagram Yellow.png';
});*/


/*var insta = document.getElementById('INST');

function changeImage(insta,image) {
if (x==1){
    image.src = '.images/Instagram Yellow.png';
}
if (x == 2) {
    image.src = '.images/Instagram.png';
}
}*/


