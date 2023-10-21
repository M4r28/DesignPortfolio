import React, { useState, useEffect } from 'react';
import "./About.css";
import { ReactComponent as Icon } from '../icons/linkedin.svg';
import LoadingAnimation from './LoadingAnimation'; // Import the LoadingAnimation component

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration (replace with actual data loading)
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust the duration as needed
  }, []);

  return (
    <div className="about">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div id="about">
          <div className="columns">
            <section className="section">
              <h3>About</h3>
            </section>
            <section className="section">
              <p className="description">
                Drawing from my background in Fine Arts, experience as a Frontend Developer, and passion for Design I utilise colour, typography, imagery  and Design Thinking combined with attention to technical feasibility and scalability to create modern experiences that fulfill user needs and inspire.<br />
                I strive for excellence in a beautiful, intuitive, accessible, and ethical design.
              </p>
            </section>
          </div>
          <div className="columns">
            <section className="section">
              <h3>Creative <br />Powerhouse</h3>
            </section>
            <section className="section">
              <ul className="description">
                <li>UX/UI</li>
                <li>Web Design</li>
                <li>Mobile Apps</li>
                <li>Web Developer</li>
                <li>Visual Artist</li>
              </ul>
            </section>
          </div>
        </div>
      )}
      <div className="flexContainer">
        <div className="linkedinIcon">
          <a href={"https://www.linkedin.com/in/marta-kolodziejczak-5a4b27187/"}> <Icon /></a>
        </div>
      </div>
    </div>
  );
}
