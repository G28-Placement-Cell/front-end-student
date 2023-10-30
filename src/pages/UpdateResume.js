import React from 'react'
// import { useState } from 'react';
import '../Password/MainCP.css';
// import { useUploadMutation } from '../slices/student/studentApislice';

function UpdateResume() {
    const form = document.getElementById('uploadForm');
    // if (!form) return <>
    //     <h1>
    //         data not found
    //     </h1>
    // </>;
    if (form) {
        console.log('ok');
    }
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        fetch('http://localhost:8000/api/student/files', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    });
    return (
        <div className="maincp">
            <div className="change-password-container">
                {/* <form >
                    <input type="file" name="file" />
                </form> */}
                <form id="uploadForm" encType="multipart/form-data">
                    <input type="file" name="file" />
                    <input type="submit" value="Upload" />
                </form>
            </div>
        </div>
    );
}

export default UpdateResume;