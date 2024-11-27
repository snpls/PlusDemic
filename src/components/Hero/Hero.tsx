import { heroImg } from "../../utils"


const Hero = () => {
  return (
    <section className="bg-cyan-100 rounded-2xl lg:mx-[4rem]"> 
        <div className="container min-h-[650px] grid md:grid-cols-2">
            <div className="flex flex-col justify-center gap-5 text-center py-20 lg:pr-40 md:pr-5 ">
                <h1 className="text-5xl font-bold text-violet-900">COVID-19 Risk Assessment Tool</h1>
                <p className="text-gray-700">A set of solutions designed to help quickly identify coronavirus symptoms and get reliable information regarding COVID-19 concerns.</p>
                <div><button className="bg-red-400 rounded-xl  px-6 py-3 text-white text-lg font-semibold transition-all hover:scale-110  hover:shadow-lg">See how to use it</button></div>
            </div>
            <div className="flex-center">
                <img src={heroImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero