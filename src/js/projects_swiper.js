const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndex = 0;
// let slideWidth = sliderItems[0].clientWidth;
const sliderItemStyle = window.getComputedStyle(sliderItems[0]);
const slideWidth = parseFloat(sliderItemStyle.width);

// Get screen width
const screenWidth = window.innerWidth;

// Adjust slideWidth based on screen size
if (screenWidth < 768) {
    slideWidth += 43;
} else if (screenWidth < 950) {
    slideWidth += 60;
} else if (screenWidth < 1200) {
    slideWidth += 70;
} else {
    slideWidth += 103;
}

if (screenWidth > 920){
    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('touchstart', dragStart);

    slider.addEventListener('mouseup', dragEnd);
    slider.addEventListener('touchend', dragEnd);
    slider.addEventListener('mouseleave', dragEnd);

    slider.addEventListener('mousemove', drag);
    slider.addEventListener('touchmove', drag);
}

function dragStart(e) {
    isDragging = true;
    startPos = getPositionX(e);
    slider.style.transition = 'none';

    // Cancel animation frame during drag
    // cancelAnimationFrame(animationID);

    sliderItems.forEach(item => item.classList.remove('skew-left', 'skew-right'));
}

function drag(e) {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    const movedBy = currentPosition - startPos;

    // Adjust translate based on dragging
    currentTranslate = prevTranslate + movedBy;
    slider.style.transform = `translateX(${currentTranslate}px)`;

    // Add skew effect based on the drag direction
    if (movedBy < 0) {
        sliderItems.forEach(item => item.classList.add('skew-left'));
    } else {
        sliderItems.forEach(item => item.classList.add('skew-right'));
    }
}

function dragEnd() {
    isDragging = false;
    // Snap to the nearest slide
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < sliderItems.length - 1) {
        currentIndex += 1;
    }

    if (movedBy > 100 && currentIndex > 0) {
        currentIndex -= 1;
    }

    setPositionByIndex();

    // Reset the skew once dragging ends
    sliderItems.forEach(item => item.classList.remove('skew-left', 'skew-right'));
}

function setPositionByIndex() {
    currentTranslate = currentIndex * -slideWidth;
    prevTranslate = currentTranslate;
    slider.style.transition = 'transform 0.3s ease-out';
    slider.style.transform = `translateX(${currentTranslate}px)`;
    console.log("slideWidth setPositionByIndex =====",slideWidth)
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}
