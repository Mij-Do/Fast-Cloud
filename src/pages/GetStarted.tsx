import Image from "../components/Image";
import HeroImage from "../assets/hero image.png";
interface IProps {

}

const GetStarted = ({}: IProps) => {
    return (
        <>
            <div className="flex justify-center">
                <Image src={HeroImage} alt="Hero Image" className="w-fit"/>
            </div>
        </>
    )
}

export default GetStarted;