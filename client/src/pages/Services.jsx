import {useAuth} from "../store/auth";
import "./Services.css";
export const Services = () => {
  const {services } = useAuth();
    return <>
    <section className="section-services">
    <div className="container">
      <h1 className="main-heading">Services Offered by Us</h1>
    </div>
    <div className="container grid grid-three-cols">
      {
        services.map((curElem, index) =>{
          const{price, description, provider, name} = curElem;
          return (
          <div className="card" key={index}>
        <div className="card-image">
          <img src="/images/design.png" alt="services - info" width="300" />
        </div>
        <div className="card-details">
          <div className="grid grid-two-cols">
            <p>{provider}</p>
            <p>{price}</p>
          </div>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
          );
        })
      }
      
    </div>
    </section>
    </>
  };