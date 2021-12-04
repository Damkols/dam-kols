import styles from '../styles/Home.module.css';
import Link from "next/link"
import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import Work1 from '../components/Work/Work1';
import MobileLanding from '../components/MobileLanding/MobileLanding'


const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};


export default function Home() {

  const isBreakpoint = useMediaQuery(1000)
  return (
        <div className={styles.container}>
        {isBreakpoint 
          ? 
        (<div>
        <MobileLanding />
        </div>)
          :
        (<div>
        <Work1 />
        </div>)
        }
        </div>
  )
}
