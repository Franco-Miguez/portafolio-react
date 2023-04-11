import { useState } from "react";
import iconImage from "../assets/img/icon.svg";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import LinkNavBar from "./LinkNavBar";

function NavBar() {
    const [menuClick, setMenuClick] = useState(false);
    const chaneMenu = () => setMenuClick(!menuClick);

    return (
        <nav className="sticky top-0 z-40">
            <div className="h-20  flex justify-between px-4 shadow-lg shadow-blue-500 bg-gray-900">
                <div className="flex items-center h-full">
                    <img className="h-3/5" src={iconImage} alt="Logo" />
                    <span className="text-lg pl-2 font-bold md:text-2xl">
                        Franco Miguez
                    </span>
                </div>
                <button onClick={chaneMenu} className="text-3xl">
                    <GiHamburgerMenu />
                </button>
            </div>

            <div
                onClick={chaneMenu}
                className={`bg-gray-900/50 ${
                    menuClick && "min-h-screen min-w-full fixed"
                } top-0 left-0 backdrop-blur-sm`}
            ></div>

            <div
                className={`bg-gray-900 shadow-xl shadow-blue-500 fixed top-0 right-0 transition-all duration-300 h-0 w-0 ${
                    menuClick ? "h-3/4 w-5/6 md:w-1/2" : ""
                } rounded-bl-3xl `}
            >
                <button onClick={chaneMenu} className="p-3 text-xl ">
                    <AiOutlineClose />
                </button>
                <ul
                    className={`flex flex-col justify-evenly h-full items-center pb-5 ${
                        !menuClick && "hidden"
                    }`}
                >
                    <LinkNavBar
                        changeMenu={chaneMenu}
                        link="/#i"
                        text="I Am..."
                    />
                    <LinkNavBar
                        changeMenu={chaneMenu}
                        link="/#projects"
                        text="Projects"
                    />
                    <LinkNavBar
                        changeMenu={chaneMenu}
                        link="/#skills"
                        text="Skills"
                    />
                    <LinkNavBar
                        changeMenu={chaneMenu}
                        link="/#courses"
                        text="Courses"
                    />
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;
