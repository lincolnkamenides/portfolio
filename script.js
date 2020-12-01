function myFunction(x) {
  x.classList.toggle("change");

  var y = document.getElementById("menu");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
