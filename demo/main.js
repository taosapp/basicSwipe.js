import basicSwipe from "../basicSwipe.js";

const page1 = document.querySelector('.p1'),
    page2 = document.querySelector('.p2'),
    page3 = document.querySelector('.p3');

const hidePage1 = () => {
    page1.classList.remove("active");
    page2.classList.add("active");
}
const hidePage2 = () => {
    page2.classList.remove("active");
    page3.classList.add("active");
}

const showPage1 = () => {
    page1.classList.add("active");
    page2.classList.remove("active");
}
const showPage2 = () => {
    page2.classList.add("active");
    page3.classList.remove("active");
}

const SwipeUp1 = basicSwipe(page1, "swipeUp", hidePage1);
const SwipeUp2 = basicSwipe(page2, "swipeUp", hidePage2);

const SwipeDown1 = basicSwipe(page2, "swipeDown", showPage1);
const SwipeDown2 = basicSwipe(page3, "swipeDown", showPage2);

// bind
// SwipeUp1.on();
// SwipeUp2.on();
// SwipeDown1.on();
// SwipeDown2.on();

// unbind
// SwipeUp1.off();

// bind again
// SwipeUp1.on();