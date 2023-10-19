import React from 'react';
import "./PrototypeAndTest.css";
import lowFidelityWireframes from '../../images/lowFidelityWireframes.png';
import midFidelityWireframes from '../../images/midFidelityWireframes.svg';
import highFidelityWireframes from '../../images/highFidelityWireframes.svg';
import usabilityTestAnalysis from '../../images/usabilityTestAnalysis.png';
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
        <section className='section column2'>
          <h3>Wireframes</h3>
          <p>Utilizing Wireframes facilitates the structural visualization of layouts and content placement, aiding in refining the overall user interface. This process promotes collaboration, rapid iteration, and early identification of design issues, leading to well-organized and user-friendly digital experiences.<br />
            The process of wireframing progressed through three fidelity stages: low, medium, and high.</p>
        </section>
        <section className='section'>
        </section>
      </div>

      {/* 
tutaj wjezdza image */}

      <div className='columns columnMargin'>
        <section className='section'>
          <h3>Low-fidelity</h3>
        </section>
        <section className='section'>
          <p>In the initial exploration of design concepts, I employed<br /> low-fidelity wireframes to facilitate swift decision-making and cost-effective iterations. This efficient approach not only expedited the collection of early feedback but also laid a solid foundation for subsequent design refinements and developments.</p>
        </section>
      </div>
      <ZoomableImage src={lowFidelityWireframes} />

      <div className='columns columnMargin'>
        <section className='section'>
          <h3>Mid-fidelity </h3>
        </section>
        <section className='section'>
          <p>Moving beyond the initial concept, mid-fidelity wireframes mark the point where design ideas begin to take a more structured form. Building upon initial sketches, I've crafted the foundational concepts for user flows, interactions, task distribution per screen, and the arrangement of interface elements. These mid-fidelity wireframes provide a clearer visualization of the design direction, offering a balance between structure and detail as the project progresses.</p>
        </section>
      </div>
      <ZoomableImage src={midFidelityWireframes} />

      <div className='columns columnMargin'>
        <section className='section'>
          <h3>High-fidelity </h3>
        </section>
        <section className='section'>
          <p>As I transitioned to the high-fidelity wireframes, the focus shifts toward adding more depth to the design in preparation for user testing. At this stage, I delved deeper into the overall product design, carefully considering the alignment of business requirements with user desires and needs. Informed by research findings and preliminary testing, I made critical decisions on pricing, contact modalities, and available contact durations. Additionally, I refined the information flow and strategically determined the extent of expert details displayed on each screen, ensuring well-rounded user experience. </p>
        </section>
      </div>
      <ZoomableImage src={highFidelityWireframes} />
      {/* <div className='columns'>
        <section className='section'>
          <h4>Prototype used for User Testing</h4>
        </section>
        <section><p> Tutaj wjezdza frame z prototypem</p></section>
      </div> */}

      <div className='columns columnMargin'>
        <section className='section column2'>
          <h3>Testing&nbsp;</h3>
          <p>Employing usability tests, particularly on a high-fidelity prototype, allows for real-world user interactions, uncovering usability issues and validating design decisions before final implementation. This iterative process enhances user satisfaction and minimizes costly post-launch revisions, ensuring a user-centric and refined end product.</p>
        </section>
        <section className='section'>
          <h3>Goal</h3>
          <p>The objective of this research is to evaluate how easily new users can navigate and use the Hobbify App. My intention is to observe and quantify users' comprehension of the app, its benefits, and their ability to perform fundamental tasks such as logging in, searching for information, and booking appointments with experts.</p>
        </section>
      </div>

      <div className='columns columnMargin'>
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
      <div className='columns columnMargin'>
        <section className='section'>
          <h3>Analysis</h3>
        </section>
        <section className='section'>
          <p> Building upon the insights derived from the interviews, I proceeded to create an <span className='semiBold'>Affinity Map</span> to distill the data into actionable insights. These insights were then organized into three primary clusters, allowing me to focus on and address the most critical issues and opportunities.<br />
            To enhance data visibility and add a touch of creativity, I've crafted a <span className='semiBold'>Rainbow Spreadsheet</span>. This engaging visualization technique infuses data with vibrant colors, making information not only more colorful but also highly memorable.</p>
        </section>
      </div>
      <ZoomableImage src={usabilityTestAnalysis} />
      <div className='rainbowSpreadsheet imageMarginTop'>
        <iframe title='rainbowSpreadsheet' width='100%' height='100%' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRY543q47vNCNsagym0_YSI3JM7_FgBky3P7pIjhEsCs94yEa3pkh2Rfvs9tliBFMB9tMFIDC0pmKtN/pubhtml?widget=true&amp;headers=false"></iframe>
      </div>

      <div className='columns columnMargin'>
        <section className='section'>
          <h3>Conclusion</h3>
          <p>In summary, user testing revealed that most participants found Hobby easy to use and appreciated its readability. They successfully performed key actions, including searching for experts, booking calls, and sending messages. However, some users raised concerns about the clarity of confirmation after booking contacts and expressed a desire for more control over contact duration. To address these issues, redesigning booking and confirmation screens is essential for a smoother and more user-centered experience.
          </p>
        </section>
        <section className='section column2'>
          <h3>Key improvements</h3>
          <p>
            <ol className='list'>
              <li>Streamlined Booking Flow: Added confirmation message and new screen layout.</li>
              <li>User-Defined Contact Duration: Added manual input field for setting a contact duration.</li>
              <li>Home Screen Reminders: Added upcoming booking reminders to the home screen for improved user engagement.</li>
              <li>Sorting Functionality: Replaced filters with a more intuitive sorting.</li>
              <li>Messaging Simplification: Streamlined the send message process by removing the button from booking screens.</li>
              <li>Improved Visual Clarity: Replaced confusing icons with more user-friendly alternatives.</li>
              <li>Improved Navigation: Overhauled the bottom navigation to prioritize key options and introduce additional community-focused functionality.
              </li>
            </ol>
          </p>
        </section>
      </div>

    </div>
  </div>
);

export default PrototypeAndTest;