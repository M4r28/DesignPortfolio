import React from 'react';
import "./Discover.css"

const Discover = () => (
  <div className='discover' >
  <div id="discover">
    <header className='header'>01 Discover</header>
    <p className='goal'>Goal → learn more about the users, their problems, wants, and needs, and the environment or context in which they will experience the design. </p>
    <div className='columns'>
      <section className='section column1'>
        <h3>Context</h3>
        <p>I began with <span className='bold'>Competitive Analysis</span> for which I have researched advice platforms: Intro, Expert Contact, and Just Answer as well as popular applications offering courses for creative endeavors: Domestika, Udemy, and Skillshare. I transformed this research into <span className='semiBold'>Business Requirements Document</span> outlining my main discoveries, detailing crucial aspects of the app's features, and establishing objectives for the app launch as well as the enlistment of experts and users.</p>
      </section>
      <section className='section column2'>
        <h3>Problem Statement</h3>
        <p>Hobbify App users are individuals who are passionate about arts, crafts, design, and DIY projects, and require expert assistance beyond the online tutorials and courses they have access to. They need a simple and convenient way to contact experienced artists or specialists for guidance and support when they encounter obstacles in their projects and they do not have personal contacts with the required expertise to help them. We can validate the need for the app by tracking the number of users who rely on it to connect with experts for advice and support.</p>
      </section>
    </div>
  </div>
  </div>

);

export default Discover;