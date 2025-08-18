const basicSwipe = (theDom, eventName, callback, options = {}) => {
	if (!theDom) {
		console.error('DOM element is null or undefined');
		return { on: () => {}, off: () => {} };
	}

	const { threshold = 30, preventDefault = true } = options;
	const isHorizontal = eventName === "swipeLeft" || eventName === "swipeRight";
	let eStart = 0;
	let attached = false;

	const getCoord = (e, isTouch) =>
		isHorizontal
			? (isTouch ? e.changedTouches[0].clientX : e.clientX)
			: (isTouch ? e.changedTouches[0].clientY : e.clientY);

	const handleStart = (e, isTouch) => {
		eStart = getCoord(e, isTouch);
	};

	const handleMove = e => {
		if (preventDefault) e.preventDefault();
	};

	const handleEnd = (e, isTouch) => {
		const eEnd = getCoord(e, isTouch);
		const moveVal = eEnd - eStart;
		const moveAbs = Math.abs(moveVal);

		const direction = isHorizontal
			? (moveVal > 0 ? "swipeRight" : "swipeLeft")
			: (moveVal > 0 ? "swipeDown" : "swipeUp");

		if (moveAbs > threshold && direction === eventName) {
			callback(direction);
		}
	};

	const listeners = {
		touchstart: e => handleStart(e, true),
		touchmove: handleMove,
		touchend: e => handleEnd(e, true),
		mousedown: e => handleStart(e, false),
		mousemove: handleMove,
		mouseup: e => handleEnd(e, false),
	};

	// 根据 preventDefault 设置 passive
	const opts = evt =>
		evt.startsWith("touch")
			? { passive: !preventDefault }
			: false;

	const attach = () => {
		if (attached) return;
		for (const [evt, fn] of Object.entries(listeners)) {
			theDom.addEventListener(evt, fn, opts(evt));
		}
		attached = true;
	};

	const detach = () => {
		if (!attached) return;
		for (const [evt, fn] of Object.entries(listeners)) {
			theDom.removeEventListener(evt, fn, opts(evt));
		}
		attached = false;
	};

	// 初次即绑定
	attach();

	return { on: attach, off: detach };
};

export default basicSwipe;