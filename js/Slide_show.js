var slideIndex = 0;

function showSlides() {
var i;
var images = document.getElementsByClassName(slides);
for (i = 0; images.length; i++) {
    images[i].style.display = none; 
   
}
slideIndex++;

if (slideIndex >images.length) {slideIndex = 1}
images[slideIndex-1].style.display = block;
setTimeout(showSlides, 5000); 
} 
showSlides();

function plusSlides(a){
    slideIndex+=a;
}
