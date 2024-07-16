// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage/Home';
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



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/workers" element={<WorkersList />} />
          <Route
            path="/blog/sewer-maintenance"
            element={<RegularSewerMaintance />}
          />
          <Route path="/blog/septic-tank" element={<SepticTank />} />
          <Route path="/blog/sewer-line-repair" element={<SewerRepair />} />
          <Route path="/blog/drain-cleaning" element={<DrainCleaning />} />
          <Route
            path="/blog/septic-tank-problems"
            element={<SepticTankProblems />}
          />
          <Route
            path="/blog/grease-trap-maintenance"
            element={<GreaseTrap />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
