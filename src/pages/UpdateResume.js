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
            <div className="maincp">
                <div className="change-password-container">
                    <h1>File Uploaded Successfully</h1>
                </div>
            </div>
        );
    }
    return (
        <div className="maincp">
            <div className="change-password-container">
                {/* <form >
                    <input type="file" name="file" />
                </form> */}
                <form id="uploadForm" encType="multipart/form-data">
                    <input type="file" name="file" onChange={(e) => { setTmp(e.target.value) }} />
                    <input type="submit" value="Upload" />
                </form>
            </div>
        </div>
    );
}

export default UpdateResume;