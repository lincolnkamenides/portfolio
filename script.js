function toggleSideBar() { // toggles the menu-button open and closed
  var list = document.getElementById("menu-button");
  list.classList.toggle("change");

  var y = document.getElementById("menu");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

function openImage(x) { //opens image in about with modal
 // Get the modal
 var modal = document.getElementById('modal');

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