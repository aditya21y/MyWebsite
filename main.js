let spinnerwrapper = document.querySelector('.loader-wrapper');
window.addEventListener('load',function(){
    spinnerwrapper.style.display = 'none';
});

const menubtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-link')
menubtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})

const home = document.querySelector('.home')
const project = document.querySelector('.project')
navlinks.addEventListener('click',()=>{
    home.toggle('mobile-menu1')
})
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

