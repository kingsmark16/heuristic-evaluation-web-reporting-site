
import { ChevronUp, House, BrainCog, PencilRuler, HandHelping } from "lucide-react"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({isOpen, onLinkClick}) => {

  const [homeOpen, setHomeOpen] = useState(false);
  const [decideFrameworksOpen, setDecideFrameworksOpen] = useState(false);
  const [evaluationResultsOpen, setEvaluationResultsOpen] = useState(false);
  const [proposedImprovementsOpen, setProposedImprovementsOpen] = useState(false);
  
  return (
    <div className={`
    fixed top-0 left-0 z-50 h-screen w-80 bg-base-100 border-r-2 border-base-200 overflow-y-auto
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:translate-x-0 lg:static lg:block
  `}>
      <div className="mb-8 flex justify-center">
        <div className="fixed flex justify-baseline bg-base-100 w-64 pt-6 pb-3 border-b-2 border-base-300">
          <span className="uppercase font-mono text-2xl text-center">Group 1</span>
        </div>
        <ul className="mt-23 flex flex-col space-y-5 mb-8">
          <li className="text-base">
            <button onClick={() => setHomeOpen(!homeOpen)} className="flex justify-center items-center space-x-2 text-base-content font-medium">
              <House className="size-5"/>
              Home
              <span className="ml-2">{homeOpen ? <ChevronUp className="size-5"/> : <ChevronDown className="size-5"/>}</span>
            </button>
            {homeOpen && (
              <ul className="mt-2 space-y-2 ml-7 text-sm w-48">
                <li>
                  <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/home/evaluated-system">Evaluated System</NavLink>
                </li>
                <li>
                  <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/home/evaluators">Evaluators</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="text-base">
            <button onClick={() => setDecideFrameworksOpen(!decideFrameworksOpen)} className="flex justify-center items-center space-x-2 text-base-content font-medium">
              <BrainCog className="size-5"/>
              DECIDE Frameworks
              <span className="ml-2">{decideFrameworksOpen ? <ChevronUp className="size-5"/> : <ChevronDown className="size-5"/>}</span>
            </button>
            {decideFrameworksOpen && (
                <ul className="mt-2 space-y-2 ml-7 text-sm w-48">
                  <li>
                    <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="decide-framworks/determine"><span>D</span>etermine the Goals</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/decide-framworks/explore"><span>E</span>xplore the questions</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="decide-framworks/choose"><span>C</span>hoose the evaluation approach and methods</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/decide-framworks/identify"><span>I</span>dentify the practical issues</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/decide-framworks/decide"><span>D</span>ecide how to deal with ethical issues</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/decide-framworks/evaluate"><span>E</span>valuate, interpret, and present the data</NavLink>
                  </li>
                </ul>
              )}
          </li>
          <li>
            <button onClick={() => setEvaluationResultsOpen(!evaluationResultsOpen)} className="flex justify-center items-center space-x-2 text-base-content font-medium">
              <PencilRuler className="size-5"/>
              Evaluation Results
              <span className="ml-2">{evaluationResultsOpen ? <ChevronUp className="size-5"/> : <ChevronDown className="size-5"/>}</span>
            </button>
            {evaluationResultsOpen && (
              <ul className="mt-2 space-y-2 ml-7 text-sm w-48">
                <li>
                  <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/evaluation-result/usability-problems">Usability Problems Found</NavLink>
                </li>
                <li>
                  <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/evaluation-result/workbook">Heuristic Evaluation Workbook</NavLink>
                </li>
                <li>
                  <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/evaluation-result/task">Tasks Used During Evaluation</NavLink>
                </li>
                <li>
                  <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/evaluation-result/conclusion-of-evaluation">Conclusion of the Evaluation</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => setProposedImprovementsOpen(!proposedImprovementsOpen)} className="flex justify-center items-center space-x-2 text-base-content font-medium">
            <HandHelping className="size-5"/>
            Proposed Improvements
            <span className="ml-2">{proposedImprovementsOpen ? <ChevronUp className="size-5"/> : <ChevronDown className="size-5"/>}</span>
            </button>
            {proposedImprovementsOpen && (
              <ul className="mt-2 space-y-2 ml-7 text-sm w-48">
                <li>
                  <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/proposed-improvements/ui-improvements">UI Improvements</NavLink>
                </li>
                <li>
                  <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/proposed-improvements/justification">Justification</NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
       
    </div>
  )
}

export default Sidebar