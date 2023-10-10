import React from 'react';
import Discover from './Discover';
import "./Diagram.css"
import Empathize from './Empathize';
import Define from './Define';
import Ideate from './Ideate';
import PrototypeAndTest from './PrototypeAndTest';
import FurtherDevelopment from './FurtherDevelopment';


const Diagram = () => {
  const scrollToComponent = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="diagram">
        {/* Diagram */}
        <div className="diagram-element" onClick={() => scrollToComponent('discover')}>
          <span className='number'>01</span>
          <span className='label'>Discover</span>
        </div>
        <div className="diagram-element" onClick={() => scrollToComponent('empathize')}>
          <span className='number'>02</span>
          <span className='label'>Empathize</span>
        </div>
        <div className="diagram-element" onClick={() => scrollToComponent('define')}>
          <span className='number'>03</span>
          <span className='label'>Define</span>
        </div>
        <div className="diagram-element" onClick={() => scrollToComponent('ideate')}>
          <span className='number'>04</span>
          <span className='label'>Ideate</span>
        </div>
        <div className="diagram-element" onClick={() => scrollToComponent('prototypeAndTest')}>
          <span className='number'>05</span>
          <span className='label'>Prototype <br/> &Test</span>
        </div>
        <div className="diagram-element" onClick={() => scrollToComponent('furtherDevelopment')}>
          <span className='number'>06</span>
          <span className='label'>Further<br/> Development</span>
        </div>
      </div>
      {/* Components under the diagram (onClick will scroll to them) */}
     
      <Discover />
      <Empathize />
      <Define />
      <Ideate />
      <PrototypeAndTest />
      <FurtherDevelopment />
    
      
    </div>
  );
};

export default Diagram;