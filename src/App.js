import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import Profile from './Profile';
import Home from './home';
import { auth } from './firebase';
import './App.css';
import PricingPlans from './PricingPlans';
import FindQuestion from './FindQuestions';
import PostForm from './PostForm';
import SuccessTransaction from './SuccessTransaction';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/plans" element={<PricingPlans />}/>
        <Route path="/findquestions" element={<FindQuestion />}/>
        <Route path="/postform" element={<PostForm />}/>
        <Route path="/success" element={<SuccessTransaction />}/>

      </Routes>
    </Router>
  );
}

export default App;