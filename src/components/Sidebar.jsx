import {BiLogOut} from "react-icons/bi"
import {AiOutlineDashboard , AiOutlineClockCircle} from "react-icons/ai"
import {FaRegCalendarCheck} from "react-icons/fa"

import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
    const admin=true;
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "Chartf" , route:"/",icon:<AiOutlineDashboard className="text-2xl"/> },
        { title: "Demande Congé ", src: "Calendar" ,route:"demandeconge" , icon: <FaRegCalendarCheck className="text-2xl"/> },
        { title: "Historique ", src: "Folder",route:"historique",icon: <AiOutlineClockCircle className="text-2xl"/>},
    ];
    return (
            <div
                className={` flex flex-col sticky top-0 left-0 ${
                open ? "min-w-[300px]" : "max-w-[90px]"
                } bg-cyan-900 h-screen p-5  pt-8 relative duration-300`}
                >
                <img
                    src="/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                    border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src="/lg.png"
                        className={`cursor-pointer duration-500 ${
                        open && "rotate-[360deg]"
                        }`}
                    />
                    <h1
                        className={`text-white origin-left font-semibold text-xl duration-200 ${
                        !open && "scale-0"
                        }`}
                    >
                        Gestion Congés
                    </h1>
                </div>
                <ul className="pt-6 flex-grow ">
                    {Menus.map((Menu, index) => (
                        <Link
                            to={Menu.route}
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-sky-100 hover:bg-opacity-50 font-semibold hover:text-cyan-900 text-gray-300 text-sm items-center gap-x-4 
                            ${Menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                            } `}
                        >
                            {Menu.icon}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </Link>
                    ))}
                </ul>
                { admin && <LougoutButton open={open}/> }
                
            </div>
        
    );
};

export const LougoutButton = ({open}) => {
    return (
        <button className="text-white flex justify-center items-center gap-1 opacity-80 hover:opacity-100 hover:scale-110 transition-all">
            <BiLogOut /> 
            {open && <span>Déconnecter</span>}
        </button>
    )
}


export default Sidebar;