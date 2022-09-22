import React from 'react';

import Home from './pages/Home';
import Welcome from './pages/Welcome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spotify from './pages/Spotify';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Welcome />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path='/spotify' exact={true} element={<Spotify />} />
        {/* <Route path='/groups/:id' element={<GroupEdit />} /> */}
      </Routes>
    </Router>
  )
}

export default App;