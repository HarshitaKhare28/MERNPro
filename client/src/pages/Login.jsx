
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast} from 'react-toastify';
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json(); 
      console.log("response from server", res_data.extraDetails);
      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Login Successful");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        // const errorData = await response.json();  
        // console.error("Invalid credentials", errorData.message);
        alert(res_data.extraDetails ? res_data.extraDetails:  res_data.message);
        
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.log(error);
    }
  };

  return (
    <section>
      <main>
        <div className="section-login">
          <div className="container grid grid-two-cols">
            <div className="login-image">
              <img
                src="/images/login.png"
                alt="a boy is trying to login"
                width="500"
                height="500"
              />
            </div>
            <div className="login-form">
              <h1 className="main-heading mb-3">Login Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="enter email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="enter password"
                    autoComplete="off"
                    required
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Login Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

// import { useState } from "react";
// import {useNavigate} from "react-router-dom";
// import { useAuth } from "../store/auth";
// import "./Login.css";

// export const Login = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
// const {storeTokenInLS} = useAuth();
// const handleInput = (e) => {
//   console.log(e);
//   let name = e.target.name;
//   let value = e.target.value;

//   setUser({
//     ...user,
//     [name]: value,
//   });
// };

//   // handle form on submit
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   console.log(user);
//   try{
//     const response = await fetch(`http://localhost:5000/api/auth/login`,{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json",
//       },
//       body:JSON.stringify(user),
//     })

//     console.log("login form",response);

//     if(response.ok){
//       const res_data = response.json();
//       console.log("response from server",res_data);
//       storeTokenInLS(res_data.token);
//       //localStorage.setItem("token",res_data);
//       alert("login successful");
//       setUser({ email: "", password: "",});
//       navigate("/");
//     }else{
//       console.log("invalid credentials");
//     }

//   }catch(error){
//     console.log(error);
//   }
// };
//   return <>
//     <section>
//       <main>
//         <div className="section-login">
//           <div className="container grid grid-two-cols">
//             <div className="login-image">
//               <img
//                 src="/images/login.png"
//                 alt="a boy is trying to login"
//                 width="500"
//                 height="500"
//               />
//             </div>
//             <div className="login-form">
//               <h1 className="main-heading mb-3">Login Form</h1>
//               <br />
//               <form onSubmit={handleSubmit}>
//                 <div>
//                   <label htmlFor="email">email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={user.email}
//                     onChange={handleInput}
//                     placeholder="enter email"
//                     autoComplete="off"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="password">password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={user.password}
//                     onChange={handleInput}
//                     placeholder="enter password"
//                     autoComplete="off"
//                     required
//                   />
//                 </div>
//                 <br />
//                 <button type="submit" className="btn btn-submit">
//                   Login Now
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </section>
//   </>
//   };