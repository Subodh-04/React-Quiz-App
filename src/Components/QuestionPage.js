import React, { useState } from 'react';
import logo from "../img/user-fill.svg";
import TopicSelection from './TopicSelection';
import Data from '../database/Data';
import Result from './Result';

export default function QuestionPage({ username }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleTopicSelect = (topic) => {
    console.log("Selected Topic:", topic);
    setSelectedTopic(topic);
    if (Data[topic]) {
      console.log("Questions for Selected Topic:", Data[topic]);
    } else {
      console.log("No questions found for selected topic:", topic);
    }
    setSelectedOptions(new Array(Data[topic].length).fill(-1)); // Initialize selectedOptions array based on selected topic
  };

  const questions = selectedTopic ? Data[selectedTopic] : [];

  function onPrev() {
    setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
  }

  function onNext() {
    setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, questions.length - 1));
  }

  function onSubmit() {
    // Logic to calculate total selected and total correct answers
    const totalSelected = selectedOptions.filter(optionIndex => optionIndex !== -1).length;
    const totalCorrect = questions.reduce((acc, question, index) => {
      return acc + (question.answer === selectedOptions[index] ? 1 : 0);
    }, 0);
    setQuizSubmitted(true);
  }

  function handleOptionSelect(optionIndex) {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  }

  if (quizSubmitted) {
    // Render the Result component if quiz is submitted
    return <Result totalQuestions={questions.length} totalSelected={selectedOptions.filter(optionIndex => optionIndex !== -1).length} totalCorrect={questions.reduce((acc, question, index) => acc + (question.answer === selectedOptions[index] ? 1 : 0), 0)} />;
  }

  // Render the quiz questions if quiz is not submitted
  return (
    <div>
      {!selectedTopic ? (
        <TopicSelection onTopicSelect={handleTopicSelect} />
      ) : (
        <>
          <nav className="navbar">
            <div className="container-fluid">
              <p className="navbar-brand p-0 m-0 ps-5 fw-bolder">QuizKaroo</p>
              <div className="user-det d-flex align-items-center pe-4">
                <img src={logo} alt="" style={{ width: "1em", height: "1em", marginRight: "0.5em" }} />
                <p style={{ margin: "0" }}> {username ? `${username}` : "Username"}</p>
              </div>
            </div>
          </nav>
          <div className="container d-flex flex-column justify-content-center align-items-center pt-lg-5 mt-lg-5">
            {/* Render the current question */}
            <h3 className='fw-normal fs-4'>Category: {selectedTopic}</h3><br />
            <h4 className='fs-3'>{currentQuestionIndex + 1}/{questions.length}</h4>
            <p className='fs-4 text-body Question'>{questions[currentQuestionIndex].question}</p>
            <div className='d-flex flex-wrap justify-content-center'>
              <ul className="list-unstyled gap-3 p-lg-3">
                {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                  <li key={optionIndex} className='border-tertiary border border-2 pt-2 ps-5 pe-5 pb-2 fs-6 fw-medium text-body-dark m-2'>
                    <input
                      type="radio"
                      id={`option-${currentQuestionIndex}-${optionIndex}`}
                      className={`option${currentQuestionIndex}`}
                      checked={selectedOptions[currentQuestionIndex] === optionIndex} // Check if this option is selected
                      onChange={() => handleOptionSelect(optionIndex)} // Handle option selection
                    />
                    <label htmlFor={`option-${currentQuestionIndex}-${optionIndex}`} className={`ps-3 op-${optionIndex}`}>{option}</label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="container d-flex flex-row gap-5 justify-content-around pt-4 z-1">
              <button className='btn btn-warning overflow-hidden border-0 ps-4 pe-4 fw-bold rounded-5' onClick={onPrev} disabled={currentQuestionIndex === 0}>Prev</button>
              {currentQuestionIndex === questions.length - 1 ? (
                <button className='btn btn-primary overflow-hidden border-0 ps-4 pe-4 fw-bold rounded-5' onClick={onSubmit}>Submit Quiz</button>
              ) : (
                <button className='btn btn-success overflow-hidden border-0 ps-4 pe-4 fw-bold rounded-5' onClick={onNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
              )}
            </div>
          </div>
          <svg id="wave" className='position-fixed top-30 z-0 opacity-50' style={{transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 240" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(231.662, 226.995, 255, 0.34)" offset="0%"></stop><stop stopColor="rgba(249.66, 248.593, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,96L24,92C48,88,96,80,144,64C192,48,240,24,288,44C336,64,384,128,432,156C480,184,528,176,576,144C624,112,672,56,720,52C768,48,816,96,864,108C912,120,960,96,1008,92C1056,88,1104,104,1152,100C1200,96,1248,72,1296,52C1344,32,1392,16,1440,28C1488,40,1536,80,1584,92C1632,104,1680,88,1728,80C1776,72,384,240C336,240,288,240,240,240C192,240,144,240,96,240C48,240,0,240,0,240Z"></path></svg>
        </>
      )}
    </div>
  );
}
