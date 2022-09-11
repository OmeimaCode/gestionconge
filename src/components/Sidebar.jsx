import { useState } from "react";
const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "Chartf" },
        { title: "Statistiques", src: "Chart" },
        { title: "Demande Congé ", src: "Calendar" },
        { title: "Historiques ", src: "Folder"},
        { title: "Compte", src: "User"},
    ];
    return (
        <div className="flex">
            <div
                className={` ${
                open ? "w-72" : "w-20 "
                } bg-cyan-900 h-screen p-5  pt-8 relative duration-300`}
                >
                <img
                    src="./src/imgs/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                    border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src="./src/imgs/lg.png"
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
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-sky-100 hover:bg-opacity-50 font-semibold hover:text-cyan-900 text-gray-300 text-sm items-center gap-x-4 
                            ${Menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                            } `}
                        >
                            <img src={`./src/imgs/${Menu.src}.png`} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
                <h1 className='text-4xl font-bold animate-pulse text-cyan-600 center'>Home Page</h1>
            </div>
        </div>
    );
};
export default Sidebar;