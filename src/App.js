import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes/Routes';
import { Header } from './components/common/HeaderElements/index';

require('dotenv').config();

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes></Routes>
    </Router>
  );
};

export default App;
