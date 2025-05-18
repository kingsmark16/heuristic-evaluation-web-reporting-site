export const info = "This section outlines specific improvements for the Water Billing Management System based on the issues identified during the heuristic evaluation. Each recommendation is grounded in established Human-Computer Interaction (HCI) principles and Nielsen’s 10 Usability Heuristics.";

export const proposedImprovements = [
    {
        title: "Enhance Visibility of Feedback Messages",
        improvements: "Increase the font size, weight, and contrast of system messages. Add appropriate padding and positioning to make them more noticeable.",
        justification: "This addresses the heuristic “Visibility of System Status”, which emphasizes the importance of keeping users informed through clear and timely feedback. Enhancing message visibility reduces user confusion, minimizes missed notifications, and improves trust in system responsiveness."
    },
    {
        title: "Separate Client ID and Name Fields",
        improvements: "Display client number and name in distinct fields or columns with clear labels.",
        justification: "This aligns with the heuristic “Match Between System and the Real World.” By using natural grouping and clear separation, the system reduces cognitive load, improves scanning efficiency, and supports better data readability."
    },
    {
        title: "Enable Inline Editing for Status Updates",
        improvements: "Allow users to update billing status or record details directly within the current page through inline controls or modals.",
        justification: "According to the “User Control and Freedom” heuristic, users should be able to easily make corrections without having to navigate away or redo actions. This reduces interruptions and streamlines repetitive workflows."
    },
    {
        title: "Use Clear and Consistent Terminology",
        improvements: "Standardize wording across buttons, labels, and system messages.",
        justification: "The heuristic “Consistency and Standards” ensures that users do not have to wonder whether different words mean the same thing. This improves learnability and usability for both new and returning users."
    },
    {
        title: "Make Dashboard Summary Cards Interactive",
        improvements: "Link summary cards (e.g., “Total Clients”, “Pending Bills”) to their corresponding detailed views.",
        justification: "Based on “Consistency and Standards,” most dashboards offer interactive summaries. Making these cards clickable enhances navigation, reduces search time, and aligns with user expectations."
    },
    {
        title: "Implement Real-Time Input Validation",
        improvements: "Restrict the entry of invalid data, enforce required fields (e.g., for passwords), and display validation messages immediately.",
        justification: "The heuristic “Error Prevention” emphasizes preventing issues before they occur. This approach helps maintain data integrity and reduces frustration from having to correct errors after submission."
    },
    {
        title: "Provide Help and Documentation",
        improvements: "Add support resources such as tooltips, FAQs, onboarding tips, and a help section.",
        justification: "While intuitive design is ideal, “Help and Documentation” is still crucial, especially for first-time users. Providing guidance reduces learning time and supports task completion without external assistance."
    },
    {
        title: "Improve Accuracy of Error Messages",
        improvements: "Ensure error messages reflect the actual issue and provide actionable suggestions.",
        justification: "In line with “Help Users Recognize, Diagnose, and Recover from Errors,” accurate messages enable users to understand and resolve issues effectively, improving confidence and system reliability."
    },
    {
        title: "Remove Unnecessary Popups and Simplify Backgrounds",
        improvements: "Remove or allow dismissal of developer popups and reduce the dominance of large background images.",
        justification: "According to “Aesthetic and Minimalist Design,” interfaces should not be cluttered. Simplified visuals help users focus on tasks, enhancing clarity and professionalism."
    },
    {
        title: "Display Additional Details in Table or Use Expandable Views",
        improvements: "Include more key information directly in the data tables or provide expandable rows/modals for preview.",
        justification: "The heuristic “Recognition Rather Than Recall” promotes ease of use by reducing the need for users to remember information between screens. This change reduces cognitive load and makes data access more efficient."
    }
]