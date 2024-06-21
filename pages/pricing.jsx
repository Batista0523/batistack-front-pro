import Layout from "@/src/layout/Layout";
import { useState } from "react";

const Pricing = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpansion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Layout noHeaderBg pageName={"Pricing"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/headBack1.png)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>
              Pick a Plan
              <br /> That’s Right For You
            </h2>
            <a href="#">Pricing Packages</a>
          </div>
        </div>
      </section>
      <section
        className="plans-pricing gap"
        style={{ backgroundColor: "#f3f8fb" }}
      >
        <div className="container">
          <div className="heading">
            <h6>Plans &amp; Pricing</h6>
            <h2>
              Ready to
              <br /> get started
            </h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="Pricing-style">
                <div className="standard">
                  <h5>Starter Package</h5>
                  <span>
                    <sup>$</sup>499<sup>.99</sup>
                  </span>
                </div>
                <p>
                  Get your online presence started with our Starter Package.
                  Perfect for simple.
                </p>
                <br />
                <h4>
                  Technologies: <p>HTML/CSS</p>
                </h4>
                <h4>
                  Monthly Maintenance: <p>$19.99</p>
                </h4>
                <ul>
                  <h4>Features:</h4>
                  <li>
                    <i className="fa-solid fa-check" />
                    Custom design
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Responsive layout
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    SEO optimization
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Basic contact form
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Basic Support
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    Performance optimization
                  </li>
                </ul>
                <a href="/contacts" className="themebtu">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="Pricing-style">
                <div className="standard">
                  <h5>Professional</h5>
                  <span>
                    <sup>$</sup>799<sup>.99</sup>
                  </span>
                </div>
                <p>
                  Experience seamless interactivity and stunning visuals with
                  our Professional Front-End Package. Tailored for dynamic,
                  user-friendly interfaces, this package ensures your website
                  stands out with cutting-edge design and functionality.
                </p>
                <br />
                <h4>
                  Technologies: <p>HTML/CSS, JavaScript, React</p>
                </h4>
                <h4>
                  Monthly Maintenance: <p>$49.99</p>
                </h4>
                <p>
                  <strong>Starter Package Plus:</strong>
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    Custom UI/UX design
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Component-based architecture
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Performance optimization
                  </li>
                </ul>
                <a href="/contacts" className="themebtu">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="Pricing-style mb-0">
                <div className="standard">
                  <h5>Enterprise</h5>
                  <span>
                    <sup>$</sup>2999<sup>.99</sup>
                  </span>
                </div>

                <p>
                  Elevate your business with our Enterprise Full-Stack Solution.
                  Tailored for scalability and robust performance, this package
                  offers comprehensive features and dedicated support to meet
                  the demands of large businesses. Benefit from advanced
                  technologies and a proactive approach to ensure your digital
                  infrastructure is always ahead.
                </p>
                <br />
                <h4>
                  Technologies:{" "}
                  <p>
                    HTML, CSS, JavaScript, React, Node.js, Express, PostgreSQL
                  </p>
                </h4>
                <br />
                <h4>
                  Monthly Maintenance: <p>Based on selected server tier</p>
                </h4>
                <li>
                  <i className="fa-solid fa-check" />
                  Basic Server: $19.99/month
                </li>
                <li>
                  <i className="fa-solid fa-check" />
                  Standard Server: $49.99/month
                </li>

                <li>
                  <i className="fa-solid fa-check" />
                  Enhanced Server: $79.99/month
                </li>

                <li>
                  <i className="fa-solid fa-check" />
                  Premium Server: $129.99/month
                </li>
                <br />
                <p>
                  <strong>Professional Package Plus:</strong>
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    RESTful API development
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Advanced security features
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Real-time functionalities
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    User authentication and authorization
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Database design and integration
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    CRUD operations
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Scalability and load balancing
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Advanced analytics
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check" />
                    Dedicated support
                  </li>
                </ul>
                <a href="/contacts" className="themebtu">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-4">
            <img alt="dots1" src="assets/img/dots1.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>
      <section className="faq-section gap">
        <div className="container">
          <div className="section-heading">
            <h6>Have a Question?</h6>
            <h2>Frequently Asked Questions</h2>
            <img alt="heading line" src="assets/img/headingline.png" />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-category">
                <h4>Popular Questions</h4>
                <div className="accordion" id="popular-questions">
                  <div className="accordion-item">
                    <h6
                      className="toggle-btn"
                      onClick={() => toggleExpansion("services")}
                    >
                      What services do you offer?{" "}
                      {expandedId === "services" ? "➖" : "➕"}
                    </h6>
                    {expandedId === "services" && (
                      <div className="accordion-content">
                        <p>
                          We offer full-stack development services including
                          front-end technologies like HTML, CSS, JavaScript, and
                          React, as well as back-end technologies such as
                          Node.js, Express, and databases like PostgreSQL.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="accordion-item">
                    <h6
                      className="toggle-btn"
                      onClick={() => toggleExpansion("maintenance")}
                    >
                      Do you provide ongoing maintenance?{" "}
                      {expandedId === "maintenance" ? "➖" : "➕"}
                    </h6>
                    {expandedId === "maintenance" && (
                      <div className="accordion-content">
                        <p>
                          Yes, we offer monthly maintenance plans to ensure your
                          applications remain secure, up-to-date, and optimized
                          for performance.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="accordion-item">
                    <h6
                      className="toggle-btn"
                      onClick={() => toggleExpansion("custom-features")}
                    >
                      Can I request custom features for my project?{" "}
                      {expandedId === "custom-features" ? "➖" : "➕"}
                    </h6>
                    {expandedId === "custom-features" && (
                      <div className="accordion-content">
                        <p>
                          Absolutely! We provide customization services tailored
                          to your specific needs, ensuring your project meets
                          all requirements and expectations.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="accordion-item">
                    <h6
                      className="toggle-btn"
                      onClick={() => toggleExpansion("get-started")}
                    >
                      How do I get started with your services?{" "}
                      {expandedId === "get-started" ? "➖" : "➕"}
                    </h6>
                    {expandedId === "get-started" && (
                      <div className="accordion-content">
                        <p>
                          Getting started is easy! Simply contact us through our
                          website or by phone, and our team will guide you
                          through the process from consultation to project
                          kickoff.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-category">
                <h4>Security and Privacy</h4>
                <div className="accordion" id="security-privacy">
                  <div className="accordion-item">
                    <h6
                      className="toggle-btn"
                      onClick={() => toggleExpansion("data-security")}
                    >
                      How do you ensure data security?{" "}
                      {expandedId === "data-security" ? "➖" : "➕"}
                    </h6>
                    {expandedId === "data-security" && (
                      <div className="accordion-content">
                        <p>
                          We follow industry best practices for data security,
                          including encryption, regular security audits, and
                          access controls to protect your sensitive information.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="accordion-item">
                    <h6
                      className="toggle-btn"
                      onClick={() => toggleExpansion("data-backup")}
                    >
                      Is my data backed up regularly?{" "}
                      {expandedId === "data-backup" ? "➖" : "➕"}
                    </h6>
                    {expandedId === "data-backup" && (
                      <div className="accordion-content">
                        <p>
                          Yes, we perform regular backups of your data to ensure
                          data integrity and availability in case of unexpected
                          events.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="accordion-item">
                    <h6
                      className="toggle-btn"
                      onClick={() => toggleExpansion("privacy")}
                    >
                      How can I be assured of my privacy?{" "}
                      {expandedId === "privacy" ? "➖" : "➕"}
                    </h6>
                    {expandedId === "privacy" && (
                      <div className="accordion-content">
                        <p>
                          Your privacy is our priority. We adhere to strict
                          confidentiality agreements and privacy policies to
                          safeguard your personal and business information.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="accordion-item">
                    <h6
                      className="toggle-btn"
                      onClick={() => toggleExpansion("server-security")}
                    >
                      Are your servers located in secure data centers?{" "}
                      {expandedId === "server-security" ? "➖" : "➕"}
                    </h6>
                    {expandedId === "server-security" && (
                      <div className="accordion-content">
                        <p>
                          Yes, our servers are hosted in secure data centers
                          with robust physical and digital security measures to
                          protect against unauthorized access and breaches.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
