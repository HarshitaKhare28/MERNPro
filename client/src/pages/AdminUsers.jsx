import { useEffect } from "react";
import { useState } from "react";
import {useAuth} from "../store/auth";
//import {Link} from "react-router-dom";

export const AdminUsers = ()=>{
    const [users, setUsers] = useState([]);
    const {authorizationToken} = useAuth();
    const getAllUsersData = async() =>{
        try {
            const response = await fetch("http://localhost:5000/api/admin/users",{
                method:"GET",
                headers:{
                    Authorization: authorizationToken,
                },
            });
            const data  = await response.json();
            console.log(`users ${data}`);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }
    //deleting the user
    const deleteUser = async (id)=>{
        try{
        const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization: authorizationToken,
                },
            });
            const data  = await response.json();
            console.log(`users after delete ${data}`);
            if(response.ok){
                getAllUsersData();
            }
        console.log(id);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() =>{
        getAllUsersData();
    },[]);
    return (<>
    <section className="admin-users-section">
        <div className="container">
            <h1>Admin users data</h1>
        </div>
        <div className="conatiner admin-users">
            <table border="2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        {/* <th>Update</th> */}
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((curUser, index)=>{
                    //<h2 >{curUser.username}</h2>
                return <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    {/* <td><Link to={`/admin/users/${curUser._id}`}>Edit</Link></td> */}

                    <td><button onClick={()=>deleteUser(curUser._id)}>Delete</button></td>
                </tr>
                })}
                </tbody>
            </table>
        
        </div>
        </section>
    </>
    )
};