gsap.registerPlugin(ScrollTrigger);

let allowScroll = true;
let scrollTimeout = gsap.delayedCall(1, () => allowScroll = true).pause();
let currentIndex = 0;
let swipePanels = gsap.utils.toArray(".swipe-section .scroll_vertical_panel");

// Set z-index levels for swipe panels
gsap.set(swipePanels, { zIndex: i => swipePanels.length - i });

// Create an observer and disable it to start
let intentObserver = ScrollTrigger.observe({
  type: "wheel,touch",
  onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
  onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
  tolerance: 10,
  preventDefault: true,
  onEnable(self) {
    allowScroll = false;
    scrollTimeout.restart(true);
    let savedScroll = self.scrollY();
    self._restoreScroll = () => self.scrollY(savedScroll);
    document.addEventListener("scroll", self._restoreScroll, { passive: false });
  },
  onDisable: self => document.removeEventListener("scroll", self._restoreScroll)
});
intentObserver.disable();

function gotoPanel(index, isScrollingDown) {
  if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
    intentObserver.disable();
    return;
  }
  allowScroll = false;
  scrollTimeout.restart(true);
  let target = isScrollingDown ? swipePanels[currentIndex] : swipePanels[index];
  gsap.to(target, { yPercent: isScrollingDown ? -100 : 0, duration: 1 });
  currentIndex = index;
}

ScrollTrigger.create({
  trigger: ".swipe-section",
  pin: true,
  start: "top top",
  end: "+=200",
  onEnter: (self) => {
    if (intentObserver.isEnabled) { return; }
    self.scroll(self.start + 1);
    intentObserver.enable();
  },
  onEnterBack: (self) => {
    if (intentObserver.isEnabled) { return; }
    self.scroll(self.end - 1);
    intentObserver.enable();
  }
});

// Animate the text spans with ScrollTrigger, enabling it to replay on scroll up/down
gsap.fromTo(".order .order__content span", 
  { opacity: 0, y: 30, color: "#000000" }, // Initial state
  { 
    opacity: 1, 
    y: 0,
    color: "#ffffff",
    duration: 1.5, 
    ease: "power2.out", 
    stagger: 1, // Delay between each span
    scrollTrigger: {
      trigger: ".order .order__content", 
      start: "top 80%", 
      toggleActions: "restart restart restart restart", // Restart animation on scroll up/down
      onLeave: () => gsap.set(".order .order__content span", { opacity: 0, y: 30, color: "#000000" }), // Reset on leaving the viewport
    }
  }
);