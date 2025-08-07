import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <div className="text-[#A69EB8] space-y-5">
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-center">
                <p>About</p>
                <p>Contact</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex space-x-5 justify-center items-center">
                <p><Facebook /></p>
                <p><Twitter /></p>
                <p><Instagram /></p>
            </div>
            <div className='text-center'>
                <p>@2024 CloudHost. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;