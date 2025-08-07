import type { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({children, title, description}: IProps) => {
    return (
        <div className="bg-[#423D54] rounded-md flex flex-col space-y-3 p-2 w-full md:h-60">
            <div>
                {children}
            </div>
            <h3>{title}</h3>
            <p className="text-[#A69EB8]">{description}</p>
        </div>
    )
}

export default FeatureCard;