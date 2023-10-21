import Diagram from "./Diagram/Diagram"
import "./Hobbify.css";
import h3l from '../images/h3l.png';
import h3r from '../images/h3r.png';

export default function Hobbify() {
  return (
    <div className="hobbify">
      <div className="sectionAndSpecs">
        <section className="sectionTop">I designed an iOS mobile app tailored to meet the unique needs of creative individuals of different skill levels that makes contacting experts easy and accessible effectively bridging a gap in the market.
        </section>
        <div className="projectSpecs">
          <div className="specsColumn">
            <span>Role</span>
            <span>UX/UI</span>
          </div>
          <div className="specsColumn">
            <span>Duration</span>
            <span>5 Months</span>
          </div>
          <div className="specsColumn">
            <span>Date</span>
            <span>2023</span>
          </div>
        </div>
      </div>
      <div className="framesImageContainer">
        <img className="mockup" src={h3l} width="100%" height="500px" alt="Hobbify project mockups" />
        <img className="mockup framesRight" src={h3r} width="100%" height="500px" alt="Hobbify project mockups" />
      </div>
      {/* <div className="projectSpecs">
        <button className="button">Scroll for Case Study</button>
        <button className="button"> Watch Video Presentation</button>
      </div> */}
      <div className="specsColumn">
      </div>
      <Diagram />
    </div>
  )
}