// console.clear();
// document.addEventListener("DOMContentLoaded", function (event) {
//   const timeline = gsap.timeline({
//     defaults: {
//       ease: "none",
//     },
//     scrollTrigger: {
//     //   trigger: ".wrap",
//       pin: true,
//       start: "top",
//       end: "bottom",
//       scrub: 1,
//       markers: false,
//     },
//   });
// const circles = gsap.utils.toArray('section.scroll_vertical_panel');
// console.log("circlesss----------------", circles)
// circles.forEach(circle => {      
//       timeline.from(circle, {
//         clipPath: "circle(0% at 50% 50%)",
//         stagger: 1,
//       });
//   })
//     });
function testtest(){
scrollerOffset = document.querySelector(".scroll_vertical_panel").offsetHeight;
scrollerOffsetTop = scrollerOffset - window.innerHeight;
console.log(scrollerOffset)
document.addEventListener('scroll', ()=>{
	scrollPosition = window.scrollY/100;
	count = (scrollPosition / scrollerOffsetTop)*100;
	unit = count*100;
	unit = unit *(-1);
	// console.log(unit);
	order = document.getElementById('order')
	order.style.clipPath = 'circle('+unit+'%)';
	
})

gsap.registerPlugin(ScrollTrigger);


let tween = gsap.fromTo(".architecture__title-arch",
{ autoAlpha: 0,  yPercent: 50, color:'rgba(0,0,0,0.0)' }, 
{  yPercent: 0,autoAlpha: 1,   color:'#fff', duration: 1 ,
stagger:{
    mount:0.5
}}
)

ScrollTrigger.create({
        trigger:".architecture",
        toggleActions:"restart none none none",
    animation:tween})
}