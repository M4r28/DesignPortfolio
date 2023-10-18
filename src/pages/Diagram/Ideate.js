import React from 'react';
// import imageUserPersonaOutlier from '../../images/userPersonaOutlier.jpg';
import userStoryPhillip from '../../images/userStoryPhillip.svg';
import userFlowPhillip1 from '../../images/userFlowPhillip1.png';
import userFlowPhillip2 from '../../images/userFlowPhillip2.png';
import userStoryMin from '../../images/userStoryMin.svg';
import userFlowMin from '../../images/userFlowMin.png';

import sitemap from '../../images/sitemapHobbify.svg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Ideate.css";
import ZoomableImage from './ZoomableImage';


const Ideate = () => (
  <div className='ideate'>
    <div id="ideate">
      <header className='header'>04 Ideate</header>
      <p className='goal'>Goal → come up with as many design solutions as possible.</p>
      <div className='columns'>
        <section className='section'>
          <h3>User Flows</h3>
        </section>
        <section className='section'>
          <p>Utilizing user flows in UX enhances design clarity by visualizing the step-by-step journey of users, fostering a comprehensive understanding of their interactions. This process streamlines navigation and identifies potential bottlenecks, ultimately leading to improved user experiences and informed design decisions.</p>
        </section>
      </div>
      <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} className='carousel imageBottomMargin'>
        <div>
          <img src={userStoryPhillip} alt="User Story Phillip" />
        </div>
        <div>
          <img src={userFlowPhillip1} alt="User Flow Phillip. Task: Book a call with an Expert" />
        </div>
        <div>
          <img src={userFlowPhillip2} alt="User Flows Phillip. Task: Leave a review" />
        </div>
      </Carousel>

      <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} className='carousel'>
        <div>
          <img src={userStoryMin} alt="User Story Min" />
        </div>
        <div>
          <img src={userFlowMin} alt="User Flow Min. Task: Create user Profile" />
        </div>
      </Carousel>

      <div className='columns columnMarginTop'>
        <section className='section'>
          <h3>Site Map</h3>
        </section>
        <section className='section'>
          <p>I have created an initial sitemap draft, subsequently refining it through user testing via <span className='semiBold'>Card Sort</span>. This visual representation of the information architecture and navigation helps designers and stakeholders understand the organization of content, pages, and interactions, ensuring that the user experience is logical and user-friendly.</p>
        </section>
      </div>
      <div>
      <ZoomableImage src={sitemap} />
      </div>
    </div>
  </div>
);

export default Ideate;