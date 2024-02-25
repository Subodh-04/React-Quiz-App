// App.js
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLogin from "./Components/MainLogin";
import TopicSelection from "./Components/TopicSelection";
import QuestionPage from './Components/QuestionPage';
import Result from "./Components/Result";

function App() {
  const [loginMode, setLoginMode] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [username, setUsername] = useState("");

  // Define a function to handle topic selection
  const handleTopicSelection = (topicId) => {
    setSelectedTopic(topicId);
  };

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLogin loginMode={loginMode} onUsernameChange={handleUsernameChange} />} />
        <Route path="/topic-selection" element={<TopicSelection onTopicSelect={handleTopicSelection} username={username}/>} />
        {selectedTopic && <Route path="/question-page" element={<QuestionPage selectedTopic={selectedTopic} username={username} />} />}
        <Route path="/result" element={<Result username={username} />} />
      </Routes>
    </Router>
  );
}

export default App;
