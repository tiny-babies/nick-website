import React from 'react';

import Home from './pages/Home';
import Welcome from './pages/Welcome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupList from './components/GroupList';
import GroupEdit from './components/GroupEdit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/about" element={<Home />} />
        <Route path='/groups' exact={true} element={<GroupList />} />
        <Route path='/groups/:id' element={<GroupEdit />} />
      </Routes>
    </Router>
  )
}

export default App;