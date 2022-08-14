import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetail />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
