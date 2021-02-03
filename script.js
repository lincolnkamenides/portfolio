// navigation menu toggle
function toggleSideBar() { // toggles the menu-button open and closed
  var list = document.getElementById("menu-button");
  list.classList.toggle("change");

  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// open image modal on about section
function openImage(image, item) { //opens image in about with modal
 var modals = ['world', 'coding', 'bts', 'music', 'books'];

 // Get the modal
 var modal = document.getElementById(item);

 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = image;
 img.onclick = function(){
   modal.style.display = "block";

   // closes other modals
   for(var i = 0; i < modals.length; i++) {
    if(modals[i].localeCompare(item) != 0) {
     document.getElementById(modals[i]).style.display = "none";
    }
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
 var img = img;
 img.onclick = function(){
   modal.style.display = "block";
 }

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
  slideCaptionText.innerHTML = dots[slideIndex-1].alt;
}
