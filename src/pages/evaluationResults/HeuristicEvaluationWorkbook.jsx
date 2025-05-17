import { ChevronLeft, ChevronRight } from "lucide-react"
import Pagination from "../../components/Pagination"
import PdfCard from "../../components/PdfCard"

const HeuBTNData = {
    previous: {
        name: "Prev",
        icon: ChevronLeft,
        pageTitle: "Usability...",
        path: "/evaluation-result/usability-problems"
    },
    next: {
        name: "Next",
        icon: ChevronRight,
        pageTitle: "Task Used...",
        path: "/evaluation-result/task"
    }
}

const HeuristicEvaluationWorkbook = () => {
  
  
  return (
    <div className="flex flex-col mt-8">
        <span className="anim-evaluator text-xl mx-4.5 text-base-content sm:text-3xl font-semibold px-5 pb-4 flex items-center">Heuristic Evaluation Workbook</span>
      <div className="flex flex-col mb-0 mx-10 px-5 mt-3 bg-base-200/85 py-2 space-y-2 rounded-2xl shadow-md">
        <PdfCard/>
      </div>
      <Pagination btnData={HeuBTNData}/>
    </div>
  )
}

export default HeuristicEvaluationWorkbook