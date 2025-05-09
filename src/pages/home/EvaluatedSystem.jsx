import Carousel from "../../components/Carousel"
import { Check, BadgeInfo, Sparkles } from "lucide-react"
import { SystemDescription } from "../../data/EvaluatedSystemData"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger);
import ScrollTrigger from "gsap/ScrollTrigger"

const EvaluatedSystem = () => {

  const sectionRef = useRef(null);
  const cRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  useGSAP(() => {
    const divs = [cRef.current, div1Ref.current, div2Ref.current];
    divs.forEach((div, index) => {
      gsap.fromTo(div,
        {
          y: 50, opacity: 0
        },
        {
          y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1), ScrollTrigger: {trigger: div, start: 'top bottom-=100'}
        }
      )
    })
    gsap.fromTo(sectionRef.current, {opacity: 0}, {opacity: 1, duration: 1.5})
  },[]);

  return (
    <div ref={sectionRef} className="flex flex-col">
      <Carousel ref={cRef}/>
        <div ref={div1Ref} className="flex flex-col mt-6 mx-3 px-3 md:mt-12 bg-base-200/85 py-3 space-y-2 rounded-2xl shadow-md">
          <span className="text-base text-base-content md:text-lg font-semibold pr-2 md:px-2 flex items-center gap-2">Description<BadgeInfo className="animate-pulse size-5"/></span>
          <p className="text-sm text-base-content/95 md:text-base font-light pr-2 md:px-2">{SystemDescription.description}</p>
        </div>
        <div ref={div2Ref} className="flex flex-col mt-6 mb-7 mx-3 px-3 md:mt-12 bg-base-200/85 py-3 space-y-2 rounded-2xl shadow-md">
          <span className="text-base md:text-lg font-semibold pr-2 md:px-2 flex items-center gap-2">Features<Sparkles className="animate-pulse size-5" /></span>
          <ul className="mt-2 flex flex-col gap-2 text-sm md:text-base font-light pr-2 md:px-2">
              {SystemDescription.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <Check className="size-4 text-green-500" />
                  <span className="text-base-content/95">{feature}</span>
                </li>
                )    
                )}
          </ul>
        </div>
        
    </div>
  )
}

export default EvaluatedSystem