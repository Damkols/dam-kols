import React from 'react'
import MobileNav from '../Nav/MobileNav/MobileNav'
import SideNav from '../Nav/SideNav/SideNav'
import { useState, useCallback, useEffect } from 'react';
import styles from './Layout.module.css';


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



const Layout = ({children}) => {

  const isBreakpoint = useMediaQuery(1000)
    return (
            <div className={styles.layout}>
                  { isBreakpoint ? (
                    <div>
                      <MobileNav />
                    </div>
                      ) : (
                    <div className={styles.sideNav}>
                      <SideNav />
                    </div>
                    )
                }
                <div className={styles.children}>
                {children}
                </div>
            </div>
    )
}

export default Layout