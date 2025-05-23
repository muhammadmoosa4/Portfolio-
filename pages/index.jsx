import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import cv from "../public/resume_final.png"
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
 


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    emailjs.send(
      "service_q6tro1f",     // Replace with your actual Service ID
      "template_jw0hztb",    // Replace with your actual Template ID
      formData,
      "ebzYRWY3-rLHwwZc6"      // Replace with your actual Public Key
    )
    .then(() => {
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      alert("Something went wrong. Please try again later.");
    });
  };

  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Muhammad</b> Moosa{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am <strong>MERN stack and shopify Web Developer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                      I specialize in building responsive, user-friendly websites that bring ideas to life. Let’s create something amazing together!
                    </p>
                  </div>
                  <div className="menu-social-links">
                    <a
                      href="https://www.linkedin.com/in/muhammadmoosa123/"
                      target="_blank"
                      className="scrolla-element-anim-1"
                      title="LinkedIn"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href="https://www.instagram.com/muhammadmoosa1431/"
                      target="_blank"
                      className="scrolla-element-anim-1"
                      title="Instagram"
                    >
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    href={cv}
                    download="cv.pdf"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                {/* <img
                  decoding="async"
                  src="assets/images/profile2.png"
                  alt="<b>Zoé</b> Miller"
                /> */}
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        1 <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong>Experience</strong>
                      </span>
                    </li>
                    <li>
                      <span className="num">15</span>
                      <span className="value">
                        Completed <strong>Projects</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Web Developer </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center  mt-5" id="skills-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Talent</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> MongoDB </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Proficient in MongoDB: Designing and Managing NoSQL Databases for Scalable and High-Performance Applications!
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "100%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        100 <span>%</span>
                      </span>
                    </div>
                  </div>

                </div>

                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> CSS </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Expert in CSS: Designing Visually Stunning and Responsive Layouts with Advanced Styling Techniques!
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "100%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        100 <span>%</span>
                      </span>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> JavaScript </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Proficient in JavaScript: Building Dynamic, Interactive Web Applications with Cutting-Edge Functionality!
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "92%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        92 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> React </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Skilled in React: Developing High-Performance, Component-Based User Interfaces with Modern Best Practices!
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        85 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Node.js </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Proficient in Node.js: Building Scalable and Efficient Server-Side Applications with Robust APIs!
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Express </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Skilled in Express: Creating Fast and Flexible Web Applications with Streamlined API Development!
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "80%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        80 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span>Next js</span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Proficient in Next.js: Creating High-Performance, SEO-Friendly React Applications with Server-Side Rendering and Static Generation!
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        75 <span>%</span>
                      </span>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span>Shopify</span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Proficient in Shopify: Developing Custom, User-Friendly E-Commerce Stores Optimized for Sales and Seamless Customer Experiences!
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        89 <span>%</span>
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom  mt-5"
        id="services-section"
      >
        {/* Heading */}
        <div className="lui-heading mt-5">
          <div className="container">
            <div className="m-titles align-center p-3">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate  mt-5"
                data-splitting="words"
                data-animate="active"
              >
                <span className="mt-5"> What I Do </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
          <div className="container" >
            <Swiper
              {...servicesSliderProps}
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              {/*branding service section */}

              <SwiperSlide className="swiper-slide">
                <div className="services-item">

                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Branding Websites  </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      {" Designing unique, visually striking branding websites that communicate your brand’s identity, build loyalty, and create a lasting digital presence. "}
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    Contact Me{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> E-commerce Websites </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Building high-performance, visually engaging e-commerce websites tailored to your business—delivering a seamless and compelling shopping experience for your customers.
                      </p>
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    Contact Me{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>.
              <SwiperSlide className="swiper-slide">
                <div className="services-item">

                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Portfolio Websites </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Crafting visually striking portfolio websites that showcase your unique style and skills—ideal for freelancers, artists, and agencies looking to impress and attract clients.
                      </p>
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    Contact Me{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">

                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Software Applications (SAAS)</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Developing robust, scalable SaaS applications tailored to solve real-world problems and drive business growth.
                      </p>
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    Contact Me{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">

                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> RESTful API Design & Integration</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Designing and integrating robust RESTful APIs to enable seamless communication between frontend and backend systems.
                      </p>
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    Contact Me{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">

                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Database Design & Management with MongoDB</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Designing efficient, scalable MongoDB databases optimized for high performance and flexibility.
                      </p>
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    Contact Me{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">

                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Application Maintenance & Bug Fixes</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Providing reliable application maintenance and swift bug fixes to ensure smooth and uninterrupted performance.
                      </p>
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    Contact Me{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>
      </section>



      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Cases</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Resume */}
      <Resume />
      {/* Section - Testimonials */}

      {/* Section - Pricing */}

      {/* Section - Blog */}
      {/* Section - Contacts */}
      <section className="lui-section lui-gradient-bottom p-3" id="contact-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span style={{ marginTop: "800px" }}> Contact Me </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  Let’s <b>Talk About Ideas</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-map" />
                    </div>
                    <div className="title">
                      <span> Address </span>
                    </div>
                    <div className="lui-text">
                      <span> nazimabad no 4 , karachi , sindh</span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-user" />
                    </div>
                    <div className="title">
                      <span> Freelance </span>
                    </div>
                    <div className="lui-text">
                      <span> Available Right Now </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-envelope" />
                    </div>
                    <div className="title">
                      <span> Email </span>
                    </div>
                    <div className="lui-text">
                      <span> muhammadmoosa2034@gmail.com</span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-address-book" />
                    </div>
                    <div className="title">
                      <span> Phone </span>
                    </div>
                    <div className="lui-text">
                      <span>+92 3360845058</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div className="contacts-form scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-1.png)",
                    }}
                  />
                  <div className="contacts-form">
                    <form onSubmit={handleSubmit} id="cform">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Full Name <b>*</b>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Email Address <b>*</b>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Subject <b>*</b>
                              <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Message <b>*</b>
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                          <div className="terms-label">
                            * Accept the terms and conditions.
                          </div>
                          <button type="submit" className="btn">
                            <span>Send Message</span>
                          </button>
                        </div>
                      </div>
                    </form>

                    {success && (
                      <div className="alert-success" style={{ display: "block", marginTop: "1rem" }}>
                        <p>Thanks, your message has been sent successfully.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Contact Me </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
