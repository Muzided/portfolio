import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Services from './components/Services';
import LocomotiveScroll from 'locomotive-scroll';
import './locomotive-scroll.css'
import { useLayoutEffect, useRef } from 'react';
import FeedBack from './components/FeedBack';
import Projects from './components/Projects';

function App() {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    if (containerRef.current) {
      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        direction: 'vertical',
        smartphone: {
          smooth: true,
          direction: 'vertical'
        }

        // Add your Locomotive Scroll options here
      });

      // Destroy Locomotive Scroll when the component unmounts
      return () => {
        scroll.destroy();
      };
    }
  }, []);


  return (
    <div data-scroll-container ref={containerRef} >
      <div data-scroll data-scroll-speed={-5}>
        <Intro /></div>
      <div data-scroll data-scroll-speed={0}  >
        <Services /></div>
        <div data-scroll data-scroll-speed={0}  >
        <Projects/></div>
        <div data-scroll data-scroll-speed={0}  >
        <FeedBack/></div>
    </div>

  );
}

export default App;
