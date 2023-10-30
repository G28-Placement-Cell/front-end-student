import './App.css';
// import { Head } from './previous/Head';
// import { Job } from './previous/Job';
// import DataGrid from 'react-data-grid';
import { Tablet } from './pages/Tablet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import StudentProfile from './pages/StudentProfile';
import { ChangePassword } from './pages/ChangePassword';
import Announcement from './pages/Announcement'
import StudentLogin from './pages/StudentLogin';
import { Errored } from './pages/Errored';
import StudentRegister from './pages/studentRegister';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router>
        <Header />
        <ToastContainer />
        <div style={{ minHeight: "84vh" }}>
          <Routes>
            <Route path='/' element={<StudentLogin />} />
            <Route path='/register' element={<StudentRegister />} />
            <Route path='/Profile' element={<StudentProfile />} />
            <Route path='/companies' element={<Tablet />} />
            <Route path='/announcements' element={<Announcement />} />
            <Route path='/performance' />
            {/* <Route path='/updateresume'  /> */}
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/logout' />
            <Route path='/*' element={<Errored />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );

}

export default App;



