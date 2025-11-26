import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
// import variables from "@/styles/variables.module.scss";

// export const mobileWidth = parseInt(variables["width2XL"].replace("px", ""));
export const mobileWidth = 1536;

const useScroll = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const { width } = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos >= currentScrollPos;
      if (width < mobileWidth) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible, mobileWidth]);

  return {
    prevScrollPos,
    setPrevScrollPos,
    visible,
    setVisible,
  };
};

export default useScroll;
