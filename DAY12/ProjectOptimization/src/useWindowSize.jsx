import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;






import { useEffect, useState } from "react";

const useScreenType = () => {
  const getScreenType = () => {
    const width = window.innerWidth;

    if (width < 768) {
      return "Mobile";
    } else if (width < 1024) {
      return "Tablet";
    } else {
      return "Desktop";
    }
  };

  const [screenType, setScreenType] = useState(getScreenType());

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};

export default useScreenType;