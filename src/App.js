import './App.css';
import { AuthProvider } from './components/contexts/AuthContext';
import Routes from './components/routes/Routes';

require('dotenv').config();

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Routes></Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
