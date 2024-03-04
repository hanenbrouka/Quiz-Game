import React from 'react';
import '../selectTopic/Select.css';
import history from "../../image/history.jpeg";
import technology from "../../image/technology.jpeg";
import agricol from "../../image/agricol.jpeg";
import medecin from "../../image/medecin.jpeg";
import sport from "../../image/sport.jpg";


const Select = ({changeInterface }) => {
  const handleTopicSelect = () => {
    // Changer l'interface vers ContentDash lorsque vous sélectionnez un topic
    changeInterface('interface2'); // Assurez-vous que 'interface1' est le nom correct pour ContentDash
  };
  return (
    <div className="select-container">
      <div className="title">Select Topic</div>
      <div className="subtitle">Featured Category</div>
    <div className="image-grid">
         <div><img src={history} className='image' alt='*'/></div>
         <div><img src={technology} className='image' alt='*'/></div>
         <div><img src={medecin} className='image' alt='*'/></div>
         <div><img src={agricol} className='image' alt='*'/></div>
         <div><img src={sport} className='image' alt='*'/></div>
         <div><img src={technology} className='image' alt='*'/></div>
         <div><img src={medecin} className='image' alt='*'/></div>
         <div><img src={sport} className='image' alt='*'/></div>
         <div><img src={history} className='image' alt='*'/></div>
         <div><img src={technology} className='image' alt='*'/></div>
         <div><img src={medecin} className='image' alt='*'/></div>
         <div><img src={agricol} className='image' alt='*'/></div>
      </div>
      <button className="more-button" onClick={handleTopicSelect}>More</button>
    </div>
  );
};

export default Select;