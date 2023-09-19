import './App.css';
import { Head } from './previous/Head';
import { Job } from './previous/Job';
import DataGrid from 'react-data-grid';
import { Tablet } from './pages/Tablet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer'; 
import Header from './components/Header';
import StudentProfile from './pages/StudentProfile';
function App() {
  
  return (
    <>
        <Router>
           <Header />
          <Routes>
            <Route path='/Profile' element={<StudentProfile/>} />
            <Route path='/companies' element={<Tablet />}/>
            <Route path='/announcements'  />
            <Route path='/performance' />
            <Route path='/updateresume'  />
            <Route path='/changepassword' />
            <Route path='/logout'  />
          </Routes>
          <Footer />
        </Router>
    </>
   );

}

export default App;



