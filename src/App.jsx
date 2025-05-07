import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import EvaluatedSystem from "./pages/home/EvaluatedSystem"
import Evaluators from "./pages/home/Evaluators"
import Determine from "./pages/decideFrameworks/Determine"
import Explore from "./pages/decideFrameworks/Explore"
import Choose from "./pages/decideFrameworks/Choose"
import Identify from "./pages/decideFrameworks/Identify"
import Decide from "./pages/decideFrameworks/Decide"
import Evaluate from "./pages/decideFrameworks/Evaluate"
import HeuristicEvaluationWorkbook from "./pages/evaluationResults/HeuristicEvaluationWorkbook"
import UsabilityProblems from "./pages/evaluationResults/UsabilityProblems"
import ListOfTask from "./pages/evaluationResults/ListOfTask"
import ConclusionOfEvaluation from "./pages/evaluationResults/ConclusionOfEvaluation"
import UiImprovements from "./pages/proposedImprovements/UiImprovements"
import Justificatiion from "./pages/proposedImprovements/Justificatiion"
import { useState } from "react"


function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const closeSidebar = () => setSidebarOpen(false);
  
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onLinkClick={closeSidebar}/>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black opacity-40 lg:hidden"
        ></div>
      )}
      <div className="flex flex-col flex-1">
        <Header toggleSidebar={() => setSidebarOpen(prev => !prev)}/>
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<EvaluatedSystem/>}/>
            <Route path="/home/evaluators" element={<Evaluators/>}/>

            <Route path="/decide-framworks/determine" element={<Determine/>}/>
            <Route path="/decide-framworks/explore" element={<Explore/>}/>
            <Route path="/decide-framworks/choose" element={<Choose/>}/>
            <Route path="/decide-framworks/identify" element={<Identify/>}/>
            <Route path="/decide-framworks/decide" element={<Decide/>}/>
            <Route path="/decide-framworks/evaluate" element={<Evaluate/>}/>

            <Route path="/evaluation-result/usability-problems" element={<UsabilityProblems/>}/>
            <Route path="/evaluation-result/workbook" element={<HeuristicEvaluationWorkbook/>}/>
            <Route path="/evaluation-result/task" element={<ListOfTask/>}/>
            <Route path="/evaluation-result/conclusion-of-evaluation" element={<ConclusionOfEvaluation/>}/>

            <Route path="/proposed-improvements/ui-improvements" element={<UiImprovements/>}/>
            <Route path="/proposed-improvements/justification" element={<Justificatiion/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
