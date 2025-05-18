import Concina from '../assets/Concina.JPG'
import Onsay from '../assets/Onsay.jpg'
import Bermejo from '../assets/Bermejo.jpg'
import Oraller from '../assets/Oraller.jpg'
import Radores from '../assets/Radores.jpg'
import { ChevronLeft, ChevronRight } from 'lucide-react'


export const EvaluatorsData = [
    {
        fullName: "Mark Angel P. Concina",
        role: "Evaluator",
        photo: Concina,
    },
    {
        fullName: "Gerald B. Oraller",
        role: "Evaluator",
        photo: Oraller,
    },
    {
        fullName: "Dino S. Radores",
        role: "Evaluator",
        photo: Radores,
    },
    {
        fullName: "Alwin Y. Onsay Jr.",
        role: "Evaluator",
        photo: Onsay,
    },
    {
        fullName: "King David P. Bermejo",
        role: "Evaluator",
        photo: Bermejo,
    }
]
export const BTNData = {
    previous: {
        name: "Prev",
        icon: ChevronLeft,
        pageTitle: "Evaluated System",
        path: "/"
    },
    next: {
        name: "Next",
        icon: ChevronRight,
        pageTitle: "Determine...",
        path: "/decide-framworks/determine"
    }
}