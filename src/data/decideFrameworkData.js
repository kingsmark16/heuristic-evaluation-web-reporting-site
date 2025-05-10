import { ChevronLeft, ChevronRight } from "lucide-react"

/*DETERMINE*/
export const DetermineData = {
    title: "Determine the Goals of the Evaluation",
    goals: [
        "Assess how effectively the system supports users in performing their tasks.",
        "Identify any usability issues that may affect user experience or efficiency.",
        "Determine whether the system’s features function as intended.",
        "Evaluate the clarity, responsiveness, and overall design of the user interface.",
        "Understand user satisfaction with the system’s performance and ease of use.",
        "Ensure that system access and data management are secure and reliable.",
        "Gather feedback that can inform future improvements or enhancements."
    ]
}
export const DetermineBTNData = {
    previous: {
        name: "",
        icon: null,
        pageTitle: "",
        path: ""
    },
    next: {
        name: "Next",
        icon: ChevronRight,
        pageTitle: "Explore...",
        path: "/decide-framworks/explore"
    }
}


/*Explore*/
export const ExploreData = {
    title: "Explore the Questions",
    questions: [
        "Are users able to navigate the system easily and understand how to use its features?",
        "Do users encounter any difficulties while performing common tasks such as adding clients or generating billing statements?",
        "Are the system's functions—like billing calculation, data management, and login/logout—working correctly and consistently?",
        "How satisfied are users with the overall system experience, including performance, design, and reliability?",
        "Are there any confusing or unnecessary elements in the interface that hinder task completion?",
        "Does the system provide appropriate feedback, error messages, and guidance to the user?",
        "Are user roles and access controls implemented correctly to ensure secure data handling?"
    ]
}
export const ExploreBTNData = {
    previous: {
        name: "Prev",
        icon: ChevronLeft,
        pageTitle: "Decide...",
        path: "/decide-framworks/determine"
    },
    next: {
        name: "Next",
        icon: ChevronRight,
        pageTitle: "Choose...",
        path: "/decide-framworks/choose"
    }
}
