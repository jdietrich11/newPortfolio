import React from "react";

import "./Resume.styles.scss";

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <div className="section">
        <div className="my-name">Joshua Dietrich</div>
        <div className="my-title">Web Developer</div>
        <div className="about-info">
          <div className="about-item">
            <div className="address">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Bluffdale, Utah, 84065
            </div>
          </div>
          <div className="email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
              />
            </svg>
            jbdietrich2@gmail.com
          </div>
          <div className="phoneNumber">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            (385) 424-2323
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          ABOUT ME
        </div>
        <div className="section-info">
          I am an aspiring Front End Developer/Full Stack Developer. I am a self
          taught programmer. I've spent my time as a security guard learning
          from Udemy and working on projects. Feel free to look at my work on
          Github, or reach out to jbdietrich2@gmail.com
        </div>
      </div>
      <div className="section">
        <div className="section-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          PROFESSIONAL EXPERIENCE
        </div>
        <div className="job">
          <div className="job-title">Security Site Supervisor</div>
          <a className="company" href="https://www.aus.com/">
            <div className="company">Allied Universal - 3yr - current</div>
          </a>
          <div className="job-description">
            Maintain and develop the highest security standards with existing
            guards. Train new guards to patrol and monitor property. Deter and
            detecting security and safety risks. Detailed reporting every shift.
            Greeting employeeʼs as they enter the building. Maintain and help
            develop security infrustructure like automated guard tracking for
            accoutability. Audited and tracked daily reporting.
          </div>
        </div>
        <div className="job">
          <div className="job-title">
            IT Manager, Supervisor, & Teachers Assistant
          </div>
          <a className="company" href="https://www.kaizenrtc.com/">
            <div className="company">Kaizen Academy RTC - 3.5 yr</div>
          </a>
          <div className="job-description">
            I setup and managed company tech. I setup PC's for students, managed
            the filtration system and keyloggers. I mentored boys at the
            residential treatment home for troubled youth and maintain necessary
            boundaries. Tutor the boys in a variety of school subjects. Monitor
            boys activities, conversations, and engage to build relationships.
          </div>
        </div>
        <div className="job">
          <div className="job-title">Department Supervisor</div>
          <a className="company" href="https://www.skylinesecurity.com/">
            <div className="company">Skyline Secruity Managment - 1 yr</div>
          </a>
          <div className="job-description">
            Developed department structure, boarding process for new employees,
            created training programs, wrote manuals and certification tests,
            assisted the executive team with time sensitive projects, created
            plans to improve employees performance, managed schedules and time
            clock entries.
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          PROGRAMMING EXPERIENCE
        </div>
        <div className="experiences">
          <div className="prog-lang">HTML</div>
          <div className="prog-lang">CSS</div>
          <div className="prog-lang">SCSS</div>
          <div className="prog-lang">C++</div>
          <div className="prog-lang">JavaScript</div>
          <div className="prog-lang">React</div>
          <div className="prog-lang">Hooks</div>
          <div className="prog-lang">Redux</div>
        </div>
      </div>
      <div className="section">
        <div className="section-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          AWARDS
        </div>
        <div className="award">
          <div className="award-name">2019 Kaizen Employee of the year</div>
          <a className="company" href="https://www.kaizenrtc.com/">
            <div className="company">Kaizen Academy RTC</div>
          </a>
        </div>
        <div className="award">
          <div className="award-name">2023 Q2 Supervisor of the Quarter</div>
          <a className="company" href="https://www.aus.com/">
            <div className="company">Allied Unviersal Security Services</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
