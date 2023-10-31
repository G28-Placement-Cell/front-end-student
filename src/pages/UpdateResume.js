import React from 'react'
import { useState } from 'react';
import '../Password/MainCP.css';
import { redirect } from 'react-router-dom';
// import { useUploadMutation } from '../slices/student/studentApislice';

function UpdateResume() {
    const form = document.getElementById('uploadForm');
    const [tmp, setTmp] = useState('');
    const [done, setDone] = useState(false);
    if (!form) {
        console.log('not ok');
    }
    if (form) console.log('oky');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        console.log(formData.get('file'));
        fetch('http://localhost:8000/api/student/files', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(response => { response.json(); })
            .then(data => {
                {
                    console.log(data);
                    setDone(true);
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
    if (done) {
        return (
            <div className="maincp" style={{marginTop:'20vh'}}>
                <div className="change-password-container" >
                    <h2 style={{margin:'auto',justifyContent:'center',alignItems:'center'}}>File Uploaded Successfully</h2>
                </div>
            </div>
        );
    }
    return (
        <div className="maincp" style={{marginTop:'20vh'}}>
            
            <div className="change-password-container" style={{margin:'auto',justifyContent:'center',alignItems:'center'}} >
                {/* <form >
                    <input type="file" name="file" />
                </form> */}
                <h2>UPDATE RESUME</h2>
                <form id="uploadForm" encType="multipart/form-data">
                    <input type="file" name="file" onChange={(e) => { setTmp(e.target.value) }} />
                    <div style={{marginLeft:'7vw'}}>
                    <input type="submit" value="Upload" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateResume;