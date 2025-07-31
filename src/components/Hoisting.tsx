import Card from "../components/Card";
import Hoisting1 from "../assets/Hostng1.png";
import Hoisting2 from "../assets/Hoisting2.png";

interface IProps {

}

const Hoisting = ({}: IProps) => {
    return (
        <>
            <h2 className="text-xl my-10">Hosting Services</h2>
            <div className="space-y-3">
                <Card 
                    title="Web Hosting" 
                    description="Reliable and scalable web hosting solutions for businesses of all sizes." 
                    src={Hoisting1} alt="Hoisting1"/>
                <Card 
                title="VPS Hosting" 
                description="Powerful virtual private servers for maximum control and flexibility." 
                src={Hoisting2} alt="Hoisting2"/>
            </div>
        </>
    )
}

export default Hoisting;