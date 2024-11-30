import { useGSAP } from "@gsap/react"
import { services } from "../../constants"
import ServiceCard from "./ServiceCard"
import gsap from "gsap"


const ServiceSec = () => {
  useGSAP(() => {
    gsap.to('.textz', {
      y:0,
      opacity:1
    })
  })

  return (
    <section>
        <div className="container py-14 grid md:grid-cols-2 lg:grid-cols-[1fr,1fr,1fr,500px] gap-5">
            {services.map((service,index) => (
                <ServiceCard  key={index} service={service} />
            ))}
            <div className="flex flex-col justify-center text-center lg:text-start opacity-0 translate-x-60 lg:pr-24 gap-5 textz">
              <h1 className="text-3xl font-bold">How it Helps people</h1>
              <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit esse ab natus.</p>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a className="text-red-600 hover:underline transition-all" href="">Learn More</a></p>
              <div><button className="border-[1px] border-red-400 py-2 px-6 rounded-lg hover:bg-red-400 hover:text-white transition-all">Get in touch</button></div>
            </div>
        </div>
    </section>
  )
}

export default ServiceSec