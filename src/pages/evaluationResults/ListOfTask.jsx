import { useLayoutEffect, useRef } from "react";
import { TaskBTNData, Tasks, info, title } from "../../data/ListOfTask";
import gsap from "gsap";
import AnimatedListOfTask from "../../animations/AnimatedListOfTask";
import Pagination from "../../components/Pagination";

const ListOfTask = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Container animation
      gsap.fromTo(
        containerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col mt-8">
      <span
        ref={titleRef}
        className="anim-evaluator text-xl mx-4.5 text-base-content sm:text-3xl font-semibold px-5 pb-4 flex items-center"
      >
        {title}
      </span>

      <div
        ref={containerRef}
        className="flex flex-col mb-0 mx-10 px-5 mt-3 bg-base-200/85 py-2 space-y-2 rounded-2xl shadow-md"
      >
        <AnimatedListOfTask Tasks={Tasks} info={info} />
      </div>

      <Pagination btnData={TaskBTNData} />
    </div>
  );
};

export default ListOfTask;
