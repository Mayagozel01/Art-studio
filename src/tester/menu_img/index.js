const gallery = document.querySelector('.gallery');
const images = document.querySelector('.images');

let mouseX = 0;
let mouseY = 0;
let rotationX = 0;
let rotationY = 0;

gallery.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
    
    rotationY = mouseX * 360;
    rotationX = -mouseY * 180;
    
    images.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});
