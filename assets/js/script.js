var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.querySelectorAll(".mySlides");
    if(slides.length > 0)
    {
      var dots = document.querySelectorAll(".dot");
      for (var i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      for (var i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex-1].style.display = "block";
      console.log(dots)
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 8000);
    }
}





/*frivillig modal*/

/* Definering af modal*/
var modal = document.querySelector('#myModal');

/* definering af knappen der åbner modalen*/
var btn = document.querySelector("#myBtnone");

/* span elementer(krydset oppe i hjørnet)(html) der lukker modalen*/
var span = document.querySelectorAll(".close");

if(span !== null)
{
  for(var span i = 0; i< span.length; i++){
    span[i].addEventListener('click', function(event)
    { var closeModal = document.querySelectorAll(".modal")

      for(var modal i = 0; i< modal.length; i++){
        modal[i].addEventListener('click', function(closeModal){
          modal.style.display = "none";

        })
      }

    });
  }
  /* når man trykker på X (span element), så lukker modalen*/
  // span.onclick = function() {
  //     modal.style.display = "none";
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
var modaltwo = document.querySelector('#myModaltwo');

/* definering af knappen der åbner modalen*/
var btntwo = document.querySelector("#myBtntwo");

/* span elementer(krydset oppe i hjørnet)(html) der lukker modalen*/
var spantwo = document.querySelector(".close");

if(spantwo !== null)
{
  /* når man trykker på X (span element), så lukker modalen*/
  spantwo.onclick = function() {
      modaln.style.display = "none";
  }
}

/* funktionen der gør at når man trykker på knappen så åbner modalen*/
btntwo.onclick = function() {
    modaltwo.style.display = "block";
}

/* når man trykker uden for modalen så lukker modalen ned*/
window.onclick = function(event) {
    if (event.target == modal) {
        modaltwo.style.display = "none";
    }
}
