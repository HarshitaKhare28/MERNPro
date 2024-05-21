import { useAuth } from "../store/auth";

export const About = () => {

const {user} = useAuth();
    return <>
    <section className="section-about">
            <div className="container grid grid-two-cols">
                <div className="about-content">
                    <h4>Hello {user.username}</h4>
                    <br/>
                    <h1>Why Choose Us?</h1>
                    <p>
                    Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
                    </p>
                    <p>
                        Customization: We understand that every business is unique. Thats why we create solutions that are tailored to your specific needs and goals.
                    </p>
                    <p>
                        Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns.
                    </p>
                    <p>
                        Affordability: We offer competitive pricing without compromising on the quality of our services.
                    </p>
                    <p>
                        Reliability: Count on us to be there when you need us. {"We're"} committed to ensuring your IT environment is reliable and available 24/7.
                    </p>
                    <div className="btn btn-grp">
                        <a href="/contact">
                            <button className="btn">connect now</button>
                        </a>
                        <a href="/services">
                            <button className="btn secondary-btn">learn more</button>
                        </a>
                    </div>
                </div>
                <div className="about-image">
                    <img src="/images/about.png"
                    alt="about page image" 
                    width="600"
                    height="500"
                    />
                </div>
            </div>
        </section>

<section className="section-analytics">
    <div className="container grid grid-four-cols">
        <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
        </div>
        <div className="div1">
            <h2>100,00+</h2>
            <p>Happy Clients</p>
        </div>
        <div className="div1">
            <h2>500+</h2>
            <p>Well known developers</p>
        </div>
        <div className="div1">
            <h2>24/7</h2>
            <p>Client Service</p>
        </div>
    </div>
    </section>
    </>;
  };