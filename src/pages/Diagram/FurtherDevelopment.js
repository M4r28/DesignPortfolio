import React from 'react';
import "./FurtherDevelopment.css";
import BackToTopButton from '../BackToTopButton';



const FurtherDevelopment = () => (
  <div className='furtherDevelopment'>
  <div id="furtherDevelopment">
    <header className='header'>06 Further Development</header>
    <p className='goal'>Goal → create an early model of a product that demonstrates its functionality and can be used for testing.</p>
    <section className='section'>
      <h3>UI Implementation</h3>
      <p>This stage included accelerated learning about UI Design and its implementation. </p>
    </section>
    <section className='section'>
      <h3>Developing Personality</h3>
      <p>Hobbify app is intended to be used by creative individuals wishing to better their skills and develop potential through expert guidance.
        The app’s design is to reflect these principles. The use of bold colors and dynamic shapes refers to the creativity itself, its expansion as well as the development of potential, skill, and confidence.

        The app's appearance is playful and fun as well as simple and clear.</p>
    </section>
  </div>
  <BackToTopButton />
  </div>
);

export default FurtherDevelopment;