import { useState, useRef, useEffect } from 'react'
import basicSwipe from "basic-swipe";
import './App.css'

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

      <div className="maincon">
          <p>Lorem ipsum dolor sit amet, et ultrices sodales, volutpat tellus wisi, mauris et. Risus nulla lectus, pede amet. Arcu ut nulla, non nec aliquam, id dolor cras. Eu aenean, pellentesque enim suscipit, id justo maecenas. Elementum risus pellentesque, bibendum nullam, ante aenean. Vestibulum elementum nibh. Orci mollis elit, libero ornare, ut quis. Consectetuer nulla.</p>
      </div>
    </>
  )
}

export default App
