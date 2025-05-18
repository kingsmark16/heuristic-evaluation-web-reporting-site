import Issue1 from '../assets/issues/issue1-1.jpg'
import Issue2 from '../assets/issues/issue1-2.jpg'
import Issue3 from '../assets/issues/issue1-3.png'
import Issue4 from '../assets/issues/issue1-4.png'
import Issue5 from '../assets/issues/issue1-5.png'
import Issue8 from '../assets/issues/issue1-8.png'
import Issue9 from '../assets/issues/issue1-9.png'
import Issue10 from '../assets/issues/issue1-10.png'
import Issue11 from '../assets/issues/issue1-11.jpg'
import Issue12 from '../assets/issues/issue1-12.jpg'
import Issue18 from '../assets/issues/issue1-18.png'
import Issue19 from '../assets/issues/issue1-19.png'
import Issue20 from '../assets/issues/issue1-20.png'
import Issue21 from '../assets/issues/issue1-21.png'
import Issue22 from '../assets/issues/issue1-22.png'
import Issue23 from '../assets/issues/issue1-23.png'


export const usabilityProblems = [
    {
        issue: "The display message text appears too light, small, too high and the padding is minimal, making system feedback difficult to notice and read",
        impact: "Poor visibility of feedback messages and unclear interface cues can cause confusion, missed notifications, and user frustration.",
        heuristicViolated: "Visibility of System Status",
        photo: [
            Issue1
        ]
    },
    {
        issue: "The client number and name are directly concatenated in a single string (e.g., 202504160001 - Kram, McAnghel) without clear visual separation or labeling. This formatting makes it difficult to distinguish between the identifier and the client name, especially when scanning through records quickly.",
        impact: "This can lead to confusion, misreading of data, and slower task completion. Users may struggle to locate or reference client information accurately, particularly in large datasets, which reduces overall usability and efficiency.",
        heuristicViolated: "Match Between System and the Real World",
        photo: [
            Issue3
        ]
    },
    {
        issue: " Currently, users must leave the current page or view to edit or update the status of a record. This lack of in-place editing interrupts the user’s workflow and adds unnecessary navigation steps, especially during repetitive tasks or bulk updates. Providing a toggle or inline control for updating status directly within the current view could significantly improve user control. ",
        impact: "This disrupts efficiency and reduces user control, leading to frustration and longer task completion times. It also increases the likelihood of losing context or forgetting which item was being modified, particularly in multi-step processes.",
        heuristicViolated: "User Control and Freedom",
        photo: [
            Issue4, Issue5
        ]
    },
    {
        issue: "Inconsistent wording in button labels",
        impact: "Users may become confused, unsure of what each button actually does, and hesitant to take action.",
        heuristicViolated: "Consistency and Standards",
        photo: [
            Issue11, Issue12
        ]
    },
    {
        issue: "In the dashboard, summary cards such as “Total Clients,” “Pending Bills,” and “Categories” are displayed as statistics, but they are not clickable or interactive. This is inconsistent with common dashboard standards where such summary cards typically act as shortcuts to detailed views.",
        impact: "Users may feel frustrated or confused when they try to click these cards expecting more information, leading to a less intuitive experience and reduced efficiency in navigating the system.",
        heuristicViolated: "Consistency and Standards",
        photo: [
            Issue8
        ]
    },
    {
        issue: "The system allows users to submit forms with invalid or meaningless input, such as symbols in name fields, empty passwords during account creation, and nonsensical category names without any validation or feedback.",
        impact: "This lack of input validation can lead to data inconsistencies, security vulnerabilities, and user frustration, as users receive no guidance or error messages to correct their input, ultimately reducing trust and reliability in the system.",
        heuristicViolated: "Error Prevention",
        photo: [
            Issue9, Issue10
        ]
    },
    {
        issue: "The data table only shows limited information. Users must click the “View” button and be redirected to another page just to see basic details that could have been shown or previewed directly in the table. This forces users to remember what they’ve seen or repeatedly go back and forth between pages, increasing cognitive load.",
        impact: "This design forces users to engage in unnecessary navigation just to access information that could have been easily previewed within the table itself. As a result, users must either memorize details from the previous page or repeatedly switch back and forth, which increases their cognitive load.",
        heuristicViolated: "Recognition Rather Than Recall",
        photo: [
            Issue20, Issue21
        ]
    },
    {
        issue: "The system requires users to create an entirely new billing entry rather than allowing them to update the previous and current readings directly.",
        impact: "It forces users to perform repetitive tasks, increasing the time and effort needed to manage records particularly for those handling multiple accounts or entries.",
        heuristicViolated: "Flexibility and Efficiency of Use",
        photo: [
            Issue22
        ]
    },
    {
        issue: "The system lacks any form of help or documentation. There are no tooltips, guides, FAQs, or instructions available to assist users in understanding features, troubleshooting issues, or learning how to complete tasks.",
        impact: "Without tooltips, guides, FAQs, or instructions, users are left to figure out how to use the system on their own, which can be especially challenging for first-time or less tech-savvy users. This lack of guidance increases the likelihood of confusion, errors, and frustration, as users may not understand how to navigate the system, use its features, or troubleshoot issues.",
        heuristicViolated: "Help and Documentation",
        photo: [
            Issue23
        ]
    },
    {
        issue: "The system displays an inaccurate error message, it shows 'Username already exists' even when the actual issue is different.",
        impact: "Misleading feedback prevents users from understanding what went wrong and how to fix it, causing them to waste time attempting incorrect solutions. As a result, users may repeatedly try the same action without success or give up entirely, thinking the system is malfunctioning.",
        heuristicViolated: "Help Users Recognize, Diagnose, and Recover from Errors",
        photo: [
            Issue18
        ]
    },
    {
        issue: " A developer name popup appears unexpectedly and cannot be dismissed or removed. This adds unnecessary visual clutter and may confuse or distract users who are focused on completing tasks. The background image is excessively large reducing focus on key interface elements.",
        impact: "These visual distractions can negatively impact the user experience by drawing attention away from important information, slowing down task completion, and making the interface feel unprofessional or overwhelming.",
        heuristicViolated: "Aesthetic and Minimalist Design",
        photo: [
            Issue19
        ]
    }
]