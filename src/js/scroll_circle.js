// console.clear();
document.addEventListener("DOMContentLoaded", function (event) {
  const timeline = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
    //   trigger: ".wrap",
      pin: true,
      start: "top",
      end: "bottom",
      scrub: 1,
      markers: false,
    },
  });
const circles = gsap.utils.toArray('section.circle');
console.log("circlesss----------------", circles)
circles.forEach(circle => {      
      timeline.from(circle, {
        clipPath: "circle(0% at 50% 50%)",
        stagger: 1,
      });
  })
    });