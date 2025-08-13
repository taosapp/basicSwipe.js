# basicSwipe.js
simple swipe events library, just include swipeDown,swipeUp,swipeLeft,swipeRight, vanilla javascript, no dependencies.

[Demo](https://taosapp.github.io/basicSwipe.js/) page.

# how to use
## vanilla javascript
```javascript
import basicSwipe from "./basicSwipe.js";

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

basicSwipe(page1, "swipeUp", hidePage1);
basicSwipe(page2, "swipeUp", hidePage2);

basicSwipe(page2, "swipeDown", showPage1);
basicSwipe(page3, "swipeDown", showPage2);
```
## Vue
```javascript
import { ref, nextTick, onMounted } from 'vue';
import basicSwipe from "basic-swipe";

const page1 = ref(null);
const page2 = ref(null);
const page3 = ref(null);

const page1State = ref(true);
const page2State = ref(false);
const page3State = ref(false);

const hidePage1 = () => {
    page1State.value = false;
    page2State.value = true;
}
const hidePage2 = () => {
    page2State.value = false;
    page3State.value = true;
}

const showPage1 = () => {
    page1State.value = true;
    page2State.value = false;
}
const showPage2 = () => {
    page2State.value = true;
    page3State.value = false;
}

onMounted(async () => {
    nextTick(() => {
        basicSwipe(page1.value, "swipeUp", hidePage1);
        basicSwipe(page2.value, "swipeUp", hidePage2);

        basicSwipe(page2.value, "swipeDown", showePage1);
        basicSwipe(page3.value, "swipeDown", showePage2);
    });
});

<template>
    <div class="page p1" :class="{active: !page1State}" ref="page1"></div>
    <div class="page p2" :class="{active: !page2State}" ref="page2"></div>
    <div class="page p2" :class="{active: !page3State}" ref="page3"></div>
</template>
```

# html & css example

## html
```html
    <div class="page p1 active"></div>
    <div class="page p2"></div>
    <div class="page p3"></div>
```

## css

```css
.page {
    position: absolute; width: 100%; height: 100%; left: 0; top: 0;
    opacity: 0;
    transform: translateX(100%);
}
.page.active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 1s, transform 1s;
}
.p1 {z-index: 3;}
.p2 {z-index: 2;}
.p3 {z-index: 1;}
```