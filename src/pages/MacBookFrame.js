import React from 'react';
import './MacBookFrame.css';
import upliftFirstFrame from '../images/914shots_so.png';

const MacBookFrame = () => {
  return (
    <div className="macBookFrame">

      {/* <iframe title='uplift' width="100%" height="100%" allowfullscreen='true' frameborder='0' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHgnw6zOiQAYEYXMdoS2XNy%2Fteam-connect%3Fpage-id%3D132%253A211%26type%3Ddesign%26node-id%3D132-212%26viewport%3D737%252C489%252C0.17%26t%3DNtifAILvFzE3Gvvv-1%26scaling%3Dscale-down%26mode%3Ddesign&hide-ui=1"></iframe> */}

      <img className='mockup' src={upliftFirstFrame} width='100%' height='auto' alt="User Persona Phillip" />

    </div>
  );
};

export default MacBookFrame;



