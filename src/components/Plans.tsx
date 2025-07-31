import Button from "./ui/Button";
import { Check } from 'lucide-react';

interface IProps {
    
}

const Plans = ({}: IProps) => {
    return (
        <div>
            <h2 className="text-xl my-10">Pricing Plans</h2>
            <div className="flex justify-between items-center space-x-3">
                <div className="bg-[#423D54] flex flex-col space-y-3 p-2 rounded-md w-full">
                    <h3>Basic</h3>
                    <p className="text-3xl">$9.99<span className="text-sm">/ Month</span></p>
                    <Button className={"bg-[#2E2938]"}>Choose Plan</Button>
                    <p><Check /> <span></span></p>
                    <p><Check /> <span></span></p>
                    <p><Check /> <span></span></p>
                </div>
                <div className="bg-[#423D54] flex flex-col space-y-3 p-2 rounded-md w-full">
                    <h3>Pro</h3>
                    <p className="text-3xl">$29.99<span className="text-sm">/ Month</span></p>
                    <Button className={"bg-[#2E2938]"}>Choose Plan</Button>
                    <p><Check /> <span></span></p>
                    <p><Check /> <span></span></p>
                    <p><Check /> <span></span></p>
                </div>
                <div className="bg-[#423D54] flex flex-col space-y-3 p-2 rounded-md w-full">
                    <h3>Enterprise</h3>
                    <p className="text-3xl">$99.99<span className="text-sm">/ Month</span></p>
                    <Button className={"bg-[#2E2938]"}>Choose Plan</Button>
                    <p><Check /> <span></span></p>
                    <p><Check /> <span></span></p>
                    <p><Check /> <span></span></p>
                </div>
            </div>
        </div>
    )
}

export default Plans;