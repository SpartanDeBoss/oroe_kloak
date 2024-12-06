// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './HomePage/Home';
import Contact from './Contacts/Contact';
import Service from './Services/Service';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Footer from './Footer/Footer';
import RegularSewerMaintance from './RegularSewerMaintanaceBlogPost/RegularSewerMaintance';
import SepticTank from './SepticTankBlogPost/SepticTank';
import SewerRepair from './SewerRepairBlogPost/SewerRepair';
import DrainCleaning from './DrainCleaningBlogPost/DrainCleaning';
import SepticTankProblems from './SepticTankProblemsBlogPost/SepticTankProblems';
import GreaseTrap from './GreaseTrapBlogPost/GreaseTrap';
import WorkersList from './TheTeam/WorkersList';

//  using the useLocation hook to get the current location object
const ScrollToTop = () => {
  const { pathname } = useLocation();
//  using the useEffect hook to scroll to the top of the page when the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  },[pathname]);
}


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home key={window.location.pathname} />} />
          <Route
            path="/contact"
            element={<Contact key={window.location.pathname} />}
          />
          <Route
            path="/services"
            element={<Service key={window.location.pathname} />}
          />
          <Route
            path="/about"
            element={<About key={window.location.pathname} />}
          />
          <Route
            path="/workers"
            element={<WorkersList key={window.location.pathname} />}
          />
          <Route
            path="/blog/sewer-maintenance"
            element={<RegularSewerMaintance key={window.location.pathname} />}
          />
          <Route
            path="/blog/septic-tank"
            element={<SepticTank key={window.location.pathname} />}
          />
          <Route
            path="/blog/sewer-line-repair"
            element={<SewerRepair key={window.location.pathname} />}
          />
          <Route
            path="/blog/drain-cleaning"
            element={<DrainCleaning key={window.location.pathname} />}
          />
          <Route
            path="/blog/septic-tank-problems"
            element={<SepticTankProblems key={window.location.pathname} />}
          />
          <Route
            path="/blog/grease-trap-maintenance"
            element={<GreaseTrap key={window.location.pathname} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
