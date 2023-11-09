import React, { useState } from 'react';
import './MainCP.css';
import { useChange_passwordMutation, useLogoutMutation } from '../slices/student/studentApislice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/student/authslice';
import { useNavigate } from 'react-router-dom';


function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [change_password] = useChange_passwordMutation();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const [logoutapicall] = useLogoutMutation();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      await logoutapicall().unwrap();
      dispatch(logout());
      navigate('/');
    }
    catch (err) {
      console.log(err);
    }
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      // console.log('ok');
      const res = await change_password({ currentPassword, newPassword, confirmPassword }).unwrap();
      toast.success(res.message);
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      console.log(err);
    }
  };
  
  return (
    <div className="maincp" style={{marginTop:0, paddingTop:'20px'}}>
      <div className="change-password-container">
        <h2>Change Password</h2>
        <form onSubmit={submitHandler}>

          <div className="password-form">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              required
              // value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              // value={newPassword}
              required
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              required
              // value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Change Password</button>
            {message && <p className="message">{message}</p>}
          </div>
        </form>
      </div>
    </div >

  );
}

export default ChangePassword;
