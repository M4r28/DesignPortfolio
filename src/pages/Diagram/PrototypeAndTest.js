import React from 'react';
import "./PrototypeAndTest.css";
import lowFidelityWireframes from '../../images/lowFidelityWireframes.png';
import midFidelityWireframes from '../../images/midFidelityWireframes.svg';
import highFidelityWireframes from '../../images/highFidelityWireframes.svg';
import ZoomableImage from './ZoomableImage';

const PrototypeAndTest = () => (
  <div className='prototypeAndTest'>
    <div id="prototypeAndTest">
      <header className='header'>05 Prototype & Test</header>
      <p className='goal'>
        Goal 1 → create an early model of a product that demonstrates its functionality and can be used for testing. <br />
        Goal 2 → assess and refine the design's functionality, usability, and overall user experience through realistic interactions.
      </p>
      <div className='columns'>
        <section className='section'>
          <h3>Wireframes</h3>
          <p>Utilizing Wireframes facilitates the structural visualization of layouts and content placement, aiding in refining the overall user interface. This process promotes collaboration, rapid iteration, and early identification of design issues, leading to well-organized and user-friendly digital experiences.<br />
            The process of wireframing progressed through three fidelity stages: low, medium, and high.</p>
        </section>
        <section className='section'>

          <p>Tutaj description co zrobilam/ o projekci Tutaj description co zrobilam/ o projekciee</p>

        </section>
      </div>

      {/* 
tutaj wjezdza image */}

      <div className='columns'>
        <section className='section'>
          <h3>Low-fidelity</h3>
          <p>It was a lot of fun to begin shaping the initial visuals based on the research findings!</p>
        </section>
        <section className='section'>
          <h3>Low-fidelity</h3>
          <p>It was a lot of fun to begin shaping the initial visuals based on the research findings!</p>
        </section>
      </div>
      <ZoomableImage src={lowFidelityWireframes} />

      <div className='columns'>
        <section className='section'>
          <h3>Mid-fidelity </h3>
          <p>Where the initial concept started to take shape.
            Based on initial sketches I have created the first basic concepts for user flows and interactions, tasks per screen, and layout of the elements. </p>
        </section>
        <section className='section'>
          <h3>Mid-fidelity</h3>
          <p>Where the initial concept started to take shape.
            Based on initial sketches I have created the first basic concepts for user flows and interactions, tasks per screen, and layout of the elements. </p>
        </section>
      </div>
      <ZoomableImage src={midFidelityWireframes} />

      <div className='columns'>
        <section className='section'>
          <h3>High-fidelity </h3>
          <p>Adding more detail to prepare a version that will be tested with users.

            Here I gave more thought to the whole product design, and considered business requirements as well as the wants and needs of users and experts. Based on research and initial testing I have decided on pricing, modalities of contact options, and available lengths of contact. I also made decisions regarding the specifics of information flow and decided what level of detailed Expert information is shown on which screen. </p>
        </section>
        <section className='section'>
          <h3>High-fidelity</h3>
          <p>Adding more detail to prepare a version that will be tested with users.

            Here I gave more thought to the whole product design, and considered business requirements as well as the wants and needs of users and experts. Based on research and initial testing I have decided on pricing, modalities of contact options, and available lengths of contact. I also made decisions regarding the specifics of information flow and decided what level of detailed Expert information is shown on which screen. </p>
        </section>
      </div>
      <ZoomableImage src={highFidelityWireframes} />
      <div className='columns'>
        <section className='section'>
          <h4>Prototype used for User Testing</h4>
        </section>
        <section><p> Tutaj wjezdza frame z prototypem</p></section>
      </div>

      <div className='columns'>
        <section className='section column2'>
          <h3>Testing&nbsp;</h3>
          <p>Employing usability tests, particularly on a high-fidelity prototype, allows for real-world user interactions, uncovering usability issues and validating design decisions before final implementation. This iterative process enhances user satisfaction and minimizes costly post-launch revisions, ensuring a user-centric and refined end product.</p>
        </section>
        <section className='section'>
          <h3>Goal</h3>
          <p>The objective of this research is to evaluate how easily new users can navigate and use the Hobbify application on both mobile and desktop platforms. My intention is to observe and quantify users' comprehension of the app, its benefits, and their ability to perform fundamental tasks such as logging in, searching for information, and booking appointments with experts.</p>
        </section>

      </div>

      <div className='columns'>
        <section className='section'>
          <h3>Test Objectives</h3>
          <p>
            <ol className='list'>
              <li>Determine if participants understand what the app is about quickly and easily
                (i.e., an application for finding and contacting experts to get advice on their
                creative projects) and the value it provides.</li>
              <li>Observe how users navigate and find information about experts from the
                homepage̶can they successfully find what they’re looking for?</li>
              <li>Determine if the information provided is sufficient for users to make a decision
                regarding a booking</li>
            </ol>
          </p>
        </section>
        <section className='section'>
          <h3>Methodology</h3>
          <p>The study type was moderated in-person or moderated remotely depending on the location of the participants.
            The test included a short briefing, task performance with Hobbify conducted on an application, and a debriefing.</p>
        </section>
      </div>

<section className='section'>
  <h3>Analysis</h3>
  <p>Interviews of all 6 participants were recorded and further analyzed. I have created Affinity Map </p>
  TO DO:
  - img Analysis
  - img Rainbow Spreadsheet
</section>

      <div className='columns'>
        <section className='section'>
          <h3>Conclusion</h3>
          <p>Most of the participants found Hobby easy to use and expressed being happy with its readability and ease of use. Participants were able to search for experts related to their field of interest, book a call, send a message to them as well as browse different categories and find inspiration by viewing other users' work and reading blog articles.
            However, some were insecure after booking a contact and sending a message to an expert as the confirmation of both actions wasn’t prominent enough. A few of the participants also expressed the wish of having more control over the duration of the contact, hence the need for a manual input field.
            Having redesigned booking and booking confirmation screens will ensure a smoother and more user-centered experience.</p>
        </section>
        <section className='section'>
          <h3>Key improvements</h3>
          <p>
            <ol className='list'>
              <li>booking flow - adding confirmation message and new screen layout</li>
              <li>added manual input field for setting a contact duration</li>
              <li>added upcoming booking reminder on the home screen</li>
              <li>filter changed to sort</li>
              <li>improved send message flow - button removed from booking screens </li>
              <li>icons that caused confusion replaced</li>
              <li>bottom navigation changed to reflect better the importance of available options and to add additional functionality (community aspect of the product)</li>
            </ol>
          </p>
        </section>
      </div>

    </div>
  </div>
);

export default PrototypeAndTest;