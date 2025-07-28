import { NavLink } from "react-router-dom";

interface IProps {

}

const Navbar = ({}: IProps) => {
    return (
        <nav className="my-5">
            <ul className="uppercase flex flex-col md:flex-row space-y-5 md:space-y-0 justify-end items-center md:space-x-5">
                <li className="cursor-pointer"><NavLink to="products">Products</NavLink></li>
                <li className="cursor-pointer"><NavLink to="solutions">Solutions</NavLink></li>
                <li className="cursor-pointer"><NavLink to="pricing">Pricing</NavLink></li>
                <li className="cursor-pointer"><NavLink to="resourses">Resourses</NavLink></li>
                <li className="cursor-pointer"><NavLink to="/">GetStarted</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;