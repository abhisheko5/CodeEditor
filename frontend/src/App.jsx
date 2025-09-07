import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'



function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/hello/") // Django API endpoint
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, []);
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
