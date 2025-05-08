import Carousel from "../../components/Carousel"
import { Check, BadgeInfo, Sparkles } from "lucide-react"
import { SystemDescription } from "../../data/EvaluatedSystemData"

const EvaluatedSystem = () => {
  return (
    <div className="flex flex-col">
      <Carousel/>
        <div className="flex flex-col mt-3 mx-3 px-3 md:mt-8 bg-base-200/85 py-3 space-y-2 rounded-2xl shadow-md">
          <span className="text-base text-base-content md:text-lg font-semibold pr-2 md:px-2 flex items-center gap-2">Description<BadgeInfo className="animate-pulse"/></span>
          <p className="text-sm text-base-content/95 md:text-base font-light pr-2 md:px-2">{SystemDescription.description}</p>
        </div>
        <div className="flex flex-col mt-3 mb-7 mx-3 px-3 md:mt-8 bg-base-200/85 py-3 space-y-2 rounded-2xl shadow-md">
          <span className="text-base md:text-lg font-semibold pr-2 md:px-2 flex items-center gap-2">Features<Sparkles className="animate-pulse" /></span>
          <ul className="mt-2 flex flex-col gap-2 text-sm md:text-base font-light pr-2 md:px-2">
              {SystemDescription.features.map((feature, index) => (
                <li className="flex items-center space-x-4">
                  <Check className="size-4 text-green-500" />
                  <span className="text-base-content/95" key={index}>{feature}</span>
                </li>
                )    
                )}
          </ul>
        </div>
        
    </div>
  )
}

export default EvaluatedSystem