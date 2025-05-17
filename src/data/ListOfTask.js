import { ChevronLeft, ChevronRight } from "lucide-react";

export const info = "List of tasks used during evaluation performed by the evaluator during testing";
export const title = "Task and Scenario";
export const TaskBTNData = {
    previous: {
        name: "Prev",
        icon: ChevronLeft,
        pageTitle: "Heuristics...",
        path: "/evaluation-result/workbook"
    },
    next: {
        name: "Next",
        icon: ChevronRight,
        pageTitle: "Conclusion...",
        path: "/evaluation-result/conclusion-of-evaluation"
    }
}
export const Tasks = {
    
    addingCategory: [
        "In the navigation bar, go to List of Category.",
        "Click Create New and a fill up form will appear.",
        "Enter the Name of the Category, and choose its status.",
        "Click save"
    ],
    creatingBillings: [
        "In the navigation bar, go to Billings.",
        "Click Create New and a fill up form will appear.",
        "Fill the form with the corresponding details being asked, like the type of client, current reading the status if paid or not, and due date.",
        "After filling it up, click save.",
        "You will be redirected to the list of bills."
    ],
    updateBilling: [
        "In the navigation bar, go to Billings.",
        "Select the client who you would update the billing.",
        "Click the Action then select Edit.",
        "A filled-up form will appear, there you can edit some details.",
        "Click save after you update the details on the form"
    ],
    addingClients: [
        "In the navigation bar, go to List of Clients.",
        "In the upper right, click Create New.",
        "Fill the details of the new client in the form.",
        "Click Save and you will be redirected to the List of Clients to view the added client."
    ],
    updatingClients: [
        "In the navigation bar, go to List of Clients.",
        "Choose the client who you would update then click the Action.",
        "Select Edit and enter the details to be updated",
        "Click save and the system will redirect to the List."
    ],
    userCreation: [
        "In the navigation bar, go to List of Users.",
        "In the upper right, select Create New.",
        "Fill the details of the user including what type of user it is and an image for the Avatar.",
        "Click Save and you will see the newly added user to the list."
    ],
    updatingUser: [
        "In the navigation bar, go to List of Users.",
        "Choose the user who you would update then click the Action.",
        "Select Edit and enter the details to be updated",
        "Click save and the system will redirect to the List."
    ]
}