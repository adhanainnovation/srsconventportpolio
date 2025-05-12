import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // ✅ Get current route

  useEffect(() => {
    window.scrollTo(0, 0); // ✅ Scroll to top whenever route changes
  }, [pathname]);

  return null;
}

export default ScrollToTop;
