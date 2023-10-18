import React from 'react';
import './Empathize.css';
import imageUserInterviews from '../../images/UserInterviews.png';
import imageAffinityMap from '../../images/AffinityMap.png';

const Empathize = () => (
  <div className='empathize'>
    <div id="empathize">
      <header className='header'>02 Empathize</header>
      <p className='goal'>Goal → learn more about the users, their problems, wants, and needs, and the environment or context in which they will experience the design.</p>
      <div className='centerDiv'>
        <div className='columns'>
          <section className='section column1'>
            <h3>Research <br /> Goals</h3>
            <ol className='list'>
              <li>Understanding the specific needs and preferences of the target audience when it comes to accessing expert assistance for their hobbies.</li>
              <li>Identify the specific types of obstacles or challenges that individuals encounter while working on arts, crafts, design, or DIY projects. Learn about their pain points, what they have tried in the past, and what they would like to see in an app like Hobbify.</li>
              <li>Understanding the unique selling points of the app.</li>
            </ol>
          </section>
          <section className='section column2'>
            <h3>Online Survey</h3>
            <p>Have a look at Survey &nbsp;<a href="https://docs.google.com/forms/d/122Sk_8eqiTyd1UjftXATI_iKcS5KT8geAb-vIPm-35o/edit?usp=forms_home&ths=true" target="_blank" rel="noreferrer" >Questions</a> &nbsp;and &nbsp;
              <a href="https://docs.google.com/spreadsheets/d/1ZXyFSq6LBwAuP9GB94VmNkM2iDEp5_0IUdqIduh2jWw/edit?resourcekey#gid=1442747701" target="_blank" rel="noreferrer">Results</a>
              .</p>
            <p>
              <h5>Main Findings</h5>Users express the importance of creative hobbies in their life. Being invested in their projects they would gladly indulge in the idea of having access to expert advice. However, a big emphasis is put on proper and timely scheduling, responsiveness, reliability, and pricing.</p>
            <div className='space' />
            <h3>User <br /> Interviews</h3>
            <p>Building upon survey findings, I conducted one-hour interviews with three participants. These interviews provided valuable insights into their wants, needs, and behaviors related to the app's value proposition.<br/> Following the user interviews, I delved into <span className='semiBold'>insights synthesis</span>. Through a thorough analysis of the raw data, I categorized the insights into emerging themes that captured the primary priorities of users.</p>
          </section>
        </div>
      </div>
      <div className='imageContainer'>
        <img className="imageBottomMargin" src={imageUserInterviews} width="100%" height="auto" alt="User Interviews results organized in groups: Behaviors and Attitudes, Needs and Goals, and Frustrations, and Significant Quotes" />
      </div>
  
      <div className='imageContainer'>
        <img className='' src={imageAffinityMap} width='100%' height='auto' alt='Insights Synthesis organized in three groups: Accessibility, Trust and Expertise, Convenience' />
      </div>
    </div>
  </div>
);

export default Empathize;