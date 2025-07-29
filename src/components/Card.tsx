import Button from "./ui/Button";
import Image from "./Image";

interface IProps {
    title: string;
    description: string;
    src: string;
    alt: string;
}

const Card = ({title, description, alt, src}: IProps) => {
    return (
        <div className="flex justify-between items-center bg-[#1F1C26] p-2 rounded-md">
            <div className="space-y-2">
                <h3>{title}</h3>
                <p className="text-[#A69EB8]">{description}</p>
                <Button className="bg-[#2E2938] hover:bg-[#433d50]" width="w-fit">Explore</Button>
            </div>
            <div>
                <Image src={src} alt={alt} />
            </div>
        </div>
    )
}

export default Card;