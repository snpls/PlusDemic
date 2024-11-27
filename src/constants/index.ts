import { serviceType } from "../type";
import { serviceImg1, serviceImg2, serviceImg3 } from "../utils";

export const navLinks = ['Products', 'Customer Stories', 'About', 'Blogs'];

export const services: serviceType[] = [
    {
        img: serviceImg1,
        title: "Symptoms",
        descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
    },
    {
        img: serviceImg2,
        title: "Recommendations",
        descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
    },
    {
        img: serviceImg3,
        title: "Local information",
        descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
    }
]