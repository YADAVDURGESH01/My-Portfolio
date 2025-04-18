

// mix it up portfolio sction
var mixer = mixitup('.portfolio-gallery');



// active menu ////////////////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

// sticky menu//////////////////////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

// toggle icon navbar///////////////////////////////////
var  menuIcon = document.querySelector("#menu-icon");
var  navlist = document.querySelector(".navlist");

/*menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("navlist")

	
}*/
 // my code 
  
 var a = document.querySelector("header");
 menuIcon.addEventListener("click", function(){
	 
	 a.style.backgroundColor = "red"
 })
 
 
 
 
 
 
 
 
 
 


window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open")
}

// paral Lax//////////////////////////////////

const abserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});


// footer////////////////////
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function backToTop() {
  window.scrollTo(0, 0);
}

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};
