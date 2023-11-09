import React, { useState } from 'react';
import '../Password/MainCP.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useReset_passMutation } from '../slices/student/studentApislice';


function ForgotPass() {
    const [student, setStudent] = useState('');
    const [reset_pass] = useReset_passMutation();
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            // console.log('ok');
            const res = await reset_pass({ student_id: student }).unwrap();
            toast.success(res.message);
            // navigate('/');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            console.log(err);
        }
    };

    return (
        <div className="maincp" style={{ marginTop: 0, paddingTop: '20px' }}>
            <div className="change-password-container">
                <h2>Forgot Password</h2>
                <form onSubmit={submitHandler}>

                    <div className="password-form">
                        <label htmlFor="student_id">Student id</label>
                        <input
                            type="text"
                            id="student_id"
                            required
                            // value={student_id}
                            onChange={(e) => setStudent(e.target.value)}
                        />
                        <button type="submit">Send Email</button>
                    </div>
                </form>
            </div>
        </div >

    );
}

export default ForgotPass;
