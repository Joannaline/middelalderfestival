
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.querySelectorAll(".mySlides");
    if(slides.length > 0)
    {
      var ny = document.querySelectorAll(".ny");
      for (var i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      for (var i = 0; i < ny.length; i++) {
          ny[i].className = ny[i].className.replace(" active", "");
      }

      slides[slideIndex-1].style.display = "block";
      ny[slideIndex-1].className += " active";
      setTimeout(showSlides, 8000);
    }
}


/*frivillig modal*/

/* Definering af modal*/
var modal = document.querySelector('#myModal');

/* definering af knappen der åbner modalen*/
var btn = document.querySelector("#myBtnone");

/* span elementer(krydset oppe i hjørnet)(html) der lukker modalen*/
var span = document.querySelector(".close");



span.addEventListener("click", function(event) {
  modal.style.display = "none";
});

/* funktionen der gør at når man trykker på knappen så åbner modalen*/
btn.onclick = function() {
    modal.style.display = "block";
}


/*aktør-model*/

/* Definering af modal*/
var modaln = document.querySelector('#myModaltwo');

/* definering af knappen der åbner modalen*/
var btnn = document.querySelector("#myBtntwo");

/* span elementer(krydset oppe i hjørnet)(html) der lukker modalen*/
var spann = document.querySelector(".close2");


spann.addEventListener("click", function(event) {
  modaln.style.display = "none";
});

/* funktionen der gør at når man trykker på knappen så åbner modalen*/
btnn.onclick = function() {
    modaln.style.display = "block";
}
