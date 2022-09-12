import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const HomePage = () => {
    return (
        <div className="relative flex flex-row">
            <Sidebar />
            <Outlet />
        </div>
    );
}
export default HomePage;
