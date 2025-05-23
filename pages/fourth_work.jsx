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
const Fourth_work = () => {
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
              <span>Fin Expense Ai</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Helping you to Digitize your Expenses</span>
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
                      <span>persnol</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      <span>Full Stack AI Fianace Platform with Next JS, Supabase, Tailwind, Prisma, Inngest, ArcJet, Shadcn UI</span>
                    </strong>
                  </div>
                  
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://github.com/muhammadmoosa4/finance-ai-app/tree/main"
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Github Code </span>
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
                  "url(finnance.png)",
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
                  # Full Stack AI Fianace Platform with Next JS, Supabase, Tailwind, Prisma, Inngest, ArcJet, Shadcn UI
<br />
<br />
💼 Finance App – Features Overview
<br />
A powerful, full-stack personal finance management application designed to help users take control of their financial lives. Below is a detailed breakdown of the key features:
<br />
🔐 Authentication & Security
<br />
User Registration & Login – Secure sign-up/login with encrypted passwords.
<br />
JWT Authentication – Protects user routes and data with JSON Web Tokens.
<br />
Session Management – Persistent login sessions with auto-expiry handling.
<br />
📥 Income & Expense Tracking
<br />
Add Income/Expense – Easily log and edit income or expense entries.
<br />
Categorization – Assign categories (e.g., Food, Rent, Salary) for organized tracking.
<br />
Recurring Transactions – Support for repeating incomes/expenses (e.g., salary, rent).
<br />
Multi-Currency Support (optional) – Convert and display amounts in preferred currency.
<br />
📊 Budgeting & Financial Insights
<br />
Budget Setup – Set monthly/weekly spending limits by category.
<br />
Spending Alerts – Notifications when nearing or exceeding budget.
<br />
Progress Tracking – Visual indicators of budget status.
<br />
🧾 AI Receipt Scanner
<br />
Smart Receipt Scanning – Upload receipts and extract data using OCR & AI.
<br />
Auto-Categorization – Automatically identifies and categorizes expenses from receipts.
<br />
Manual Review & Edit – Users can confirm or adjust extracted details.
<br />
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                 
📂 Transaction History
<br />
Filter & Search – Search by date, category, or keyword.
<br />
Export Options – Export data in CSV or PDF formats for records.
<br />
Editable Records – Edit or delete previous transactions.
<br />
📈 Reports & Dashboard
<br />
Visual Reports – Pie charts, bar graphs, and line charts of spending trends.
<br />
Savings Overview – Monitor monthly savings and compare progress.
<br />
Custom Date Ranges – Generate reports for custom time periods.
<br />
🎯 Goal Management
<br />
Set Financial Goals – Define savings or budgeting goals (e.g., "Save $5000").
<br />
Goal Progress Bar – Track how close users are to achieving their goals.
<br />
Deadline Reminders – Get alerts as goal deadlines approach.
<br />
🔔 Notifications & Alerts
<br />
Budget Alerts – Real-time notifications when spending limits are hit.
<br />
Goal Reminders – Notify users of upcoming deadlines or progress gaps.
<br />
📱 Responsive UI
<br />
Mobile-Friendly Design – Fully responsive layout using modern UI frameworks.
<br />
Dark Mode Support – Seamless toggle between light and dark themes.
<br />
Clean & Intuitive UX – Minimalist, accessible design focused on ease-of-use.
<br />
🛠️ Tech Stack
<br />
Frontend – React.js with Tailwind CSS
<br />
Backend – Node.js, Express.js
<br />
Database – Supabase (MYSQL)
<br />
Authentication – JWT, Bcrypt
<br />
AI/OCR – Tesseract.js or third-party AI APIs (for receipt scanning)
```
<br />
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
      <div className="section section-inner m-video-large">
        <div className={`video ${videoToggle ? "active" : ""}`}>
          <div
            className="img js-parallax"
            style={{ backgroundImage: "url(diamond_1.png)" }}
          />
          <iframe
            className="js-video-iframe"
            src="m.mp4"
          />
          <div className="play" onClick={() => setVideoToggle(true)} />
        </div>
      </div>
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
export default Fourth_work;
