# basicSwipe.js
simple swipe events library, just include swipeDown,swipeUp,swipeLeft,swipeRight, vanilla javascript, no dependencies.

 - [Demo - vanilla javascript](https://taosapp.github.io/basicSwipe.js/demo/)
 - [Demo - react](https://taosapp.github.io/basicSwipe.js/demo-react/dist/)
 - [Demo - vue](https://taosapp.github.io/basicSwipe.js/demo-vue/dist/)

# how to use

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

const SwipeUp1 = basicSwipe(page1, "swipeUp", hidePage1);
const SwipeUp2 = basicSwipe(page2, "swipeUp", hidePage2);

const SwipeDown1 = basicSwipe(page2, "swipeDown", showPage1);
const SwipeDown2 = basicSwipe(page3, "swipeDown", showPage2);

// Call to bind by default, the on method can be rebound after using off
// SwipeUp1.on();
// SwipeUp2.on();
// SwipeDown1.on();
// SwipeDown2.on();

// unbind
// SwipeUp1.off();

// bind again
// SwipeUp1.on();
```

## react demo
```jsx
import { useState, useRef, useEffect } from 'react'
import basicSwipe from "basic-swipe";

function App() {
  const [page1Active, setPage1Active] = useState(true)
  const [page2Active, setPage2Active] = useState(false)
  const [page3Active, setPage3Active] = useState(false)

  const page1 = useRef(null)
  const page2 = useRef(null)
  const page3 = useRef(null)

  const hidePage1 = () => {
    setPage1Active(false)
    setPage2Active(true)
  }
  const hidePage2 = () => {
    setPage2Active(false)
    setPage3Active(true)
  }

  const showPage1 = () => {
    setPage2Active(false)
    setPage1Active(true)
  }
  const showPage2 = () => {
    setPage3Active(false)
    setPage2Active(true)
  }

  useEffect(() => {

    const SwpieUp1 = basicSwipe(page1.current, "swipeUp", hidePage1)
    const SwpieUp2 = basicSwipe(page2.current, "swipeUp", hidePage2)

    const swipeDown1 = basicSwipe(page2.current, "swipeDown", showPage1)
    const swipeDown2 = basicSwipe(page3.current, "swipeDown", showPage2)

    // Unbind events when component unmounts
    return () => {
      SwpieUp1.off()
      SwpieUp2.off()
      swipeDown1.off()
      swipeDown2.off()
    }
  }, [])


  return (
    <>
      <div className="swipe-container">
          <div className={`page p1 ${page1Active ? 'active' : ''}`} ref={page1}>1</div>
          <div className={`page p2 ${page2Active ? 'active' : ''}`} ref={page2}>2</div>
          <div className={`page p3 ${page3Active ? 'active' : ''}`} ref={page3}>3</div>
      </div>
    </>
  )
}

export default App

```

## vue demo
```javascript
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
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

let swipeUp1 = null;
let swipeUp2 = null;
let swipeDown1 = null;
let swipeDown2 = null;

onMounted(async () => {
    swipeUp1 = basicSwipe(page1.value, "swipeUp", hidePage1);
    swipeUp2 = basicSwipe(page2.value, "swipeUp", hidePage2);

    swipeDown1 = basicSwipe(page2.value, "swipeDown", showPage1);
    swipeDown2 = basicSwipe(page3.value, "swipeDown", showPage2);
});

onBeforeUnmount(() => {
    swipeUp1.off();
    swipeUp2.off();
    swipeDown1.off();
    swipeDown2.off();
});
</script>

<template>

    <div class="swipe-container">
        <div class="page p1" :class="{active: page1State}" ref="page1">1</div>
        <div class="page p2" :class="{active: page2State}" ref="page2">2</div>
        <div class="page p2" :class="{active: page3State}" ref="page3">3</div>
    </div>

    <div class="maincon">
        <p>Lorem ipsum dolor sit amet, et ultrices sodales, volutpat tellus wisi, mauris et. Risus nulla lectus, pede amet. Arcu ut nulla, non nec aliquam, id dolor cras. Eu aenean, pellentesque enim suscipit, id justo maecenas. Elementum risus pellentesque, bibendum nullam, ante aenean. Vestibulum elementum nibh. Orci mollis elit, libero ornare, ut quis. Consectetuer nulla.</p>
    </div>

</template>
```