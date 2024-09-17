import React from 'react';
import './SecondL.css';
import img5 from'./images/img5.jpeg';
import img6 from './images/img6.jpeg';

const SecondL = () => {
  return (
   <div className="cont">
    <header className="head">
        <p className="page">2/3</p>
        <h2 className='h2'>Tell us more about yourself</h2>
    </header>
    <main className="main">
        <div className="b1">
               <div className="box1">
                <img className="img" src={img5} alt="Linkedin"></img>
                <p className="l">CONNECT LINKEDIN</p>
               </div>
               <input className="check" type="checkbox"></input>
        </div>
        <div className="b1 b2">
               <div className="box1">
                <img className="img" src={img6} alt="Linkedin"></img>
                <p className="l">UPLOAD RESUME</p>
               </div>
               <input className="check" type="checkbox"></input>
        </div>
        <div className="b1 b3">
               <div className="box1">
                <p className="l">FILL OUT MANUALLY</p>
               </div>
        </div>
    </main>
   <div className="line">
    <div className="l1"></div>
    <div className="l2"></div>
   </div>
    <footer className="foor">
        <button className="bc">BACK</button>
    </footer>
   </div>
  );
};

export default SecondL;
