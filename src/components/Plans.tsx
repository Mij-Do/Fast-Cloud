import Button from "./ui/Button";
import { Check } from 'lucide-react';


const Plans = () => {
    return (
        <div className="my-5">
            <h2 className="text-xl my-10">Pricing Plans</h2>
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row items-center md:space-x-3">
                <div className="bg-[#423D54] flex flex-col space-y-3 p-2 rounded-md w-full md:h-100">
                    <h3>Basic</h3>
                    <p className="text-3xl">$9.99<span className="text-sm">/ Month</span></p>
                    <Button className={"bg-[#2E2938]"}>Choose Plan</Button>
                    <p className="flex items-center space-x-2"><Check /> <span>10GB Storage</span></p>
                    <p className="flex items-center space-x-2"><Check /> <span>1 Website</span></p>
                    <p className="flex items-center space-x-2"><Check /> <span>Basic Support</span></p>
                </div>
                <div className="bg-[#423D54] flex flex-col space-y-3 p-2 rounded-md w-full md:h-100">
                    <h3>Pro</h3>
                    <p className="text-3xl">$29.99<span className="text-sm">/ Month</span></p>
                    <Button className={"bg-[#2E2938]"}>Choose Plan</Button>
                    <p className="flex items-center space-x-2"><Check /> <span>50GB Storage</span></p>
                    <p className="flex items-center space-x-2"><Check /> <span>5 Websites</span></p>
                    <p className="flex items-center space-x-2"><Check /> <span>Priority Support</span></p>
                </div>
                <div className="bg-[#423D54] flex flex-col space-y-3 p-2 rounded-md w-full md:h-100">
                    <h3>Enterprise</h3>
                    <p className="text-3xl">$99.99<span className="text-sm">/ Month</span></p>
                    <Button className={"bg-[#2E2938]"}>Choose Plan</Button>
                    <p className="flex items-center space-x-2"><Check /> <span>Unlimited Storage</span></p>
                    <p className="flex items-center space-x-2"><Check /> <span>Unlimited Websites</span></p>
                    <p className="flex items-center space-x-2"><Check /> <span>Premium Support</span></p>
                </div>
            </div>
        </div>
    )
}

export default Plans;