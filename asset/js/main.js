// slider
let sliderBtnMore = document.querySelector(".slider-left-btn");
let sliderBtnContent = document.querySelector(".slider-left-btn a");
const sliderAbout = document.querySelector(".slider-left-about");
sliderBtnMore.onclick = ()=>{
    if(sliderBtnContent.textContent == "Discover More"){
        sliderAbout.textContent = "Morbi ullamcorper consectetur nisl at mattis. Sed vestibulum accumsan urna vitae egestas. Fusce et diam at nisi eleifend I ipsum free efficitur.facere est velit perferendis, animi magni quidem soluta exercitationem! Quaerat mollitia.Lorem ipsum dolor sit amet "
        sliderAbout.style.height = 120 + "px"
        sliderBtnContent.textContent = "Make Short";
    } else {
        sliderAbout.textContent = "  Morbi ullamcorper consectetur nisl at mattis. Sed vestibulum accumsan urna vitae egestas. Fusce et diam at nisi eleifend I ipsum free efficitur. "
        sliderAbout.style.height = 80 + "px"
        sliderBtnContent.textContent = "Discover More"
    }
}
// services
let servicesBtnMore = document.querySelectorAll(".content-services-more");
let servicesBtnValue = document.querySelectorAll(".content-services-more span")
let servicesBody = document.querySelectorAll(".content-services-body");
let servicesContentBody = document.querySelectorAll(".content-services-about p");
for(let i = 0; i < servicesBtnMore.length; i++){
    servicesBtnMore[i].addEventListener("click",function(){
        if(servicesBtnValue[i].textContent == "READ MORE"){
            servicesBody[i].style.height = 400 + "px"
            servicesBtnValue[i].textContent = "CLEANUP"
            servicesContentBody[i].textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam esse deserunt nam aliquam dignissimos facere est velit perferendis, animi magni quidem soluta exercitationem! Quaerat mollitia."
        } else {
            servicesBody[i].style.height = 300 + "px"
            servicesBtnValue[i].textContent = "READ MORE"
            servicesContentBody[i].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.";
        }
    })
}

// reallife
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
}

// quote

function show() {
  var p = document.getElementById('pwd');
  p.setAttribute('type', 'text');
}

function hide() {
  var p = document.getElementById('pwd');
  p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () { 
  if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

// submit email

const btnEmail = document.querySelector(".btnEmail");
const inputEmail = document.querySelector("#inputEmail");
btnEmail.onclick = function(){
    if(inputEmail.value == ""){
      alert("Please type again")
    } else {
      alert("submit successfull")
    }
}


// Contact Pages
  // submit message

 
function handleSubmitContact(){
  if(document.querySelector(".contact-page-name").value == "" || document.querySelector(".contact-page-email").value == "" || document.querySelector(".contact-page-message").value == ""){
      alert("Let's write full information")
    } else {
      alert("submit successful")
    }
}


// News page

