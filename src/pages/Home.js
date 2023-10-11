import "./Home.css"
import { ReactComponent as Icon } from '../icons/arrow.svg'
import { Link } from 'react-router-dom';
import image from '../images/mockupHobbify.png'
import MobileFrame from "./MobileFrame";


export default function Home() {
  return (
    <div className="home">
      <div className="hero">

        <header className="header">UX/UI Designer & Frontend Developer</header>

        <div className="descriptionAndProjects">
          <p className="description">Hi! I'm Marta, a designer and coder who thrives in merging creativity with design and programming to create human-centered, aesthetically pleasing, and technically feasible solutions to real-life problems with focus on innovation and ethical design.
          </p>
          <div className="projectsArrowContainer">
            <Icon />
            <span className="projectsHeader">Projects</span>
          </div>
        </div>

      </div>


      <div className="firstProject">

        <Link to="/hobbify">
          <div className="hobbify">
            <img className="projectMockup" src={image} width="100%" height="auto" alt="Hobbify" />
          
            <span className="description">Hobbify</span>
          </div>
        </Link>
        {/* <MobileFrame /> */}
        <p className="description">A Mobile App for Creative Connections, Expert Guidance, and Community Building. Creativity unleashed and creations amplified!</p>
        <div className="temporaryPadding" />
        <div className="temporaryPadding" />


      </div>
    </div>
  )
}