import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedInfo from "./AnimatedInfo";

const AnimatedList = ({Data}) => {
const {info, list} = Data;

const listRef = useRef([]);

useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate list (if any)
      if (listRef.current.length) {
        gsap.from(listRef.current, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

const setGoalRef = (el, index) => {
    if (el) listRef.current[index] = el;
  };
  return (
    <ul className="flex flex-col mb-0 mx-3 py-6 space-y-2">
        <AnimatedInfo info={info}/>
        {list.map((lst, index) => (
            <li key={index}
            ref={(el) => setGoalRef(el, index)}
            className="py-1 pl-1 md:pl-2 sm:py-3 text-base-content/95">* {lst}</li>
        ))}
    </ul>
  )
}

export default AnimatedList