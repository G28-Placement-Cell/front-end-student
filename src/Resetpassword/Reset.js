import React, { useState } from 'react';
import './Reset.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useReset_applyMutation } from '../slices/student/studentApislice';
import { removeReset } from '../slices/student/authslice';

function validatePassword(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
};
function ResetPassword() {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const [reset_apply] = useReset_applyMutation();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return; // Exit the function without submitting the form
    }
    else if (!validatePassword(password)) {
      toast.error('Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character');
      return;
    }
    try {
      // console.log('ok');
      const resetId = localStorage.getItem('resetId');
      console.log(resetId);
      const res = await reset_apply({ otp, password, resetId }).unwrap();
      dispatch(removeReset());
      toast.success(res.message);
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      console.log(err);
    }
  };

  return (
    <div className="maincp" style={{ marginTop: 0, paddingTop: '20px' }}>
      <div className="change-password-container">
        <h2>Reset Password</h2>
        <form id='uploadForm' onSubmit={submitHandler}>

          <div className="password-form">
            <label htmlFor="currentPassword">Enter OTP</label>
            <input
              //   type="password"
              id="otp"
              required
              // value={currentPassword}
              onChange={(e) => setOtp(e.target.value)}
            />
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              // value={newPassword}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              required
              // value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Reset Password</button>
            {message && <p className="message">{message}</p>}
          </div>
        </form>
      </div>
    </div >

  );
}

export default ResetPassword;
