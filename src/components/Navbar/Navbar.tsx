import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks } from "../../constants"
import { logo } from "../../utils"
import { AiOutlineMenuFold } from "react-icons/ai";


const Navbar = () => {
  useGSAP(() => {
    gsap.to('#NavbarID',{
      y: 0,
      opacity:1,
      duration:1
    })
  })

  return (
    <header>
        <div id="NavbarID" className="container py-5 flex items-center justify-between -translate-y-20 opacity-0">
            <a href=""><img src={logo} className="w-[150px] lg:w-[200px]" alt="" /></a> 
            <div className="hidden lg:flex items-center gap-5 ">
                {navLinks.map((navlink) => (
                    <p className="cursor-pointer hover:text-red-500 transition-all">{navlink}</p>
                ))}
            </div>
            <div className="flex gap-5 items-center">
              <button className="border-[1px] border-red-400 py-2 px-6 rounded-lg hover:bg-red-400 hover:text-white transition-all">Get in touch</button>
              <span className="text-2xl lg:hidden"><AiOutlineMenuFold /></span>
            </div>
        </div>
    </header>
  )
}

export default Navbar