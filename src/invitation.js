import React from 'react';
import './invitation.css';

function Invitation() {

  return (
    <div className="invitation">
      <p>Subject : <span className="invitation__subject">Birthday party Invitation</span></p>
      <p>To : <span className="invitation__to">jaGdish@gmail.com</span></p>
      <p>Hi, <span className="invitation__name">jaGadish</span></p>
      <p>
        I am having a <span className="invitation__event">birthday party</span> next Firday at my home. 
        Would you like to come? It will be fun. Lots of people from my school are coming. You know some of them - <span className="invitation__people">Ritu, Saurabh, Kartik</span>.
      </p>
      <p>My house is behind our school, near <span className="invitation__avenue">Green field Avenue</span>.</p>
      <p>I hope you will come and see you soon.</p>
      <p>from,</p>
      <p className="invitation__from">jaGdish</p>
    </div>
  );
}

export default Invitation;