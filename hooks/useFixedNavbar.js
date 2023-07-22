import { useState, useEffect } from "react";

const useFixedNavbar = (height) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsFixed(window.pageYOffset > height);
    }

    // Only attach the event listener on the client-side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [height]);

  return isFixed;
};

export default useFixedNavbar;
