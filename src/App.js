import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import './index.css'

function App() {
  return (
   <Routes>
    <Route path='/*' element={<Home/>} />
    <Route path='productos' element={<Productos />} />
   </Routes>
  );
}

export default App;
