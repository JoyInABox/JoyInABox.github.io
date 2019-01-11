// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var nav = document.getElementById("menu");

// Get the offset position of the navbar
var sticky_top = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky_top) {
    nav.classList.add("sticky-top")
  } else {
    nav.classList.remove("sticky-top");
  }
}