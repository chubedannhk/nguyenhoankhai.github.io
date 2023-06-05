// $(document).ready(function(){
//     $('#toggle-icon').click(function(){
//         // alert("success")
//         $('nav').slideToggle();
//     })
// })


// slide images 
var slideIndex = 0;
var slides = document.getElementsByName("slides");

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].checked = true;
  setTimeout(showNextSlide, 10000);
}

setTimeout(showNextSlide, 10000);
// end slide images 