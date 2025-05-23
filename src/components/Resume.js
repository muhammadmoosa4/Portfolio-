import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Backend Programming",
    academy: "Backend With Js Taught By Histesh Choudhary",
    dec: "Chai aur Backend is a free, project-based backend development course by Hitesh Choudhary, where you build a YouTube-like video platform using Node.js, Express, MongoDB, and JWT. It covers core backend features like authentication, video uploads, likes, comments, and subscriptions. Ideal for anyone looking to gain real-world backend skills with open-source code on GitHub.",
    startYear: "2023",
    endYear: "2024",
    finalProject : "123"
  },
  {
    id: 2,
    title: "Chai aur Javascript",
    academy: "Javascript Taught By Histesh Choudhary",
    dec: "Chai aur JavaScript is a free, beginner-friendly JavaScript course by Hitesh Choudhary in Hindi. It covers core concepts like variables, functions, DOM manipulation, async programming, and ES6 features, with hands-on projects and code hosted on GitHub. Ideal for anyone starting their JavaScript journey with practical learning.",
    startYear: "2023",
    endYear: "2024",
  },
  {
    id: 3,
    title: "MERN STACK DEVELOPMENT",
    academy: "MERN STACK COURSE BY Angela Yu’s ",
    dec: "Angela Yu’s “The Complete Web Development Bootcamp” is a beginner-friendly Udemy course that teaches full-stack web development using HTML, CSS, JavaScript, Node.js, Express, MongoDB, and more. It includes 16+ real-world projects and covers both front-end and back-end, including React, APIs, and authentication. Ideal for anyone starting from scratch and aiming to become a full-stack developer.",
    startYear: "2022",
    endYear: "2023",
  },
  {
    id: 1,
    title: "SHOPIFY COURSE BY HBA",
    company: "Shopify Course",
    dec: "Shopify Ecommerce Complete Course | Setup to Success by Yasir Sharar is a free, beginner-friendly course on LearnOnline.pk that guides you through building and scaling a Shopify store. It covers product research, store setup, digital marketing (Facebook & TikTok ads), customer service, and expanding to international markets. The course includes 6+ hours of video content, real-world case studies, and a certificate of completion. Ideal for aspiring e-commerce entrepreneurs in Pakistan and beyond. ",
    startYear: "2020",
    endYear: false,
  },
];

const experienceData = [
  {
    id: 3,
    title: "JUNIOR MERN STACK DEVELOPER",
    company: "sharptechitsolution",
    dec: "At SharpTech IT Solution, I worked as a Web Developer, where I was responsible for building and maintaining responsive, scalable, and conversion-focused web applications. I collaborated cross-functionally with UI/UX designers and backend engineers to deliver modern, high-performing websites using technologies like HTML, CSS, JavaScript, Tailwind CSS, and React.js. My work involved developing dynamic front-end interfaces for both SaaS platforms and e-commerce solutions, ensuring mobile-first design, cross-browser compatibility, and seamless user experiences. I followed best practices in component-based architecture, performance optimization, and code maintainability. I also played a key role in debugging issues, deploying feature updates, and continuously enhancing functionality to align with user and business goals.",
    startYear: "8 MONTHS",
    endYear: "-",
  },
  {
    id: 1,
    title: "FREELANCE WORK",
    company: "musaazshop",
    dec: "Worked at Musaaz Shop where I was responsible for end-to-end store management, including inventory updates, product listings, order handling, customer support, and ensuring smooth day-to-day operations of the online and physical store. I optimized the store’s workflow for better efficiency and played a key role in maintaining a seamless customer experience.",
    startYear: "2025",
    endYear: "",
  },
  {
    id: 2,
    title: "FREELANCE WORK",
    company: "diamondwatch",
    dec: "Currently managing The Diamond Shop’s store operations from end to end. Responsible for product listings, inventory updates, order fulfillment, and customer service. I ensure smooth daily operations, maintain accurate stock levels, and contribute to an enhanced shopping experience both online and in-store.",
    startYear: "2025",
    endYear: "",
  },
  {
    id: 3,
    title: "SAAS DEVELOPER",
    company: "Fiverr.com",
    dec: "Designed, developed, and maintained scalable Software-as-a-Service (SaaS) applications with a focus on multi-tenant architecture, cloud integration, RESTful APIs, authentication systems, and responsive user interfaces. Ensured high performance, security, and reliability across deployments while collaborating with cross-functional teams to deliver product enhancements.",
    startYear: "2 MONTHS",
    endYear: "-",
  },
  


];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
