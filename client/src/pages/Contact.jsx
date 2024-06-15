import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast} from 'react-toastify';
import "./Contact.css";

export const Contact = () => {
  const {API} = useAuth();
  const [contact, setContact] = useState({
      username: "",
      email: "",
      message: "",
  });
const [userData, setUserData] = useState(true);
const {user} = useAuth();

if(userData && user){
  setContact({
    username: user.username,
    email: user.email,
    message: "",
  });

  setUserData(false);
}
const handleInput = (e) => {
    const { name, value } = e.target;

    setContact((prevContact) => ({
        ...prevContact,
        [name]: value,
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(JSON.stringify(contact));
    try {
      const response = await fetch(`${API}/api/form/contact`,{
        method: "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(contact),
      })
      console.log(response);
      if(response.ok){
        setContact({username: "", email: "", message: "",});
        const data = await response.json();
        console.log("data",data);
        toast.success("Message sent");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    console.log(error);
    }
};

return (
  <section>
    <main>
      <div className="section-contact">
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img
                src="/images/support.png"
                alt="contact-section image"
                width="500"
                height="500"
            />
          </div>
          <div className="contact-form">
          <div className="main-heading mb-3">Contact Us</div>
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  id="username"
                  value={contact.username}
                  onChange={handleInput}
                  required
                  autoComplete="off"
              />
          </div>
          <div>
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  value={contact.email}
                  onChange={handleInput}
                  required
                  autoComplete="off"
              />
          </div>
          <div>
              <label htmlFor="message">Message</label>
              <textarea
                  name="message"
                  id="message"
                  rows="3"
                  placeholder="Write a message"
                  value={contact.message}
                  onChange={handleInput}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
            <div className="map">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.7933128712025!2d73.14384077472471!3d19.247837546556426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7942873077383%3A0x9c09fe77e20babe5!2sBirla%20College%20Campus%20Rd%2C%20Gauripada%2C%20Kalyan%2C%20Maharashtra%20421301!5e0!3m2!1sen!2sin!4v1715772514908!5m2!1sen!2sin"
                    width="1550"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </main>
    </section>
);
};

