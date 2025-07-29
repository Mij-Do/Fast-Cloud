import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/ui/Button";

interface IProps {

}

const RootLayout = ({}: IProps) => {
    return (
        <>
            <header>
                <div className="flex flex-col justify-between items-center md:flex-row">
                    <div className="uppercase text-2xl bg-indigo-900 rounded-md w-full md:ml-2 text-center md:text-start md:w-fit p-2">
                        CloudHost
                    </div>
                    <div className="flex flex-col items-center justify-evenly md:space-x-5 md:mx-2 md:flex-row">
                        <Navbar />
                        <Button className="bg-gray-600 hover:bg-gray-500">Login</Button>
                    </div>
                </div>
                <hr className="my-5"/>
                <Outlet/>
            </header>
        </>
    )
}

export default RootLayout;