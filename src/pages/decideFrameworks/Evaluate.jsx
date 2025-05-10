import Pagination from "../../components/Pagination"
import { EvaluateBTNData, EvaluateData } from "../../data/decideFrameworkData"


const Evaluate = () => {
  return (
    <div className="flex flex-col mt-8">
      <span className="anim-evaluator text-xl mx-4.5 text-base-content sm:text-3xl font-semibold px-5 pb-4 flex items-center">{EvaluateData.title}</span>
      <div className="flex flex-col mb-0 mx-10 px-5 mt-3 bg-base-200/85 py-6 space-y-2 rounded-2xl shadow-md">
        <span className="text-base md:text-lg font-medium pr-2 md:px-2 text-base-content/95">After all evaluators complete their heuristic assessments, the following steps will be taken to process and present the findings:</span>
        {EvaluateData.steps.map((step, index) => (
          <p className="py-1 pl-1 md:pl-2 sm:py-3 text-base-content/95" key={index}>* {step}</p>
        ))}
        <span className="text-base pt-5 md:text-lg font-medium pr-2 md:px-2 text-base-content/95">Create a well-structured evaluation report summarizing:</span>
        {EvaluateData.deliverables.map((deliverable, index) => (
          <p className="py-1 pl-1 md:pl-2 sm:py-3 text-base-content/95" key={index}>* {deliverable}</p>
        ))}
      </div>
      <div className="divider mb-0 mx-3"></div>
      <Pagination btnData={EvaluateBTNData}/>
    </div>
  )
}

export default Evaluate