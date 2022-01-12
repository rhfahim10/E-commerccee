$(function(){
  
$('.banner_slider').slick({
         infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left right"></i>',
        nextArrow:'<i class="fas fa-chevron-right left"></i>'
    
  });
//  partner slider
  $('.partner_main').slick({
    infinite: true,
   slidesToShow: 5,
   slidesToScroll: 1,
   arrows:true,
   prevArrow:'<i class="fas fa-chevron-left partner_right"></i>',
   nextArrow:'<i class="fas fa-chevron-right partner_left"></i>',
   centerMode:true,
   centerPadding:'0'

});
  // testimonial slider
  $('.testimonial_slider').slick({
    infinite: true,
   slidesToShow: 1,
   slidesToScroll:1,
   arrows:true,
   prevArrow:'<i class="fas fa-chevron-left left_test"></i>',
   nextArrow:'<i class="fas fa-chevron-right right_test"></i>'
  

});

//  venubox

$(document).ready(function(){
  $('.venobox').venobox(); 
});
// counter part start
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo1").innerHTML = days +"<br>"+ "Days";
  
  document.getElementById("demo2").innerHTML = hours +"<br>"+ "Hours";
  document.getElementById("demo3").innerHTML =  minutes +"<br>"+ "Mins";
  document.getElementById("demo4").innerHTML =seconds +"<br>"+ "Sec ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
},0);

// counter part 

$('.counter').counterUp();
//  mixit up
var mixer = mixitup('.mixin');

// backto top

$(".back2top_main").click(function(){
$("html, body").animate({
  scrollTop:0
}, 1000)
});
$(window).scroll(function(){
var scrolling = $(this).scrollTop();
if(scrolling >50){
  $(".back2top_main").fadeIn(800);
} else{
  $(".back2top_main").fadeOut(800);
}
});










});



// counting + -

$(".quantity").qController({

  qStart: 0,
  qMax: 100, 
  qMin: 0

});

