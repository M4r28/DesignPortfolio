import React from 'react';
import "./Home.css"
import { ReactComponent as Icon } from '../icons/arrow.svg'
import { Link } from 'react-router-dom';
import image from '../images/mockupHobbify.png'
import MobileFrame from "./MobileFrame";
import upliftHome from '../images/UpliftHomeForMockupTry.jpg';
import ZoomableImage from "./Diagram/ZoomableImage";
import MacBookFrame from "./MacBookFrame";
import upliftFirstFrame from '../images/914shots_so.png';

const Home = () => {
  const [scrollTop, setScrollTop] = React.useState(0);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  return (
    <div className="home" onScroll={handleScroll}>
      <section className="sectionHero">
        <header className="header">UX/UI Designer & Frontend Developer</header>
        <div className="descriptionAndProjects">
          <p className="description">Hi! I'm Marta, a designer and coder who thrives in merging creativity with design and programming to create human-centered, aesthetically pleasing, and technically feasible solutions to real-life problems with focus on innovation and ethical design.
          </p>
          <div className="projectsArrowContainer">
            <Icon />
            <span className="projectsHeader">Projects</span>
          </div>
        </div>
      </section>
      <section className="sectionHobbify">
        <img className="hobbifyMockup" src={image} width="auto" height="auto" alt="Hobbify" />
        <div className=''>
        <Link className='link'to="/hobbify">
          <span className="description semiBold">Hobbify -></span>
        </Link>
        <p className="description">A Mobile App for Creative Connections, Expert Guidance, and Community Building. Creativity unleashed and creations amplified!</p>
        {/* <div className="temporaryPadding" />
        <div className="temporaryPadding" /> */}
        </div>
      </section>
      <section className="sectionUplift">
        <MacBookFrame />
       
        <div className=''>
        <p className="description"><span className='semiBold'>Uplift</span><span className='comingSoon'>Details coming soon</span><br/>A groundbreaking video calling application that seamlessly blends <br/>cutting-edge technology with innovative features designed to foster inclusivity, diversity, and meaningful connections.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;