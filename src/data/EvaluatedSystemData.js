import Carousel1 from '../assets/Carousel-1.png'
import Carousel2 from '../assets/Carousel-2.png'
import Carousel3 from '../assets/Carousel-3.png'
import Carousel2md from '../assets/Carousel-2-md.png'
import Carousel1md from '../assets/Carousel-1-md.png'
import Carousel3md from '../assets/Carousel-3-md.png'
import { ChevronRight } from 'lucide-react'

export const CarouselData = [
    {
        id: "slide1",
        img_path_md_max: Carousel2,
        img_path_md_min: Carousel2md,
        prev: "#slide3",
        next: "#slide2"
    },
    {
        id: "slide2",
        img_path_md_max: Carousel1,
        img_path_md_min: Carousel1md,
        prev: "#slide1",
        next: "#slide3"
    },
    {
        id: "slide3",
        img_path_md_max: Carousel3,
        img_path_md_min: Carousel3md,
        prev: "#slide2",
        next: "#slide1"
    }
];

export const SystemDescription =
    {
        description: "This simple project is a Water Billing Management System. This is a web-based application project developed in PHP and MySQL Database. This project provides an online and automated platform for the water providers' management to easily store, retrieve, and calculate the billing statements of their consumers. The application stores and generates the consumers' or clients' billing statements for each meter reading. This project was developed with Bootstrap Framework and AdminLTE Template for the user interface. It also consists of user-friendly features and functionalities.",
        features: [
            "Category Management", "Client/Consumer Management System", "Billing Management", "User Management", "Update System Information", "Update Account Details/Credentials", "Login/Logout" 
        ]
            
    }

export const BTNData = {
    previous: {
        name: "",
        icon: null,
        pageTitle: "",
        path: ""
    },
    next: {
        name: "Next",
        icon: ChevronRight,
        pageTitle: "Evaluators",
        path: "/home/evaluators"
    }
}
