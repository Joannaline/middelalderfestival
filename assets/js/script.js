var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 10000);
}

//frivillig modal

/* Definering af modal*/
var modal = document.getElementById('myModal');

/* definering af knappen der åbner modalen*/
var btn = document.getElementById("myBtnone");

/* span elementer(krydset oppe i hjørnet)(html) der lukker modalen*/
var span = document.getElementsByClassName("close")[0];

/* funktionen der gør at når man trykker på knappen så åbner modalen*/
btn.onclick = function() {
    modal.style.display = "block";
}

/* når man trykker på X (span element), så lukker modalen*/
span.onclick = function() {
    modal.style.display = "none";
}

/* når man trykker uden for modalen så lukker modalen ned*/
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
