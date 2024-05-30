# basicSwipe.js
simple swipe events library, just include swipeDown,swipeUp,swipeLeft,swipeRight, vanilla javascript, no dependencies.

[Demo](https://taosapp.github.io/basicSwipe.js/) page.

# usage example

## html
```html
    <div class="page p1"></div>
    <div class="page p2"></div>
```

## css

```css
.page {
    position: absolute; width: 100%; height: 100%; left: 0; top: 0; z-index: 1;
    opacity: 0;
    visibility: hidden;
}
.p2 {z-index: 2;}
.page.active {
    opacity: 1;
    visibility: visible;
    transition: opacity 1s;
}
```

## js

```javascript
var p1 = document.querySelector('.p1');
var p2 = document.querySelector('.p2');

addSwipeEvent(p1, "swipeUp", function(){
    p2.classList.remove("active");
});
```