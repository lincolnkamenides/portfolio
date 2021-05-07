// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  });

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.fade-in'); 

function loop() {

  Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } 
    else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// navigation menu toggle
function toggleSideBar() { // toggles the menu-button open and closed
  var list = document.getElementById("menu-button");
  list.classList.toggle("change");

  var list = document.getElementById("menu");
  list.classList.toggle("not--active");
}

// open image modal on about section
function openImage(image, item) { //opens image in about with modal
 var modals = ['world', 'coding', 'cat', 'music', 'books'];

 // gets click-me content
 var clickMe1 = document.getElementById("arrow-gif");
 var clickMe2 = document.getElementById("arrow-gif-text");

 // Get the modal
 var modal = document.getElementById(item);

 // Get the image and insert it inside the modal - use its "alt" text as a caption
   modal.style.display = "block";

   // closes click me after first click
   clickMe1.style.display = "none";
   clickMe2.style.display = "none";

   // closes other modals
   for(var i = 0; i < modals.length; i++) {
    if(modals[i].localeCompare(item) != 0) {
     document.getElementById(modals[i]).style.display = "none";
    }
  
 }

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close " + item)[0];

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
   modal.style.display = "none";
 }
}

//opens slideshow in works section
var slideIndex = 1;

function openSlideShow(img, modal, name) { //opens image in about with modal
// Get the modal
 var modal = document.getElementById(modal);

 getSlides(name);

 // Get the image and insert it inside the modal - use its "alt" text as a caption
   modal.style.display = "block";
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close " + name)[0];

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
   modal.style.display = "none";
 }
}

function getSlides(name) {
  slideIndex = 1;
  showSlides(slideIndex, name);
}

function plusSlides(n, name) {
  showSlides(slideIndex += n, name);
}

function currentSlide(n, name) {
  showSlides(slideIndex = n, name);
}

function showSlides(n, name) {
  var i;
  var slides = document.getElementsByClassName("mySlides " + name);
  var dots = document.getElementsByClassName("thumbnail " + name);
  var slideCaptionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  //slideCaptionText.innerHTML = dots[slideIndex-1].alt;
}
