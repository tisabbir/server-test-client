import { Outlet } from "react-router-dom";
import Nav from "./Nav";


const Root = () => {
    return (
        <div>
            <Nav/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;