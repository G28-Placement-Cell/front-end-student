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
// import { ResetPassword } from './pages/ResetPassword';
import Announcement from './pages/Announcement'
import StudentLogin from './pages/StudentLogin';
import { Errored } from './pages/Errored';
import BarChart from './pages/Performance'
import StudentRegister from './pages/studentRegister';
import UpdateResume from './pages/UpdateResume';
import UpdateProfilepic from './pages/UpdateProfilepic';
import AnnouncementSection from './pages/AdminAnnouncements';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Jobprofile from './pages/Jobprofile';
import { registerCharts } from './components/Performancemain';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import ForgotPass from './pages/ForgotPass';
import { ResetPassword } from './pages/ResetPassword';

registerCharts()

function App() {

  return (
    <Router>
      <Header />
      <div style={{ minHeight: "84vh", backgroundColor: '#e4eaf5' }}>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<StudentLogin />} />
          <Route path='/register' element={<StudentRegister />} />
          <Route path='/profile' element={<StudentProfile />} />
          <Route path='/companies' element={<Tablet />} />
          <Route path='/companyannouncements' element={<Announcement />} />
          <Route path='/adminannouncements' element={<AnnouncementSection />} />
          <Route path='/performance' element={<BarChart />} />
          <Route path='/updateResume' element={<UpdateResume />} />
          <Route path='/updateProfilepic' element={<UpdateProfilepic />} />
          {/* <Route path='/updateresume'  /> */}
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/jobprofile/:id' element={<Jobprofile />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/logout' />
          <Route path='/*' element={<Errored />} />
          <Route path='/forgotpass' element={<ForgotPass />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );

}

export default App;



