import Pagination from '../../components/Pagination'
import { ChooseBTNData, ChooseData, ExploreData } from '../../data/decideFrameworkData'

const Choose = () => {
  return (
    <div className="flex flex-col mt-8">
      <span className="anim-evaluator text-xl mx-4.5 text-base-content sm:text-3xl font-semibold px-5 pb-4 flex items-center">{ChooseData.title}</span>
      <div className="flex flex-col mb-0 mx-10 px-5 mt-3 bg-base-200/85 py-6 space-y-2 rounded-2xl shadow-md">
        <p className="text-base md:text-lg font-medium pr-2 md:px-2 text-base-content/95">{ChooseData.description}</p>
        {ChooseData.heuristics.map((heuristic, index) => (
          <p className="py-1 pl-1 md:pl-2 sm:py-3 text-base-content/95" key={index}>* {heuristic}</p>
        ))}
        <p className="text-base md:text-lg font-medium mt-2 pr-2 md:px-2 text-base-content/95">Each evaluator will independently assess the system’s interface, identify issues where these heuristics are violated, and rate their severity. Findings will later be combined and analyzed to inform improvements.</p>
      </div>
      <div className="divider mb-0 mx-3"></div>
      <Pagination btnData={ChooseBTNData}/>
    </div>
  )
}

export default Choose