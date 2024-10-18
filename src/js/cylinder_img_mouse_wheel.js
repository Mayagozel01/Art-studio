const cylinder_gallery = document.querySelector('.cylinder_gallery');
const cylinder_images = document.querySelector('.cylinder_images');

let mouseX = 0;
let mouseY = 0;
let rotationX = 0;
let rotationY = 0;

cylinder_gallery.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
    
    rotationY = mouseX * 360;
    rotationX = -mouseY * 180;
    
    cylinder_images.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});
