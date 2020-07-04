/* tab */
function bigImg(x) {
  x.style.height = "50px";
  x.style.width = "200px";
    
}

function normalImg(x) {
  x.style.height = "50px";
  x.style.width = "auto";
}

/* slider */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
