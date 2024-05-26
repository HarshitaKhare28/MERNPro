import { NavLink,Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
export const AdminLayout = ()=>{
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