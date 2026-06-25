import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineering Intern</h4>
                <h5><a href="https://www.ey.com" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>EY ↗</a></h5>
              </div>
              <h3>Jan–April 2026</h3>
            </div>
            <p>Worked on data processing, SQL-based analysis, and workflow automation. Assisted in data transformation, reporting, and quality validation while gaining exposure to cloud technologies, data pipelines, Git, and enterprise engineering practices.
              <br/><br/>
              <span style={{color: '#ffd700'}}>Highlights:</span>  SQL & Python data processing, ETL & data validation, workflow automation, Git & cloud exposure, and enterprise engineering practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Andhra University</h4>
                <h5><a href="" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}></a></h5>
              </div>
              <h3>2020–2023</h3>
            </div>
            <p>
              Bachelor of Science in Computer Science
              <br/><br/>
              <span style={{color: '#ffd700'}}>Highlights:</span> Strong foundation in Computer Science, SQL, DBMS, Data Structures, Algorithms, and Software Development. Applied concepts through academic projects and hands-on learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Personal Projects</h4>
                <h5></h5>
              </div>
              <h3>2023–NOW</h3>
            </div>
            <p>
              Built hands-on projects in Data Engineering, Backend Development, and Web Development using Python, SQL, Kafka, AWS, React, and TypeScript.
              <br/><br/>
              <span style={{color: '#ffd700'}}>Highlights:</span> Developed real-time data pipeline projects using Python and Kafka, built ETL workflows for data processing, created backend applications with database integration, and designed a responsive portfolio website using React and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
