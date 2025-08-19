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