import 'primereact/resources/primereact.min.css';          // core-стили PrimeReact
import 'primeicons/primeicons.css';                        // стили иконок


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage'
import { TestPage } from './pages/testPage';

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={< MainPage/>} />
              <Route path='/p' element={< TestPage/>} />
          </Routes>
      </Router>
  );
}

export default App
