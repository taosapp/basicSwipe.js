# basicSwipe.js
simple swipe events library, just include swipeDown,swipeUp,swipeLeft,swipeRight, vanilla javascript, no dependencies.

[Demo](https://taosapp.github.io/basicSwipe.js/) page.

# how to use

```javascript
import basicSwipe from "basic-swipe";

var prevPage = document.querySelector('.p1');
var nextPage = document.querySelector('.p2');

// add swipe event to dom, basicSwipe(theDom, swipeName, handle)
basicSwipe(prevPage, "swipeUp, function(){
    prevPage.classList.remove("active");
    nextPage.classList.add("active");
});

basicSwipe(nextPage, "swipeDown, function(){
    prevPage.classList.add("active");
    nextPage.classList.remove("active");
});
```

# html & css example

## html
```html
    <div class="page p1 active"></div>
    <div class="page p2"></div>
```

## css

```css
.page {
    position: absolute; width: 100%; height: 100%; left: 0; top: 0; z-index: 1;
    opacity: 0;
    visibility: hidden;
}
.page.active {
    z-index: 10;
    opacity: 1;
    visibility: visible;
    transition: opacity 1s;
}
```