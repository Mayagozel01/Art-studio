// gsap.registerPlugin(ScrollTrigger);

// let allowScroll = true;
// let scrollTimeout = gsap.delayedCall(1, () => allowScroll = true).pause();
// let currentIndex = 0;
// let swipePanels = gsap.utils.toArray(".swipe-section .scroll_vertical_panel");

// // Set z-index levels for swipe panels
// gsap.set(swipePanels, { zIndex: i => swipePanels.length - i });

// console.log("Scrollllennnn: ", swipePanels.length);

// // Create an observer and disable it to start
// let intentObserver = ScrollTrigger.observe({
//   type: "wheel,touch",
//   onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
//   onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
//   tolerance: 10,
//   preventDefault: true,
//   onEnable(self) {
//     allowScroll = false;
//     scrollTimeout.restart(true);
//     let savedScroll = self.scrollY();
//     self._restoreScroll = () => self.scrollY(savedScroll);
//     document.addEventListener("scroll", self._restoreScroll, { passive: false });
//   },
//   onDisable: self => document.removeEventListener("scroll", self._restoreScroll)
// });
// // intentObserver.disable();

// function gotoPanel(index, isScrollingDown) {
//   if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
//     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
//     // intentObserver.disable();
//     return;
//   }
//   allowScroll = false;
//   scrollTimeout.restart(true);
//   let target = isScrollingDown ? swipePanels[currentIndex] : swipePanels[index];
//   gsap.to(target, { yPercent: isScrollingDown ? -100 : 0, duration: 1 });
//   currentIndex = index;
// }


// swipePanels.forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top",
//     pin: true,
//     pinSpacing: false, // Prevent extra space at the end
//     onEnter: (self) => {
//       if (intentObserver.isEnabled) { return; }
//       self.scroll(self.start + 1);
//       intentObserver.enable();
//     },
//     onEnterBack: (self) => {
//       if (intentObserver.isEnabled) { return; }
//       self.scroll(self.end - 1);
//       intentObserver.enable();
//     }
//   });
// });