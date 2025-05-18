import React, { useLayoutEffect, useRef } from 'react'
import { conclusion } from '../../data/conclusion'
import Pagination from '../../components/Pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'

const conclusionBTNData = {
  previous: {
    name: "Prev",
    icon: ChevronLeft,
    pageTitle: "Task Used...",
    path: "/evaluation-result/task"
  },
  next: {
    name: "Next",
    icon: ChevronRight,
    pageTitle: "Proposed...",
    path: "/proposed-improvements/ui-improvements"
  }
}

const ConclusionOfEvaluation = () => {
  const titleRef = useRef(null)
  const containerRef = useRef(null)
  const paragraphRefs = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Animate container
      gsap.fromTo(containerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
      );

      // Animate each paragraph
      gsap.fromTo(paragraphRefs.current,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.15,
          delay: 0.4
        }
      );
    });

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <div className="flex flex-col mt-8">
      <span
        ref={titleRef}
        className="anim-evaluator text-xl mx-4.5 text-base-content sm:text-3xl font-semibold px-5 pb-4 flex items-center"
      >
        Conclusion of Evaluation
      </span>

      <div
        ref={containerRef}
        className="flex flex-col mb-0 mx-10 px-5 mt-3 bg-base-200/85 py-2 space-y-2 rounded-2xl shadow-md"
      >
        {conclusion.map((item, index) => (
          <p
            key={index}
            ref={(el) => paragraphRefs.current[index] = el}
            className="py-1 sm:py-3 text-base-content/95"
          >
            {item}
          </p>
        ))}
      </div>

      <Pagination btnData={conclusionBTNData} />
    </div>
  )
}

export default ConclusionOfEvaluation
