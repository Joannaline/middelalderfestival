var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.querySelectorAll(".mySlides");
    if(slides.length > 0)
    {
      var dots = document.querySelectorAll("dot");
      for (var i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      for (var i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 1000);
    }
}


<<<<<<< HEAD


//frivillig modal
=======
/*frivillig modal*/
>>>>>>> 77839c6f83d336698bc6fbfcbdbe0dde47856690

/* Definering af modal*/
var modal = document.querySelector('#myModal');

/* definering af knappen der åbner modalen*/
var btn = document.querySelector("#myBtnone");

/* span elementer(krydset oppe i hjørnet)(html) der lukker modalen*/
var span = document.querySelector(".close");

if(span !== null)
{
  /* når man trykker på X (span element), så lukker modalen*/
  span.onclick = function() {
      modal.style.display = "none";
  }
}

/* funktionen der gør at når man trykker på knappen så åbner modalen*/
btn.onclick = function() {
    modal.style.display = "block";
}


/* når man trykker uden for modalen så lukker modalen ned*/
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*aktør-model*/

/* Definering af modal*/
var modaln = document.querySelector('#myModaltwo');

/* definering af knappen der åbner modalen*/
var btnn = document.querySelector("#myBtntwo");

/* span elementer(krydset oppe i hjørnet)(html) der lukker modalen*/
var spann = document.querySelector(".close");

if(spann !== null)
{
  /* når man trykker på X (span element), så lukker modalen*/
  spann.onclick = function() {
      modaln.style.display = "none";
  }
}

/* funktionen der gør at når man trykker på knappen så åbner modalen*/
btnn.onclick = function() {
    modaln.style.display = "block";
}

/* når man trykker uden for modalen så lukker modalen ned*/
window.onclick = function(event) {
    if (event.target == modal) {
        modaln.style.display = "none";
    }
}
