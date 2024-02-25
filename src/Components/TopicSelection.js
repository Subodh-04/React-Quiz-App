// TopicSelection.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/user-fill.svg";
import MainLogin from './MainLogin';

export default function TopicSelection({onTopicSelect,username}) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    setShowButton(true);
    if (onTopicSelect && typeof onTopicSelect === 'function') {
      onTopicSelect(cardId); // Inform parent component about the selected topic
    }
  };
  

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid d-flex justify-content-between align-items-center">
        <p className="navbar-brand fw-bolder text-bg"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="text-body fs-7" viewBox="0 0 24 24" fill="currentColor"><path d="M6.93912 14.0328C6.7072 14.6563 6.51032 15.2331 6.33421 15.8155C7.29345 15.1189 8.43544 14.6767 9.75193 14.5121C12.2652 14.198 14.4976 12.5385 15.6279 10.4537L14.1721 8.99888L15.5848 7.58417C15.9185 7.25004 16.2521 6.91614 16.5858 6.58248C17.0151 6.15312 17.5 5.35849 18.0129 4.2149C12.4197 5.08182 8.99484 8.50647 6.93912 14.0328ZM17 8.99739L18 9.99669C17 12.9967 14 15.9967 10 16.4967C7.33146 16.8303 5.66421 18.6636 4.99824 21.9967H3C4 15.9967 6 1.99669 21 1.99669C20.0009 4.99402 19.0018 6.99313 18.0027 7.99402C17.6662 8.33049 17.3331 8.66382 17 8.99739Z"></path></svg>QuizKaroo</p>
          <div className="user-det d-flex align-items-center pe-4">
            <img src={logo} className='mb-3' alt="" style={{ width: "1.2em", height: "1.2em", marginRight: "0.5em",  }} />
            {username && <p className="navbar-brand fw-bolder text-bg"> {username}</p>}
          </div>
        </div>
      </nav>

      <div className="container pt-5">
        <div className="container-fluid d-flex justify-content-center pt-5">
          <p className='fs-5 text-secondary'>Choose one from categories below & see how many questions you can answer correctly !</p>
        </div>
      </div>

      <div className="container d-flex flex-row gap-5 justify-content-center align-items-center pt-3 mt-4">
        <div className="card rounded-top-4 overflow-hidden" style={{ width: "15rem", cursor: "pointer", border: selectedCard === 1 ? "2px solid #007bff" : "none" }} onClick={() => handleCardClick("Core_Components")}>
          <div className="card-body d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#14b6ff", color: "white" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '3rem', height: '4rem' }}><path d="M6 18H18V6H6V18ZM14 20H10V22H8V20H5C4.44772 20 4 19.5523 4 19V16H2V14H4V10H2V8H4V5C4 4.44772 4.44772 4 5 4H8V2H10V4H14V2H16V4H19C19.5523 4 20 4.44772 20 5V8H22V10H20V14H22V16H20V19C20 19.5523 19.5523 20 19 20H16V22H14V20ZM8 8H16V16H8V8Z"></path></svg>
            <h5 className="card-title text-center fs-6">Core Components</h5>
            <p className="card-text" style={{ fontSize: "12px", textAlign: "center" }}>Fundamental hardware components crucial for computer functionality.</p>
          </div>
        </div>
        {/* Additional cards */}
        <div className="card rounded-top-4 overflow-hidden" style={{ width: "15rem", cursor: "pointer", border: selectedCard === 2 ? "2px solid #007bff" : "none" }} onClick={() => handleCardClick("Peripheral_Devices")}>
          <div className="card-body d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#fc633b", color: "white" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '3rem', height: '4rem' }}><path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path></svg>
            <h5 className="card-title text-center fs-6">Peripheral Devices</h5>
            <p className="card-text text-align-center fw-lighter" style={{ fontSize: "12px", textAlign: "center" }}>External hardware accessories for computer functionality expansion.</p>
          </div>
        </div>
        {/* Additional cards */}
        <div className="card rounded-top-4 overflow-hidden" style={{ width: "15rem", cursor: "pointer", border: selectedCard === 3 ? "2px solid #007bff" : "none" }} onClick={() => handleCardClick("Power_Cooling")}>
          <div className="card-body d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#4aaf47", color: "white" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '3rem', height: '4rem' }}><path d="M3.92887 4.92896L5.34315 6.34323C3.89543 7.79094 3 9.79094 3 12.0001C3 14.2092 3.89543 16.2092 5.34315 17.6569L3.92887 19.0712C2.11925 17.2616 1 14.7616 1 12.0001C1 9.23858 2.11925 6.73858 3.92887 4.92896ZM20.0711 4.92896C21.8808 6.73858 23 9.23858 23 12.0001C23 14.7616 21.8808 17.2616 20.0711 19.0712L18.6569 17.6569C20.1046 16.2092 21 14.2092 21 12.0001C21 9.79145 20.105 7.79186 18.6579 6.34423L20.0711 4.92896ZM13 5.00008V11.0001H16L11 19.0001V13.0001H8L13 5.00008ZM6.75736 7.75744L8.17157 9.17165C7.44771 9.89551 7 10.8955 7 12.0001C7 13.1046 7.44771 14.1046 8.17157 14.8285L6.75736 16.2427C5.67157 15.1569 5 13.6569 5 12.0001C5 10.3432 5.67157 8.84323 6.75736 7.75744ZM17.2436 7.75842C18.3288 8.84413 19 10.3437 19 12.0001C19 13.6569 18.3284 15.1569 17.2426 16.2427L15.8284 14.8285C16.5523 14.1046 17 13.1046 17 12.0001C17 10.896 16.5527 9.89643 15.8294 9.17265L17.2436 7.75842Z"></path></svg>
            <h5 className="card-title text-center fs-6">Power & Cooling</h5>
            <p className="card-text text-align-center fw-lighter" style={{ fontSize: "12px", textAlign: "center" }}>Components which ensure stable power supply and efficient cooling</p>
          </div>
        </div>
      </div>

      {showButton && (
        <div className="container d-flex justify-content-center align-items-center pt-5 mt-3">
          <Link to="/question-page" className='btn btn-primary  overflow-hidden border-0 ps-4 pe-4 fw-bold rounded-5' style={{ backgroundColor: "#7b8aee" }}>Start Quiz</Link>
        </div>
      )}

      <svg id="wave" style={{ transform: 'rotate(0deg)', transition: '0.3s' }} viewBox="0 0 1440 310" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="#e6e6fa92" offset="0%"></stop><stop stopColor="rgba(255, 255, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: 'translate(0, 0px)', opacity: "1" }} fill="url(#sw-gradient-0)" d="M0,248L21.8,242.8C43.6,238,87,227,131,196.3C174.5,165,218,114,262,98.2C305.5,83,349,103,393,124C436.4,145,480,165,524,144.7C567.3,124,611,62,655,56.8C698.2,52,742,103,785,108.5C829.1,114,873,72,916,82.7C960,93,1004,155,1047,186C1090.9,217,1135,217,1178,201.5C1221.8,186,1265,155,1309,165.3C1352.7,176,1396,227,1440,227.3C1483.6,227,1527,176,1571,165.3C1614.5,155,1658,186,1702,211.8C1745.5,238,1789,258,1833,222.2C1876.4,186,1920,93,1964,62C2007.3,31,2051,62,2095,93C2138.2,124,2182,155,2225,155C2269.1,155,2313,124,2356,129.2C2400,134,2444,176,2487,170.5C2530.9,165,2575,114,2618,82.7C2661.8,52,2705,41,2749,36.2C2792.7,31,2836,31,2880,51.7C2923.6,72,2967,114,3011,134.3C3054.5,155,3098,155,3120,155L3141.8,155L3141.8,310L3120,310C3098.2,310,3055,310,3011,310C2967.3,310,2924,310,2880,310C2836.4,310,2793,310,2749,310C2705.5,310,2662,310,2618,310C2574.5,310,2531,310,2487,310C2443.6,310,2400,310,2356,310C2312.7,310,2269,310,2225,310C2181.8,310,2138,310,2095,310C2050.9,310,2007,310,1964,310C1920,310,1876,310,1833,310C1789.1,310,1745,310,1702,310C1658.2,310,1615,310,1571,310C1527.3,310,1484,310,1440,310C1396.4,310,1353,310,1309,310C1265.5,310,1222,310,1178,310C1134.5,310,1091,310,1047,310C1003.6,310,960,310,916,310C872.7,310,829,310,785,310C741.8,310,698,310,655,310C610.9,310,567,310,524,310C480,310,436,310,393,310C349.1,310,305,310,262,310C218.2,310,175,310,131,310C87.3,310,44,310,22,310L0,310Z"></path></svg>
    </div>
  );
}
