import { useLayoutEffect, useRef } from 'react'
import AnimatedList from '../../animations/AnimatedList'
import Pagination from '../../components/Pagination'
import { ChooseBTNData, ChooseData, ExploreData } from '../../data/decideFrameworkData'
import gsap from 'gsap'

const Choose = () => {
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
      <span ref={titleRef} className="anim-evaluator text-xl mx-4.5 text-base-content sm:text-3xl font-semibold px-5 pb-4 flex items-center">{ChooseData.title}</span>
      <div className="flex flex-col mb-0 mx-10 px-5 mt-3 bg-base-200/85 py-2 space-y-2 rounded-2xl shadow-md">
        <AnimatedList Data={ChooseData}/>
        <p className="text-base md:text-lg mb-2 md:md-1 font-medium pr-2 md:px-2 text-base-content/95">Each evaluator will independently assess the system’s interface, identify issues where these heuristics are violated, and rate their severity. Findings will later be combined and analyzed to inform improvements.</p>
      </div>
      <Pagination btnData={ChooseBTNData}/>
    </div>
  )
}

export default Choose