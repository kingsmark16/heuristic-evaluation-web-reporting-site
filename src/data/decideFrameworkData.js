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
        pageTitle: "Determine...",
        path: "/decide-framworks/determine"
    },
    next: {
        name: "Next",
        icon: ChevronRight,
        pageTitle: "Choose...",
        path: "/decide-framworks/choose"
    }
}

/*CHOOSE*/
export const ChooseData = {
    title: "Choose the Evaluation Approach and Methods.",
    description: "The chosen evaluation method is Heuristic Evaluation using Jakob Nielsen’s 10 Usability Heuristics. This method involves usability experts systematically examining the user interface of the Water Billing Management System to identify usability problems based on established principles.",
    heuristics: [
        "Visibility of system status",
        "Match between system and the real world",
        "User control and freedom",
        "Consistency and standards",
        "Error prevention",
        "Recognition rather than recall",
        "Flexibility and efficiency of use",
        "Aesthetic and minimalist design",
        "Help users recognize, diagnose, and recover from errors",
        "Help and documentation"
    ]
}
export const ChooseBTNData = {
    previous: {
        name: "Prev",
        icon: ChevronLeft,
        pageTitle: "Explore...",
        path: "/decide-framworks/explore"
    },
    next: {
        name: "Next",
        icon: ChevronRight,
        pageTitle: "Identify...",
        path: "/decide-framworks/identify"
    }
}

/*Identify*/
export const IdentifyData = {
    title: "Identify the Practical Issues",
    issues: [
        "Five evaluators will participate, providing a balanced and comprehensive review of the system.",
        "All evaluators will be given access to the system with the necessary permissions to explore its key features.",
        "The evaluation will focus on the core modules and user interface elements that represent the main functionality of the system.",
        "Each evaluator will be given adequate time to complete their review independently.",
        "A standardized format or template will be provided for evaluators to document usability issues, related heuristics, severity ratings, and recommendations.",
        "After the individual evaluations, findings will be compiled and reviewed collectively to identify common issues and prioritize improvements."
    ]
}
export const IdentifyBTNData = {
    previous: {
        name: "Prev",
        icon: ChevronLeft,
        pageTitle: "Choose...",
        path: "/decide-framworks/choose"
    },
    next: {
        name: "Next",
        icon: ChevronRight,
        pageTitle: "Decide...",
        path: "/decide-framworks/decide"
    }
}
/*Decide*/
export const DecideData = {
    title: "Decide how to Deal with the Ethical Issues",
    issues: [
        "All evaluators will be informed of the purpose of the evaluation and their role in the process.",
        "Efforts will be made to ensure evaluators approach the system objectively, regardless of prior knowledge or opinions.",
        "Feedback will be constructive and professional, focusing on improving the system rather than criticizing individuals.",
        "Final reports will not link usability problems to specific evaluators to ensure unbiased documentation.",
        "Any documentation or notes will be securely stored and used solely for the purpose of the evaluation."
    ]
}
export const DecideBTNData = {
    previous: {
        name: "Prev",
        icon: ChevronLeft,
        pageTitle: "Identify...",
        path: "/decide-framworks/identify"
    },
    next: {
        name: "Next",
        icon: ChevronRight,
        pageTitle: "Evaluate...",
        path: "/decide-framworks/evaluate"
    }
}

/*Evaluate*/
export const EvaluateData = {
    title: "Evaluation, Analyze, Interpret and Present the Data",
    steps: [
        "Gather all completed heuristic evaluation workbook from the five evaluators, including notes, identified issues, violated heuristics, and recommendation.",
        "Combine and organize the issues identified by all evaluators, noting recurring problems.",
        "Categorize the usability issues based on which of Jakob Nielsen’s 10 heuristics they violate, to identify common patterns.",
        "Analyze the usability issues to understand their potential effect on user performance, satisfaction, and system effectiveness.",
        "Propose improvements or design changes based on the identified issues and their severity."
    ],
    deliverables: [
        "Key usability issues",
        "Associated heuristics",
        "Suggested improvements"
    ]
}
export const EvaluateBTNData = {
    previous: {
        name: "Prev",
        icon: ChevronLeft,
        pageTitle: "Decide...",
        path: "/decide-framworks/decide"
    },
    next: {
        name: "",
        icon: null,
        pageTitle: "",
        path: ""
    }
}