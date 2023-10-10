import React from 'react';
import svgPeronaPhillip from '../../images/svgPersonaPhillip.svg';
import svgPersonaMin from '../../images/svgPersonaMin.svg';
import svgPersonaOutlierChrissy from '../../images/svgPersonaOutlierChrissy.svg';
import userScenarioPhillip from '../../images/userScenarioPhillip.svg';
import userJourneyPhillip from '../../images/userJourneyPhillip.svg';
import userJourneyMin from '../../images/userJourneyMin.svg';
import userScenarioMin from '../../images/userScenarioMin.svg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Define.css';

const Define = () => (
  <div className='define'>
  <div id="define">
    <header>03 Define</header>
    <p className='goal'>Goal → clear Problem Statement. Analyze research findings and determine which user problems are the most important to solve and why.</p>
    <div className='columns'>
    <section className='section'>
      <h3>User Personas</h3>
      <p>Developing personas enables designers to empathize effectively, comprehending objectives, requirements, pain points, and motivations. Stepping into the persona's perspective empowers me to make decisions more aligned with their needs and goals.</p>
    </section> 
    <section className='section invisible'>
      {/* <h3>User Personas</h3> */}
      <p>Developing personas enables designers to empathize effectively, comprehending objectives, requirements, pain points, and motivations.</p>
    </section> 
    </div>

    <Carousel showArrows={true} showStatus={false} showThumbs={false} className='carousel' swipeable={true}>
      <div className='indicators'>
        <img src={svgPeronaPhillip} alt="User Persona Phillip" />
        {/* <p className="legend">Slide 1 Caption</p> */}
      </div>
      <div>
        <img src={svgPersonaMin} alt="User Persona Min" />
        {/* <p className="legend">Slide 2 Caption</p> */}
      </div>
      <div>
        <img src={svgPersonaOutlierChrissy} alt="Outlier User Persona Chrissy" />
        {/* <p className="legend">Slide 3 Caption</p> */}
      </div>
    </Carousel>

    <div className='columns'>
    <section className='section'>
      <h3>User Journey Maps</h3>
      <p>Employing User Journey Maps illuminates the end-to-end user experience, providing insights into touch points and emotions throughout their interaction with a product or service. This aids in identifying pain points and opportunities for optimization, resulting in more empathetic and effective design solutions.</p>
    </section>
    <section className='section'>
      {/* <h3>User Journey Maps</h3> */}
      <p>Employing User Journey Maps illuminates the end-to-end user experience, providing insights into touch points and emotions throughout their interaction with a product or service. This aids in identifying pain points and opportunities for optimization, resulting in more empathetic and effective design solutions.</p>
    </section>
    </div>
    <Carousel showArrows={true} showStatus={false} showThumbs={false} swipeable={true} className='carousel'>
      <div>
        <img src={userScenarioPhillip} alt="User Scenario Phillip" />
      </div>
      <div>
        <img src={userJourneyPhillip} alt="User Journey Phillip" />
      </div>
    </Carousel>
    <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} className='carousel'>
      <div>
        <img src={userScenarioMin} alt="User Scenario Min" />
      </div>
      <div>
        <img src={userJourneyMin} alt="User Journey Min" />
      </div>
    </Carousel>
  </div>
  </div>
);

export default Define;