import React from 'react';
import img from '../images/errorimage.png';
import StudentProfile from './StudentProfile'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Errored = () => {
    const navigate = useNavigate()

    const navigateProf = () => {
        navigate('/profile');
    }

    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <div style={{ margin:'auto'}}>
                    <img style={{height:'70vh',width:'60vw'}} src={img} alt="this is error image" />
            </div>
            <div style={{ margin:'auto', marginTop:10}}>
                    <Button variant="contained" style={{backgroundColor: '#2B2442'}} onClick={navigateProf}>GO BACK TO PROFILE PAGE</Button>
            </div>
       </div>
    );
}