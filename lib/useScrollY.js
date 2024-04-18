"use client";
import { useState, useEffect } from "react";

export function useScrollY() {
  const [scrollY, setScrollY] = useState(null);

  useEffect(() => {
    const updateScrollY = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener("scroll", updateScrollY);
    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, [scrollY]);

  return scrollY;
}
export default useScrollY;
