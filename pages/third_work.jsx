import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";
const WorkSingleISotope = dynamic(
  () => import("../src/components/WorkSingleISotope"),
  {
    ssr: false,
  }
);
const Third_work = () => {
  const [videoToggle, setVideoToggle] = useState(false);
  return (
    <Layout pageClassName={"portfolio-template"}>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        {/* Heading */}
        <div className="container">
          <div className="m-titles align-left">
            <h1
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Youtube Backend Clone </span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>backend project</span>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="v-line v-line-right v-line-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="m-details">
                  <div className="details-label">
                    <span>Project</span>
                    <strong>
                      <span>Youtube Backend Clone</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      <span> Node.js,Express.js,MongoDB,Mongoose,JWT,CORS,Dotenv,Nodemon,Postman,ES Modules (ESM) </span>
                    </strong>
                  </div>
                  
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://github.com/muhammadmoosa4/youtube-full-stack"
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Live Preview</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Image */}
      <div className="section section-inner">
        {/* Image */}
        <div className="m-image-large">
          <div className="image">
            <div
              className="img js-parallax"
              style={{
                backgroundImage:
                  "url(backend.png)",
              }}
            />  
          </div>
        </div>
      </div>
      
      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h4>Description</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  🎬 YouTube Backend Clone – MERN Stack (Backend Only)
📌 Project Overview
Built a fully functional YouTube backend clone from scratch using Node.js, Express.js, and MongoDB, mimicking core functionalities of YouTube's backend architecture. This project focuses on RESTful API design, secure authentication, and data-driven operations for managing users, videos, channels, and interactions.
<br />
⚙️ Core Features
<br />
✅ User Authentication & Authorization
<br />
Sign-up and login with JWT-based authentication
<br />
Middleware for protected routes
<br />
User role & identity management
<br />
🎥 Video Management
<br />
Upload new video data (metadata only, no real file storage yet)
<br />
Update video details (title, description, thumbnail, etc.)
<br />
Delete videos
<br />
Get single video or all videos of a user
<br />
Filter videos by title, publish status, or user
<br />
Sort videos by date, views, or alphabetical order
<br />
🧑‍💻 Channel Management
<br />
Subscribe and unsubscribe to other users (channels)
<br />
Toggle subscription status (true/false)
<br />
Track subscribers count dynamically
<br />
👍 Like/Dislike System
<br />
Like or dislike any video
<br />
Toggle state (remove like if already liked, etc.)
<br />
Prevent multiple likes/dislikes by the same user
<br />
Store liked videos per user
<br />
💬 Comments
<br />
Add comments to videos
<br />
Fetch all comments for a video
<br />
Delete your own comments
<br />



                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                 🔍 Video Filtering & Search
                 <br />
Filter by:
<br />
Title (partial match)
<br />
User ID
<br />
Publish status (public/private)
<br />
Sort results by:
<br />
Newest/Oldest
<br />
Title (A–Z / Z–A)
<br />
🧱 Architecture & Technical Stack
<br />
🌐 Backend:
<br />
Node.js
<br />
Express.js
<br />
MongoDB
<br />
Mongoose
<br />
JWT (JSON Web Token)
<br />
CORS
<br />
Dotenv
<br />
Nodemon
<br />
ES Modules (ESM)
<br />
🧪 Tools:
<br />
Postman (for API testing)
<br />
Git & GitHub (for version control)
<br />
🔐 Security
<br />
JWT-based token authentication
<br />
Protected routes via middleware
<br />
Secure storage of sensitive data via .env variables
  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Gallery */}
      
      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          
        </div>
      </section>
      {/* Section - Video */}
    
      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/">
              <a>
                <span
                  className="nav-arrow scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Next Project</span>
                </span>
                <span
                  className="h-title splitting-text-anim-2 scroll-animate"
                  data-splitting="chars"
                  data-animate="active"
                >
                  <span></span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Third_work;
