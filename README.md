# basicSwipe.js
just include swipeDown,swipeUp,swipeLeft,swipeRight by vanilla javascript

# usage example
```javascript
var cover = document.querySelector('.thecover');

addSwipeEvent(cover, "swipeUp", function(){
    cover.classList.remove("active");
});
```