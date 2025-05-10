import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BTNData, EvaluatorsData } from "../../data/EvaluatorsData";
import { PersonStanding } from "lucide-react";
import PixelCard from "../../components/PixelCard";
import Pagination from "../../components/Pagination";
gsap.registerPlugin(ScrollTrigger);

const Evaluators = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentElement,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo('.anim-evaluator',
      {
        y: 50,
        opacity: 0
      },
      {
         y: 0,
         opacity: 1,
         stagger: 0.2,
         duration: 1.5,
         ease: 'power2.Out'
      }
    )
  }, []);

  return (
    <div className="flex flex-col my-3">
      <span className="anim-evaluator text-base text-base-content md:text-lg font-semibold px-5.5 pb-7 flex items-center gap-2">Evaluators<PersonStanding className="animate-pulse size-6"/></span>
      <div className="grid grid-cols-1 sm:grid-cols-2 clg:grid-cols-3 gap-8 justify-items-center py-3 mx-auto max-w-screen-lg">
        {EvaluatorsData.map((evaluator, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card bg-base-200/80 w-66 h-90 shadow-md"
          >
            <figure>
              <img src={evaluator.photo} className="rounded-tr-xl" />
            </figure>
            <PixelCard variant="blue">
              <div className="card-body items-center text-center absolute">
                <h2 className="card-title">{evaluator.fullName}</h2>
                <p>{evaluator.role}</p>
              </div>
            </PixelCard>
          </div>
        ))}
      </div>
      <div className="divider my-2 mx-3 mb-0"></div>
      <Pagination btnData={BTNData}/>
    </div>
  );
};

export default Evaluators;
