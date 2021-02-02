// navigation menu toggle
function toggleSideBar() { // toggles the menu-button open and closed
  var list = document.getElementById("menu-button");
  list.classList.toggle("change");

  var menu = document.getElementById("menu");
  if (y.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// open image modal on about section
function openImage(x) { //opens image in about with modal
 // Get the modal
 var modal = document.getElementById('modal-row');

 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = x;
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

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
