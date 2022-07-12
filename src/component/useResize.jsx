import { useEffect, useState } from "react";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
    // const onResize = () => {
    console.log("a", width, height);
    // };
    // window.addEventListener("resize", onResize);
  }, []);
  return { width, height };
};
