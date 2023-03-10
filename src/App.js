import './App.css';
import Alert from './components/Alert';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForms';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <>
      <Router>
        <Navbar title="TechieBears Pvt Ltd" about="About Us" />
        {/* <Navbar /> */}
        {/* <Navbar title='TechieBears Pvt Ltd  ' /> */}
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route path='/home' element={<TextForm showAlert={showAlert} heading="Enter text here " />} />
          {/* <TextForm showAlert={showAlert} heading="Enter text here " /> */}
        </Routes>
      </Router> 
    </>
  );
}

export default App;
