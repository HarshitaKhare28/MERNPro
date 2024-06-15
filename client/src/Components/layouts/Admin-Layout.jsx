import { NavLink,Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import {useAuth} from "../../store/auth";
import { Navigate } from "react-router-dom";

export const AdminLayout = ()=>{
    const {user,isLoading} = useAuth();
    console.log("admin layout",user);
    if(isLoading){
        return <h1>Loading ...</h1>
    }
    if(!user.isAdmin){
        return <Navigate to="/"/>
    }
    return <>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <NavLink to ="/admin/users">
                        <FaUser />
                        users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/admin/contacts">
                        <MdContacts />
                        contacts
                        </NavLink>
                    </li>
                    <li><NavLink to ="/services">
                    <GrServices />
                        services
                        </NavLink>
                    </li>
                    <li><NavLink to="/">
                        <FaHome />
                        Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
}