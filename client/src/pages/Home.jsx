import { NavLink } from "react-router-dom";

export const Home = () => {
    return <>
    <main>
        <section className="section-home">
            <div className="container grid grid-two-cols">
                <div className="home-content">
                <p>We are the Best IT Company,</p>
                    <h1>Welcome to MERNPro</h1>
                    <p>Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At MERNPro, we specialize in providing innovative IT services and solutions tailored to meet your unique needs.Our expert team ensures seamless integration with your existing systems, giving your business the technology-driven edge to thrive in {"today's"} competitive landscape.</p>
                    <div className="btn btn-grp">
                        <NavLink to ="/contact">
                            <button className="btn">connect now</button>
                        </NavLink>
                        <NavLink to ="/services">
                            <button className="btn secondary-btn">learn more</button>
                        </NavLink>
                    </div>
                </div>
                <div className="home-image">
                    <img src="/images/home.png"
                    alt="home page image" 
                    width="500"
                    height="500"
                    />
                </div>
            </div>
        </section>
    </main>

    {/* analytics section */}
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
    
    <section className="section-home">
            <div className="container grid grid-two-cols">
            <div className="home-image">
                    <img src="/images/design.png"
                    alt="home page image" 
                    width="500"
                    height="500"
                    />
                </div>
                <div className="home-content">
                    <h1>Getting Started</h1>
                    <p>Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and {"let's"} discuss how MERNPro can help your busines thrive in the digital age.Experience unparalleled support and innovative solutions tailored to your unique needs. Together, we can build a brighter, more technologically advanced future for your company</p>
                    <div className="btn btn-grp">
                        <a href="/contact">
                            <button className="btn">connect now</button>
                        </a>
                        <a href="/services">
                            <button className="btn secondary-btn">learn more</button>
                        </a>
                    </div>
                </div> 
            </div>
        </section>
    </>;
  };