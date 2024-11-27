import { serviceType } from "../../type"

interface Props{
    service: serviceType
}

const ServiceCard = ({service}: Props ) => {
  return (
        <div className="border border-gray-400 rounded-2xl py-10 px-10 text-center grid gap-5">
            <img className="rounded-full mx-auto w-20" src={service.img} alt="" />
            <p className="text-lg font-bold">{service.title}</p>
            <p className=" text-gray-500">{service.descp}</p>
        </div>
  )
}

export default ServiceCard