import { logo } from "../../utils"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <section>
        <div className="container py-10 flex justify-between items-center">
            <div className="space-y-4 w-[400px]">
                <img src={logo} width={150} alt="" />
                <p className="text-gray-500 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatum ut molestiae facere.</p>
            </div>
            <div className="flex gap-5 text-3xl">
                <FaFacebook />  
                <RiInstagramFill />
                <FaLinkedin />
            </div>
        </div>
    </section>
  )
}

export default Footer