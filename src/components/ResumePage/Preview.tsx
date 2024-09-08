import React from 'react';
import './Resume.css'; // Import your custom CSS here

const Preview = () => {
  return (
    <div className="resume">
      {/* Header Section */}
      <header className="resume-header">
        <h1>Jake Doe</h1>
        <p>Software Engineer</p>
        <div className="contact-info">
          <p>Email: jake@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>LinkedIn: linkedin.com/in/jakedoe</p>
        </div>
      </header>

      {/* Skills Section */}
      <section className="resume-section skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, React, Node.js</li>
          <li>Python, Flask, Django</li>
          <li>SQL, PostgreSQL, MongoDB</li>
          <li>Git, Docker, AWS</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="resume-section experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Software Engineer</h3>
          <p>Company ABC | June 2021 - Present</p>
          <ul>
            <li>Developed and maintained full-stack web applications using React and Node.js.</li>
            <li>Collaborated with cross-functional teams to deliver scalable solutions.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Backend Developer</h3>
          <p>Company XYZ | Jan 2020 - May 2021</p>
          <ul>
            <li>Created RESTful APIs with Flask and PostgreSQL.</li>
            <li>Improved backend performance, reducing response times by 30%.</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="resume-section education">
        <h2>Education</h2>
        <div className="education-entry">
          <h3>BS in Computer Science</h3>
          <p>University of California, Santa Cruz | 2016 - 2020</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="resume-section projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Amazon Clone</h3>
          <p>
            Built a full-stack eCommerce application using React, Next.js, and TypeScript. Developed REST and GraphQL
            APIs for the backend.
          </p>
        </div>
        <div className="project">
          <h3>WhatsMyImage</h3>
          <p>
            Developed an image recognition web app using Flask, React, and PyTorch to predict objects in images with
            a pre-trained ResNet model.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Preview;
