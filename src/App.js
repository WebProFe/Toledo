import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages/Container';
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => (
  <Router>
    <div>
      <Pages/>
    </div>
  </Router>
);

export default App;