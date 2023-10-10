import "./About.css"
// import { Link } from 'react-router-dom';
import {ReactComponent as Icon} from '../icons/linkedin.svg'


export default function About() {
  return (
    <>
    <div className="Aabout">
       <header className="Ah1 Agrid-item">About</header>
       <section className="Asection Agrid-item">
        Drawing from my background in Fine Arts, experience as a Frontend Developer, and passion for Design I utilise colour, typography, imagery  and Design Thinking combined with attention to technical feasibility and scalability to create modern experiences that fulfill user needs and inspire.<br/>
        I strive for excellence in a beautiful, intuitive, accessible, and ethical design.  
       </section>
       <header className="Ah1 Agrid-item">Creative <br/>Powerhouse</header>
       <ul className="Alist Agrid-item">
          <li>UX/UI</li>
          <li>Web Design</li>
          <li>Mobile Apps</li>  
          <li>Web Developer</li>
          <li>Visual Artist</li>
        </ul>
    </div>
    <div className="Aflex-container">
      <div className="AlinkedinIcon">
        <a href={"https://www.linkedin.com/in/marta-kolodziejczak-5a4b27187/"}> <Icon /></a>
      </div>
    </div>
    </>
  )
}