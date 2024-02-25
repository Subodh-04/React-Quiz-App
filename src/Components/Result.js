import React from 'react';
import logo from "../img/user-fill.svg";
import { Link } from "react-router-dom";

export default function Result({ totalQuestions, totalCorrect,username }) {
  const isCongratulations = totalCorrect >= 10;

  return (
    <div className='' style={{fontFamily:"poppins-regular"}}>
      <nav className="navbar">
        <div className="container-fluid">
          <p className="navbar-brand p-0 m-0 ps-5 fw-bolder">QuizKaroo</p>
          <div className="user-det d-flex align-items-center pe-4">
            <img src={logo} alt="" style={{ width: "1em", height: "1em", marginRight: "0.5em" }} />
            <p style={{ margin: "0" }}>{username}</p>
          </div>
        </div>
      </nav>
      <div className="container d-flex flex-column justify-content-center align-items-center pt-lg-5 mt-lg-5">
            <h3 className='fs-2 fw-bolder pb-lg-2' style={{color:"#7b89f3"}}>{isCongratulations ?`Congratulations`:`Good Luck Next Time`}</h3>
            <p className=' text-body-tertiary fs-7 fw-semibold'>Computer Hardware</p>
            <h5 className='fs-5 fw-bolder pt-lg-3'>You Answered</h5>
            <p className='center d-flex justify-content-center fs-2 fw-bolder p-0 m-0' style={{color:"#7b89f3"}}>{totalCorrect}/{totalQuestions}</p>
            <p className='fs-5 fw-bolder pt-lg-3'>Question Correct</p>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center gap-lg-5 gap-sm-2 pt-lg-5 mt-lg-5">
        <button className='btn btn-primary fw-normal  overflow-hidden border-0 ps-4 pe-4 fw-bold rounded-5' style={{ backgroundColor: "#7b8aee" }}>Play Again</button>
        <button className='btn btn-primary fw-normal overflow-hidden  ps-4 pe-4 fw-bold rounded-5  border-2 border-black ' style={{ backgroundColor: "#fff",color:'#7b8aee' }}> <Link className='text-decoration-none' to={"/topic-selection"} > Back to Home</Link></button>
      </div>
      <svg id="wave" className='position-fixed z-0 top-30 opacity-50' style={{transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 240" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(231.662, 226.995, 255, 0.34)" offset="0%"></stop><stop stopColor="rgba(249.66, 248.593, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,96L24,92C48,88,96,80,144,64C192,48,240,24,288,44C336,64,384,128,432,156C480,184,528,176,576,144C624,112,672,56,720,52C768,48,816,96,864,108C912,120,960,96,1008,92C1056,88,1104,104,1152,100C1200,96,1248,72,1296,52C1344,32,1392,16,1440,28C1488,40,1536,80,1584,92C1632,104,1680,88,1728,80C1776,72,1824,72,1872,68C1920,64,1968,56,2016,56C2064,56,2112,64,2160,64C2208,64,2256,56,2304,76C2352,96,2400,144,2448,140C2496,136,2544,80,2592,80C2640,80,2688,136,2736,144C2784,152,2832,112,2880,84C2928,56,2976,40,3024,64C3072,88,3120,152,3168,180C3216,208,3264,200,3312,176C3360,152,3408,112,3432,92L3456,72L3456,240L3432,240C3408,240,3360,240,3312,240C3264,240,3216,240,3168,240C3120,240,3072,240,3024,240C2976,240,2928,240,2880,240C2832,240,2784,240,2736,240C2688,240,2640,240,2592,240C2544,240,2496,240,2448,240C2400,240,2352,240,2304,240C2256,240,2208,240,2160,240C2112,240,2064,240,2016,240C1968,240,1920,240,1872,240C1824,240,1776,240,1728,240C1680,240,1632,240,1584,240C1536,240,1488,240,1440,240C1392,240,1344,240,1296,240C1248,240,1200,240,1152,240C1104,240,1056,240,1008,240C960,240,912,240,864,240C816,240,768,240,720,240C672,240,624,240,576,240C528,240,480,240,432,240C384,240,336,240,288,240C240,240,192,240,144,240C96,240,48,240,24,240L0,240Z"></path></svg>
    </div>
  );
}
