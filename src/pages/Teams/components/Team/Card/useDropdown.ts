import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default (): [
  ref: React.MutableRefObject<HTMLDivElement | null>,
  isExpand: boolean,
  expand: (e: React.MouseEvent) => void,
  collapse: () => void
] => {
  const firstTime = useRef(true);
  const intentional = useRef(true);

  const ref = useRef<HTMLDivElement>(null);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const collapse = () => {
      if (!intentional.current) setExpand(false);
      else intentional.current = false;
    };

    window.addEventListener("click", collapse);

    return () => {
      window.removeEventListener("click", collapse);
    };
  }, [ref.current]);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        duration: firstTime.current ? 0 : 0.25,
        ease: "power2.out",
        rotateX: expand ? 0 : 45,
        autoAlpha: expand ? 1 : 0,
      });

      firstTime.current = false;
    }
  }, [ref.current, expand]);

  const handleExpand = (e: React.MouseEvent) => {
    if (ref.current) {
      ref.current.style.top = `${e.clientY}px`;
      ref.current.style.left = `${e.clientX}px`;

      intentional.current = true;
      setExpand(true);
    }
  };

  const handleCollapse = () => {
    setExpand(false);
  };

  return [ref, expand, handleExpand, handleCollapse];
};
