import useWindowSize from "./useWindowSize";
import { useMemo } from "react";

export default function useWindowDevice() {
  const { width } = useWindowSize();

  const isDesktop = useMemo(() => {
    return width > 1024;
  }, [width]);

  const isMobile = useMemo(() => {
    return width <= 640;
  }, [width]);

  const isPad = useMemo(() => {
    return !isDesktop && !isMobile;
  }, [isDesktop, isMobile]);

  return {
    isDesktop,
    isMobile,
    isPad,
  };
}
