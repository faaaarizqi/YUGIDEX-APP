import React from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Pages
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';
import Person2Icon from '@mui/icons-material/Person2';
import HelpIcon from '@mui/icons-material/Help';
import AllCard from "./pages/AllCard";
import DetailPage from "./pages/DetailPage";
import ProfilePage from "./pages/ProfilePage";

import "./App.css";
import About from "./pages/AboutPage";
import DetailStaple from "./pages/DetailStaple";
import StapleCard from "./pages/StapleCard";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AllCard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/staplecard" element={<StapleCard />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/detailstaple/:id" element={<DetailStaple />} />
        </Routes>
      </div>

      <footer>

        <div className="link-wrapper">
          <NavLink to="/" className="iconWrapper">
            <ViewCarouselIcon style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

          <NavLink to="/staplecard" className="iconWrapper">
            <ViewCarouselOutlinedIcon style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

          <NavLink to="/about" className="iconWrapper">
            <HelpIcon style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

          <NavLink to="/profile" className="iconWrapper">
            <Person2Icon style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

        </div>

      </footer>
    </Router>
  );
}

export default App;
