import { icon1 } from "../../utils"


const TrustSec = () => {
  return (
    <section className="bg-blue-50">
        <div className="container py-20">
            <h1 className="text-4xl text-center font-bold text-purple-800 mb-10">Why you can trust this tools</h1>
            <div className="grid grid-cols-2">
                <div className="space-y-5 px-40">
                    <img src={icon1} alt="" />
                    <h1 className="text-3xl font-semibold">Based on reliable sources</h1>
                    <p>We want our tool to be safe and reliable, so its logic is based on the official global information provided by the WHO.</p>
                    <p className="text-gray-500 text-sm">Enchance your preliminary diagnosis and triage with pediatric content <a className="text-red-600 hover:underline transition-all" href="">Learn More</a></p>
                </div>
                <div className="space-y-5 px-40">
                    <img src={icon1} alt="" />
                    <h1 className="text-3xl font-semibold">Based on reliable sources</h1>
                    <p>We want our tool to be safe and reliable, so its logic is based on the official global information provided by the WHO.</p>
                    <p className="text-gray-500 text-sm">Enchance your preliminary diagnosis and triage with pediatric content <a className="text-red-600 hover:underline transition-all" href="">Learn More</a></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TrustSec