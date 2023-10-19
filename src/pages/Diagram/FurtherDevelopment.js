import React from 'react';
import "./FurtherDevelopment.css";
import BackToTopButton from '../BackToTopButton';
import ZoomableImage from './ZoomableImage';
import hobbifyFrames from '../../images/hobbifyFames.png';


const FurtherDevelopment = () => (
  <div className='furtherDevelopment'>
    <div id="furtherDevelopment">
      <header className='header'>06 Further<br />Develop&shy;ment</header>
      <p className='goal'>Goal → create an early model of a product that demonstrates its functionality and can be used for testing.</p>
      <div className='columns columnMargin'>
        <section className='section'>
          <h3>Visual Design Implementation</h3>
          <p>During this stage, the primary focus was on crafting the visual design and producing final mockups. Additionally, comprehensive specifications and a style guide were prepared to facilitate seamless developer hand-off.
            Key considerations included emotional design, branding, accessibility, and ethical design.  </p>
        </section>
        <section className='section'>
          <h3>Developing Personality</h3>
          <p>The Hobbify app is tailored for creative individuals seeking to nurture their talents and unlock their full potential with the guidance of experts.

            The app's design mirrors these core principles. Vibrant colors and dynamic shapes symbolize the creative spirit, its evolution, and the enhancement of skills, confidence, and untapped potential.

            With a playful and enjoyable aesthetic, the app offers a seamless and intuitive user experience, striking a balance between simplicity and clarity.</p>
        </section>
      </div>
      <ZoomableImage src={hobbifyFrames} />
    </div>
    <BackToTopButton />
  </div>
);

export default FurtherDevelopment;