//nav dropdown slide
var slideIndexd = 1;
showSlidesd(slideIndexd);


function currentSlided(n) {
  showSlidesd(slideIndexd = n);
}

function showSlidesd(n) {
  var d;
  var slidesd = document.getElementsByClassName("dropdown-slide");
  var dots = document.getElementsByClassName("dropdown-text");
  if (n > slidesd.length) {slideIndexd = 1}    
  if (n < 1) {slideIndexd = slidesd.length}
  for (d = 0; d < slidesd.length; d++) {
      slidesd[d].style.display = "none";  
  }
  for (d = 0; d < dots.length; d++) {
      dots[d].className = dots[d].className.replace(" drop-active", "");
  }
  slidesd[slideIndexd-1].style.display = " block";  
  dots[slideIndexd-1].className += " drop-active";
}



//intro slide show
var slideIndex=0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName('op-slider');
    for (let i = 0; i < slides.length; i++) {
       slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides, 8000);
}


///
//main product slider
var slideIndex1 = 1;
showSlides1(slideIndex1);


function currentSlide(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var l;
  var slides1 = document.getElementsByClassName("main-slider");
  var dots = document.getElementsByClassName("content-title");
  if (n > slides1.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides1.length}
  for (l = 0; l < slides1.length; l++) {
      slides1[l].style.display = "none";  
  }
  for (l = 0; l < dots.length; l++) {
      dots[l].className = dots[l].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = " block";  
  dots[slideIndex1-1].className += " active";
}


//gellary product slider
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides1(n) {
  showSlides2(slideIndex2 += n);
}
function currentSlide1(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var g;
  var slides2 = document.getElementsByClassName("g-filter-slider");
  var dots = document.getElementsByClassName("gellary-filter");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (g = 0; g < slides2.length; g++) {
      slides2[g].style.display = "none";  
  }
  for (g = 0; g < dots.length; g++) {
      dots[g].className = dots[g].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = " block";  
  dots[slideIndex2-1].className += " active";
}

//product modal
var proModal = document.getElementById('pro-modal');
var proBtn = document.getElementsByClassName('pro-modal-btn');
for (let i = 0, l = proBtn.length; i < l; i++) {
  proBtn[i].addEventListener('click', function () {
    //proBtn[i].classList.toggle('product-modal');
    proModal.style.display="block";
  document.body.style.overflowY="hidden";
  })
}
var proClose = document.getElementsByClassName('pro-close')[0];



proClose.onclick = function () {
  proModal.style.display="none";
  document.body.style.overflowY="auto";
}


//about modal
var aboutModal = document.getElementById('about-modal');
var aboutBtn = document.getElementsByClassName('about-modal-btn');
for (let i = 0, l = aboutBtn.length; i < l; i++) {
  aboutBtn[i].addEventListener('click', function () {
    //proBtn[i].classList.toggle('product-modal');
    aboutModal.style.display="block";
  document.body.style.overflowY="hidden";
  })
}
var aboutClose = document.getElementsByClassName('about-close')[0];



aboutClose.onclick = function () {
  aboutModal.style.display="none";
  document.body.style.overflowY="auto";
}

