import basicSwipe from "./basicSwipe.js";

var cover = document.querySelector('.thecover'),
    infopage = document.querySelector('.infopage'),
    infopage2 = document.querySelector('.infopage2');

basicSwipe(cover, "swipeUp", function(){
    cover.classList.remove("active");
    infopage.classList.add("active");
});

basicSwipe(infopage, "swipeUp", function(){
    infopage.classList.remove("active");
    infopage2.classList.add("active");
});

basicSwipe(infopage, "swipeDown", function(){
    cover.classList.add("active");
    infopage.classList.remove("active");
});

basicSwipe(infopage2, "swipeDown", function(){
    infopage.classList.add("active");
    infopage2.classList.remove("active");
});
