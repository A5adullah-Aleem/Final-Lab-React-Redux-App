import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Dragons from './components/Dragons';
import Missions from './components/Missions/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <nav className="bg-light border-bottom border-success navbar navbar-expand-md navbar-light">
        <div className="container">

          <div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto gap-3">
                <li className="nav-item">
                  <NavLink to="/missions" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>Missions</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dragons" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>Dragons</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/myprofile" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>My Profile</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
