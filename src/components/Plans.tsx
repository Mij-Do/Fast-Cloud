import Button from "./ui/Button";

interface IProps {
    
}

const Plans = ({}: IProps) => {
    return (
        <div>
            <div>
                <h3>Basic</h3>
                <p>$9.99<span>/ Month</span></p>
                <Button className={""}>Choose Plan</Button>
            </div>
        </div>
    )
}

export default Plans;