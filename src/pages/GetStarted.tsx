import Image from "../components/Image";
import HeroImage from "../assets/hero image.png";
import Hoisting from "../components/Hoisting";
import CoreService from "../components/CoreService";
import About from "../components/About";
import KeyFeature from "../components/KeyFeature";
import Plans from "../components/Plans";

interface IProps {

}

const GetStarted = ({}: IProps) => {
    return (
        <section className="mx-50 space-y-5">
            <div className="flex justify-center mb-10">
                <Image src={HeroImage} alt="Hero Image" className="w-fit"/>
            </div>
            <div>
                <Hoisting />
            </div>
            <div>
                <CoreService />
            </div>
            <div>
                <About />
            </div>
            <div>
                <KeyFeature />
            </div>
            <div>
                <Plans />
            </div>
        </section>
    )
}

export default GetStarted;