import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/ui/Button";

interface IProps {

}

const RootLayout = ({}: IProps) => {
    return (
        <>
            <header className="flex flex-col justify-between items-center md:flex-row">
                <div className="md:mx-2">
                    CloudHost
                </div>
                <div className="flex flex-col items-center justify-evenly md:space-x-5 md:mx-2 md:flex-row">
                    <Navbar />
                    <Button className="bg-gray-600">Login</Button>
                </div>
                <Outlet/>
            </header>
        </>
    )
}

export default RootLayout;