import Image from "./Image"; 
import AboutImage from "../assets/About.png";

interface IProps {

}

const About = ({}: IProps) => {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-xl my-10">About Us</h2>
                <p>At CloudHost, we are dedicated to providing top-tier cloud hosting services. Our mission is to empower businesses with reliable, scalable, and secure solutions. With a focus on innovation and customer satisfaction, we strive to be the leading cloud hosting provider.</p>
            </div>
            <div>
                <Image className="rounded-md" src={AboutImage} alt={"About Image"} />
            </div>
        </div>
    )
}

export default About;