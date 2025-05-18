import { ChevronLeft } from 'lucide-react'
import AnimatedInfo from '../../animations/AnimatedInfo'
import { info, proposedImprovements } from '../../data/improvements'
import Pagination from '../../components/Pagination'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const improvementBTNData = {
  previous: {
    name: "Prev",
    icon: ChevronLeft,
    pageTitle: "Conclusion...",
    path: "/evaluation-result/conclusion-of-evaluation"
  },
  next: {
    name: "",
    icon: null,
    pageTitle: "",
    path: ""
  }
}

const UiImprovements = () => {
  const titleRef = useRef(null)
  const containerRef = useRef(null)
  const itemRefs = useRef([]) // Array of refs for each improvement item

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current, 
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Animate container
      gsap.fromTo(containerRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 }
      );

      // Animate each improvement item with stagger
      gsap.fromTo(itemRefs.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          delay: 0.6
        }
      );

    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="flex flex-col mt-8">
      <span
        ref={titleRef}
        className="anim-evaluator text-xl mx-4.5 text-base-content sm:text-3xl font-semibold px-5 pb-4 flex items-center"
      >
        Proposed Improvements and Justifications
      </span>

      <div
        ref={containerRef}
        className="flex flex-col mb-0 mx-10 px-5 mt-3 bg-base-200/85 py-2 space-y-5 rounded-2xl shadow-md"
      >
        <span className='py-0.5'></span>
        <AnimatedInfo info={info} />

        {proposedImprovements.map((item, index) => (
          <div
            key={index}
            ref={el => itemRefs.current[index] = el}
            className='p-3'
          >
            <h2 className='font-bold pb-3'>{item.title}</h2>
            <p className='pb-2'><span className='font-medium'>UI Improvement: </span>{item.improvements}</p>
            <p><span className='font-medium'>Justification: </span>{item.justification}</p>
          </div>
        ))}
      </div>

      <Pagination btnData={improvementBTNData} />
    </div>
  )
}

export default UiImprovements
