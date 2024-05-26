import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast} from 'react-toastify';
import "./Register.css" ;
export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
const {storeTokenInLS} = useAuth();
  const handleInput = (e) => {
    console.log(e);
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
    console.log(user);
    try{
    const response = await fetch(`http://localhost:5000/api/auth/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    })
    //console.log(response);
    const res_data = await response.json();
      console.log("response from server",res_data.extraDetails);
    if (response.ok) {
      storeTokenInLS(res_data.token);
      toast.success("Registration Successful");
      setUser({ username: "", email: "", phone: "", password: "" });
      navigate("/");
    }
     else{
      //toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      alert(res_data.extraDetails ? res_data.extraDetails:  res_data.message);
    }
  }catch(error){
    alert("An error occurred. Please try again later.");
    console.log(error);
  }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/signup.png"
                  alt="a girl is trying to signup"
                  width="500"
                  height="500"
                />
              </div>
              
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="enter email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="enter phone"
                      value={user.phone}
                      onChange={handleInput}
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
                      required
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};