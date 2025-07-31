import Card from "../components/Card";
import CoreService1 from "../assets/CoreService1.png";
import CoreService2 from "../assets/CoreService2.png";

interface IProps {

}

const CoreService = ({}: IProps) => {
    return (
        <>
            <h2 className="text-xl my-10">Core Services</h2>
            <div className="space-y-3">
                <Card 
                    title="Web Hosting" 
                    description="Reliable and scalable web hosting solutions for businesses of all sizes." 
                    src={CoreService1} alt="Hoisting1"/>
                <Card 
                title="VPS Hosting" 
                description="Powerful virtual private servers for maximum control and flexibility." 
                src={CoreService2} alt="Hoisting2"/>
            </div>
        </>
    )
}

export default CoreService;