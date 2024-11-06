import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'; 
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-2 border-b-black py-4">
        <div className="container mx-auto flex justify-between items-center">

            <div className="flex-1 flex justify-center md:justify-start">
                <Link to = "/" className="flex text-1xl font-bold tracking-tight text-black ">
                    <img src={logo} alt="company logo" className="md:h-8 md:mr-4 h-10"/>
                    <span className="hidden md:flex items-center text-1xl font-bold tracking-tight text-black -mt">
                        Protein-Protein-I-Want-Protein
                    </span>
                </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <MobileNav/>
            </div>

            {/* Web Navigation */}
            <div className="hidden md:block">
                <MainNav/>
            </div>

        </div>
    </div>
  )
};

export default Header;