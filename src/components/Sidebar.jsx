
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronUp, House, BrainCog, PencilRuler, HandHelping } from "lucide-react"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({isOpen, onLinkClick}) => {

  useGSAP(() => {
    gsap.fromTo('.group1',
      {
        y: -50,
        opacity: 0
      },
      {
         y: 0,
         opacity: 1,
         stagger: 0.2,
         duration: 1,
         ease: 'power2.easeInOut'
      }
    )
    gsap.fromTo('ul',
      {
        x: -50,
        opacity: 0
      },
      {
         x: 0,
         opacity: 1,
         stagger: 0.2,
         duration: 1,
         ease: 'power2.easeInOut'
      }
    )
  })

  const [homeOpen, setHomeOpen] = useState(false);
  const [decideFrameworksOpen, setDecideFrameworksOpen] = useState(false);
  const [evaluationResultsOpen, setEvaluationResultsOpen] = useState(false);
  const [proposedImprovementsOpen, setProposedImprovementsOpen] = useState(false);
  
  return (
    <div className={`
    fixed top-0 left-0 z-50 h-screen w-70 md:w-80 bg-base-100 border-r-2 border-base-200 shadow-2xl overflow-y-auto
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:translate-x-0 lg:static lg:block
  `}>
      <div className="sticky top-0 z-40 bg-base-100 w-68 pt-6 pb-6 border-b-3 border-base-300 mx-auto">
        <span className="group1 uppercase font-mono text-2xl text-center block text-base-content">Group 1</span>
      </div>
      <div className="mb-8 flex justify-center">
        
        <ul className="mt-6 flex flex-col space-y-5 mb-6">
          <li className="text-base">
            <button onClick={() => setHomeOpen(!homeOpen)} className="w-65 hover:bg-base-content/30 active:bg-base-300/40 transition duration-300 ease-in-out py-2 px-3 rounded-sm flex justify-baseline items-center space-x-2 text-base-content font-medium">
              <House className="size-5"/>
              <p className="grow text-left">Home</p>
              <span className="flex-none">{homeOpen ? <ChevronUp className="size-5"/> : <ChevronDown className="size-5"/>}</span>
            </button>
            {homeOpen && (
              <ul className="mt-2 space-y-2 ml-7 text-sm font-light w-48">
                <li>
                  <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/">Evaluated System</NavLink>
                </li>
                <li>
                  <NavLink onClick={onLinkClick} className={({isActive}) => `block hover:bg-base-content/30 focus:bg-base-200 active:bg-base-300/40 w-full py-1.5 px-3 rounded-sm transition duration-300 ease-in-out ${isActive ? 'bg-base-300/40' : ''}`} to="/home/evaluators">Evaluators</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="text-base">
            <button onClick={() => setDecideFrameworksOpen(!decideFrameworksOpen)} className="w-65 hover:bg-base-content/30 active:bg-base-300/40 transition duration-300 ease-in-out py-2 px-3 rounded-sm flex justify-center items-center space-x-2 text-base-content font-medium">
              <BrainCog className="size-5"/>
              <p className="grow text-left">DECIDE Frameworks</p>
              <span className="">{decideFrameworksOpen ? <ChevronUp className="size-5"/> : <ChevronDown className="size-5"/>}</span>
            </button>
            {decideFrameworksOpen && (
                <ul className="mt-2 space-y-2 ml-7 text-sm font-light w-48">
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
            <button onClick={() => setEvaluationResultsOpen(!evaluationResultsOpen)} className="w-65 hover:bg-base-content/30 active:bg-base-300/40 transition duration-300 ease-in-out py-2 px-3 rounded-sm flex justify-center items-center space-x-2 text-base-content font-medium">
              <PencilRuler className="size-5"/>
              <span className="grow text-left">Evaluation Results</span>
              <span className="">{evaluationResultsOpen ? <ChevronUp className="size-5"/> : <ChevronDown className="size-5"/>}</span>
            </button>
            {evaluationResultsOpen && (
              <ul className="mt-2 space-y-2 ml-7 text-sm font-light w-48">
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
            <button onClick={() => setProposedImprovementsOpen(!proposedImprovementsOpen)} className="w-65 hover:bg-base-content/30 active:bg-base-300/40 transition duration-300 ease-in-out py-2 px-3 rounded-sm flex justify-center items-center space-x-2 text-base-content font-medium">
            <HandHelping className="size-5"/>
            <span className="grow text-left">Proposed Improvements</span>
            <span className="">{proposedImprovementsOpen ? <ChevronUp className="size-5"/> : <ChevronDown className="size-5"/>}</span>
            </button>
            {proposedImprovementsOpen && (
              <ul className="mt-2 space-y-2 ml-7 text-sm font-light w-48">
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