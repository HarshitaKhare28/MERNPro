import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../store/auth";
import {toast} from 'react-toastify';

export const AdminContacts = ()=>{
    const [contactData, setContactData] = useState([]);
    const {authorizationToken} = useAuth();
    const getContactsData = async() =>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts`,{
                method:"GET",
                headers:{
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log(data)
            if(response.ok){
                // console.log(response);
                setContactData(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const deleteContactById = async(id)=>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization: authorizationToken,
                },
            }
        );
        if(response.ok){
            getContactsData();
            toast.success("delete successfully");
        }
    } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getContactsData();
    },[]);
    return <>
    <section className="admin contact-section">
        <h1>Admin Contact Data</h1>
        <div className="container admin-users">
            {contactData.map((curContactData, index)=>{
                const {username,email,message,_id} = curContactData;
                return (
                    <div key={index}>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{message}</p>
                        <button className="btn" onClick={()=>deleteContactById(_id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    </section>
    </>;
};