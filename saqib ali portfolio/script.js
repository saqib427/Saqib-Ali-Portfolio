// Typing Effect
const text = "Frontend Developer & Freelancer";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
    .scrollIntoView({behavior:'smooth'});
  });
});

// Scroll Reveal
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll',()=>{
  sections.forEach(section=>{
    const top = section.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      section.style.opacity="1";
      section.style.transform="translateY(0)";
    }
  });
});

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress-bar');
function showProgress(){
  progressBars.forEach(bar=>{
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      bar.style.width = bar.getAttribute('data-width');
    }
  });
}
window.addEventListener('scroll',showProgress);