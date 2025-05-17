import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedInfo from "./AnimatedInfo";

const AnimatedListOfTask = ({ Tasks, info }) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const taskDivs = gsap.utils.toArray(".task-div");
      gsap.from(taskDivs, {
        opacity: 0,
        x: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup GSAP context
  }, [Tasks]);

  return (
    <div ref={containerRef}>
      <ul className="flex flex-col mb-0 mx-3 py-6 space-y-2">
        <AnimatedInfo info={info} />
        {Tasks &&
          Object.entries(Tasks).map(([taskKey, steps]) => (
            <div className="py-2 task-div" key={taskKey}>
              <h2 className="text-base md:text-lg py-2 font-medium pr-2 md:px-2 text-base-content/95">
                {taskKey.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              </h2>
              <ol>
                {steps.map((step, index) => (
                  <li className="py-1 pl-3 md:pl-6 sm:py-3 text-base-content/95" key={index}>
                    {`Step ${index + 1}: ${step}`}
                  </li>
                ))}
              </ol>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default AnimatedListOfTask;
