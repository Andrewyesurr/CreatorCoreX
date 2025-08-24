import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for route to fully render
    setTimeout(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth', // or 'instant' if needed
      });
    }, 10); // tiny delay ensures new route has mounted
  }, [pathname]);

  return null;
};

export default ScrollToTop;
