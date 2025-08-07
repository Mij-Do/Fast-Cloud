import FeatureCard from "./FeatureCard";
import { Headset } from 'lucide-react';
import { Zap } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';

interface IProps {

}

const KeyFeature = ({}: IProps) => {
    return (
        <div>
            <h2 className="text-xl my-10">Key Features</h2>
            <div className="flex flex-col space-y-3 md:flex-row space-x-3">
                <FeatureCard 
                    title="Speed" 
                    description="Experience lightning-fast performance with our optimized infrastructure.">
                    <Zap />
                </FeatureCard>
                <FeatureCard 
                    title="Security" 
                    description="Benefit from robust security measures to protect your data.">
                    <ShieldCheck />
                </FeatureCard>
                <FeatureCard 
                    title="Support" 
                    description="Get 24/7 support from our expert team.">
                    <Headset />
                </FeatureCard>
            </div>
        </div>
    )
}

export default KeyFeature;