
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services,setServices] = useState("");

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);  // Update the state with the new token
  };

  const isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  // Handling logout
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // JWT authentication
  const userAuthentication = async () => {
    if (!token) return;  // Do not fetch if no token
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  //to get services data from db
  const getServices = async()=>{
    try {
      const response = await fetch("http://localhost:5000/api/data/services",{
        method:"GET",
      })
      if(response.ok){
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services error ${error}`);
    }
  }

  useEffect(() => {
    userAuthentication();
    getServices();
  }, [token]);  // Depend on token

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user ,services}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};

// import { createContext,useContext, useEffect } from "react";
// import { useState } from "react";

// export const AuthContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const AuthProvider=({children}) =>{
    
//     const [token, setToken] = useState(localStorage.getItem("token"));
//     const [user, setUser] = useState("");

//     const storeTokenInLS = (serverToken)=>{
//         return localStorage.setItem("token",serverToken);
//     };

//     let isLoggedIn = !!token;
//     console.log("isloggedin",isLoggedIn);

// //tackling the logout
// const LogoutUser = () =>{
//     setToken("");
//     return localStorage.removeItem("token");
//     }
// //jwt authentication
//     const userAuthentication  = async () =>{
//         try{
//             const response = await fetch("http://localhost:5000/api/auth/user",{
//                 method:"GET",
//                 headers:{
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//         if(response.ok){
//             const data = await response.json();
//             console.log("user data",data.userData);
//             setUser(data.userData);
//         }else {
//             console.error("Error fetching user data");
//           }
//         }catch(error){
//             console.log("error",error);
//         }
//     };

//     useEffect(()=>{
//         userAuthentication();
//     });

//     return( <AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser, user}}>
//         {children}
//     </AuthContext.Provider>
//     );
// };


// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuth = () => {
//     const authContextValue = useContext(AuthContext);
//     if (!authContextValue) {
//       throw new Error("useAuth used outside of the Provider");
//     }
//     return authContextValue;
//   };
