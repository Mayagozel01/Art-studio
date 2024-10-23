let slider = document.querySelector('.slider');
let sliderItems = slider.querySelectorAll('.slider-item');
// const numberOfSliders = slider.querySelectorAll('p.number_of_sliders');
// const projects_titles = slider.querySelectorAll('p.project__body-item-title');
const initialItems = sliderItems.length-1;

function createChild(position = 'end'){
    if(position === 'end'){
        for(i=0; i<initialItems; i++) {
            // setTimeout(() => {
                // let child = slider.querySelector(`div:nth-child(${i})`)
                let child = sliderItems[i]
                let newChild = child.cloneNode(true);
                slider.appendChild(newChild);
            // }, 300)
        }
    }
    else if(position === 'start') {
        for(i=initialItems; i>0; i--) {
            // setTimeout(() => {
                // let child = slider.querySelector(`div:nth-child(${i})`)
                let child = sliderItems[i]
                let newChild = child.cloneNode(true);
                slider.insertBefore(newChild, child);
            // }, 300)
        }
    }
    sliderItems = slider.querySelectorAll('.slider-item');
    console.log("initialItems length ",initialItems.length)
    console.log("sliderItems length in create Child ",sliderItems.length)
    return initialItems
}

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndex = sliderItems.length/2;
let currentIndex2 = sliderItems.length/2
// let slideWidth = sliderItems[0].clientWidth;
const sliderItemStyle = window.getComputedStyle(sliderItems[0]);
let slideWidth = parseFloat(sliderItemStyle.width);


const screenWidth = window.innerWidth;

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
    cancelAnimationFrame(animationID);

    let project_title = sliderItems[currentIndex2].querySelector(".project__body-item-title");
    let project_number = sliderItems[currentIndex2-1].querySelector(".project__body-slide-number");
    project_title.classList.remove('active_project_info');
    project_number.classList.remove('active_project_info');
    // let project_infos = sliderItems[currentIndex2].querySelectorAll("p");
    // project_infos.forEach(item => item.classList.remove('active_project_info'));
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
    sliderItems = slider.querySelectorAll('.slider-item');
    isDragging = false;
    // Snap to the nearest slide
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100) {
        // if(currentIndex2 < sliderItems.length - 1) currentIndex2 += 1;
        currentIndex2 += 1;
    }

    if (movedBy > 100) {
        // if(currentIndex2 > 0) currentIndex2 -= 1;
        currentIndex2 -= 1;
    }

    setPositionByIndex();

    if(currentIndex2 == sliderItems.length -2) createChild("end")
    else if(currentIndex2 == 1) {
        currentIndex2 += createChild("start")
    }

    // Reset the skew once dragging ends
    sliderItems.forEach(item => item.classList.remove('skew-left', 'skew-right'));

    let project_title = sliderItems[currentIndex2].querySelector(".project__body-item-title");
    let project_number = sliderItems[currentIndex2-1].querySelector(".project__body-slide-number");
    project_title.classList.add('active_project_info');
    project_number.classList.add('active_project_info');
    // let project_infos = sliderItems[currentIndex2].querySelectorAll("p")
    // project_infos.forEach(item => item.classList.add('active_project_info'));
}

function setPositionByIndex() {
    // setTimeout(() => {
    //     let child = slider.querySelector(`div:nth-child(${currentIndex})`)
    //     let cloneNode = child.cloneNode(true);
    //     // slider.style.width = `${(5 + currentIndex) * 100}px`;
    //     slider.appendChild(cloneNode);
    // }, 300);
    currentTranslate = currentIndex2 * -slideWidth;
    prevTranslate = currentTranslate;
    slider.style.transition = 'transform 1s ease-in-out';
    slider.style.transform = `translateX(${currentTranslate}px)`;


    // let currentLeftPosition = slider.style.left ? parseFloat(slider.style.left.replace('px', '')) : 0;
    // let nextLeftPosition = currentLeftPosition - 100;
    // slider.style.left = `${nextLeftPosition}px`;


    console.log("currentIndex =====",currentIndex);
    console.log("currentIndex2 =====",currentIndex2);
    console.log("sliderItems lenth =====", sliderItems.length);
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}
