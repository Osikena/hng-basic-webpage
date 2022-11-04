import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>

      <Router>

       <LandingPage />

        {/* <Routes> */}

          {/* <Route path='/' element={<LandingPage />} /> */}
          
          {/* <LandingPage /> */}

        {/* </Routes> */}
        
      </Router>

    </>
  );
}

export default App;
