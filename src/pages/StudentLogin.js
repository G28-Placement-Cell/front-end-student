import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import student from '../images/student.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/student/studentApislice';
import { setCredentials } from '../slices/student/authslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function StudentLogin() {

    const [studentid, setStudentid] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();
    // const { studentInfo } = useSelector((state) => state.auth);
    // console.log(studentInfo);
    // useEffect(() => {
    //     if (studentInfo) {
    //         // navigate('/');
    //         window.location.href = 'http://localhost:3001'
    //         // href = "http://localhost:3001/";
    //     }
    // }, [studentInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ studentid, password }).unwrap();
            dispatch(setCredentials({ ...res }))
            // href = "http://localhost:3001/";
            // navigate('http://localhost:3001/');
            //link to http://localhost:3001 with payload
            // window.location.href = 'http://localhost:3001'
            navigate('/profile');
        }
        catch (err) {
            toast.error(err?.data?.message || err.error);
            console.log(err);
        }
    }

    const heading = {
        textAlign: 'center',
        margin: '20px 0',
    };

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const inputStyles = {
        margin: '10px 0',
        width: '100%',
    };

    return (
        <>
            {/* <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Placement Cell
                    </Typography>
                    <Button color="inherit" sx={{ mx: 1 }}>Login As</Button>
                    <Button color="inherit" sx={{ mx: 1 }}>Contact us</Button>
                    <Button color="inherit" sx={{ mx: 1 }}>About Us</Button>
                </Toolbar>
            </AppBar> */}

            <Grid container>
                {/* Left 60% - Image */}
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={8}>
                    <img src={student} alt="Admin Image" style={{ width: '64%', height: '87%', alignItems: 'center' }} />
                </Grid>

                {/* Right 40% - Admin Input Area */}
                <Grid item xs={4} component={Paper} elevation={3}>
                    <div style={{ padding: '20px' }}>
                        <Typography sx={heading} variant="h4" gutterBottom>
                            Student Login
                        </Typography>
                        {/* Admin login form */}
                        <form onSubmit={submitHandler}>
                            <TextField
                                label="student_id"
                                id="student_id"
                                name="student_id"
                                type="number"
                                variant="outlined"
                                fullWidth
                                required
                                style={inputStyles}
                                onChange={(e) => {
                                    setStudentid(e.target.value);
                                }}
                            />
                            <TextField
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                style={inputStyles}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', padding: '10px' }}>
                                {/* Submit button */}
                                <Button type="submit" variant="contained" color="primary">
                                    Login
                                </Button>

                                {/* Forgot Password link */}
                                <a href="#" style={{ textDecoration: 'none', color: 'blue' }}>Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default StudentLogin;