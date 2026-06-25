import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SAINIVAS
              <br />
              <span>KATIKA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Data Engineer</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Data Engineering</div>
              <div className="landing-h2-2">Backend Development</div>
              <div className="landing-h2-3">Python & SQL</div>
              <div className="landing-h2-4">Kafka & AWS</div>
              <div className="landing-h2-5">Remote Opportunities</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
