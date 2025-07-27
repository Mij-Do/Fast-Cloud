import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

interface IProps {

}

const RootLayout = ({}: IProps) => {
    return (
        <>
            <header>
                <Navbar />
                <Outlet/>
            </header>
        </>
    )
}

export default RootLayout;