import { usesImg1, usesImg2, usesImg3 } from "../../utils"



const ServiceSec2 = () => {
  return (
    <section>
        <div className="container flex pb-20">
            <div className="w-[500px] flex flex-col justify-center pr-24 gap-5">
              <h1 className="text-3xl font-bold">How it Helps people</h1>
              <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit esse ab natus.</p>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a className="text-red-600 hover:underline transition-all" href="">Learn More</a></p>
              <div><button className="border-[1px] border-red-400 py-2 px-6 rounded-lg hover:bg-red-400 hover:text-white transition-all">Get in touch</button></div>
            </div>

            <ul className="flex gap-5">
                <div className="space-y-3">
                    <img className="rounded-xl" src={usesImg1} alt="" />
                    <p className="text-gray-500">Corona Virus</p>
                </div>
                <div className="space-y-3">
                    <img className="rounded-xl" src={usesImg2} alt="" />
                    <p className="text-gray-500">Diagnostic</p>
                </div>
                <div className="space-y-3">
                    <img className="rounded-xl" src={usesImg3} alt="" />
                    <p className="text-gray-500">Symptomps</p>
                </div>
            </ul>
        </div>
    </section>
  )
}

export default ServiceSec2