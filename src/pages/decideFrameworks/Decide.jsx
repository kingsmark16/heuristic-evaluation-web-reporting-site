import { useLayoutEffect, useRef } from "react"
import AnimatedList from "../../animations/AnimatedList"
import Pagination from "../../components/Pagination"
import { DecideBTNData, DecideData } from "../../data/decideFrameworkData"
import gsap from "gsap"


const Decide = () => {

  const titleRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current, {
        x: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },{
        x: 0,
        opacity: 1,
        ease: "power2.inOut"
      });
      
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);
  return (
    <div className="flex flex-col mt-8">
      <span ref={titleRef} className="anim-evaluator text-xl mx-4.5 text-base-content sm:text-3xl font-semibold px-5 pb-4 flex items-center">{DecideData.title}</span>
      <div className="flex flex-col mb-0 mx-10 px-5 mt-3 bg-base-200/85 py-2 space-y-2 rounded-2xl shadow-md">
         <AnimatedList Data={DecideData}/>
      </div>
      <Pagination btnData={DecideBTNData}/>
    </div>
  )
}

export default Decide