import { useGSAP } from "@gsap/react"
import { heroImg } from "../../utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  useGSAP(() => {
    gsap.to('.stagger-box',{
      y:0,
      opacity:1,
      stagger: .3,
      scrollTrigger: {
        trigger: '.stagger-box'
      }
    })
    gsap.to('.img',{
      scale: 1
    })
  })


  return (
    <section className="bg-cyan-100 rounded-2xl lg:mx-[4rem]"> 
        <div className="container min-h-[650px] grid md:grid-cols-2">
            <div className="flex flex-col justify-center gap-5 text-center md:text-start py-20 lg:pr-40 md:pr-5">
                <h1 className="stagger-box text-5xl font-bold text-violet-900 opacity-0 translate-y-20">COVID-19 Risk Assessment Tool</h1>
                <p className="stagger-box text-gray-700 opacity-0 translate-y-20">A set of solutions designed to help quickly identify coronavirus symptoms and get reliable information regarding COVID-19 concerns.</p>
                <div><button className="stagger-box bg-red-400 rounded-xl  px-6 py-3 text-white text-lg font-semibold transition-all hover:scale-110  hover:shadow-lg opacity-0 translate-y-10">See how to use it</button></div>
            </div>
            <div className="flex-center">
                <img className="img scale-0" src={heroImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero