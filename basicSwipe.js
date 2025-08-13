const basicSwipe = (theDom, eventName, handleEvent) => {
    if (!theDom) {
        console.error('DOM element is null or undefined');
        return;
    }
    // Initialize start and end positions
    let eStart = 0;
    
    // Check if it's a horizontal swipe (swipeLeft or swipeRight)
    const isHorizontalSwipe = eventName === "swipeLeft" || eventName === "swipeRight";
    
    // Handle touch/click start event
    const handleStart = function(e, isTouchEvent) {
        // Get coordinates based on swipe direction and event type
        if (isHorizontalSwipe) {
            eStart = isTouchEvent ? e.targetTouches[0].clientX : e.clientX;
        } else {
            // Default to vertical for vertical swipes or invalid directions
            eStart = isTouchEvent ? e.targetTouches[0].clientY : e.clientY;
        }
    };
    
    // Handle move event
    const handleMove = function(e) {
        e.preventDefault();
    };
    
    // Handle touch/click end event
    const handleEnd = function(e, isTouchEvent) {
        // Get end position
        let eEnd;
        if (isHorizontalSwipe) {
            eEnd = isTouchEvent ? e.changedTouches[0].clientX : e.clientX;
        } else {
            // Default to vertical for vertical swipes or invalid directions
            eEnd = isTouchEvent ? e.changedTouches[0].clientY : e.clientY;
        }
        
        // Calculate movement distance and direction
        const moveVal = eEnd - eStart;
        const moveAbsVal = Math.abs(moveVal);
        
        // Determine swipe direction
        let direction;
        if (isHorizontalSwipe) {
            direction = moveVal > 0 ? "swipeRight" : "swipeLeft";
        } else {
            // Default to vertical for vertical swipes or invalid directions
            direction = moveVal > 0 ? "swipeDown" : "swipeUp";
        }
        
        // If movement is significant enough and direction matches, trigger callback
        if (moveAbsVal > 30 && direction === eventName) {
            handleEvent();
        }
    };
    
    // addEventListener
    theDom.addEventListener('touchstart', e => handleStart(e, true), false);
    theDom.addEventListener('touchmove', handleMove, false);
    theDom.addEventListener('touchend', e => handleEnd(e, true), false);
    
    // addEventListener
    theDom.addEventListener('mousedown', e => handleStart(e, false), false);
    theDom.addEventListener('mousemove', handleMove, false);
    theDom.addEventListener('mouseup', e => handleEnd(e, false), false);
}

export default basicSwipe;