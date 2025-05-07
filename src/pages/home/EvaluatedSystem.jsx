import Carousel from "../../components/Carousel"
import { SystemDescription } from "../../data/EvaluatedSystemData"


const EvaluatedSystem = () => {
  return (
    <div className="flex flex-col">
      <Carousel/>
      <div className="flex flex-col mt-3 mx-3">
        <span className="text-base md:text-lg font-semibold py-2 md:py-5 px-2 md:px-3">Description:{" "}</span>
        <p className="text-sm md:text-base font-light px-2 md:px-3">{SystemDescription.description}</p>
      </div>
      <div className="flex flex-col mt-3 mx-3">
      <span className="text-base md:text-lg font-semibold py-2 md:py-5 px-2 md:px-3">Features{" "}</span>
        <ul className="text-sm md:text-base font-light px-2 md:px-3">
            {SystemDescription.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default EvaluatedSystem