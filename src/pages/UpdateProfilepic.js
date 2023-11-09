import React from 'react'
import { useState } from 'react';
import '../Password/MainCP.css';
import { redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useUploadMutation } from '../slices/student/studentApislice';

function UpdateProfilepic() {
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
        fetch('http://localhost:8000/api/student/files/profilepic', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(response => { response.json(); setDone(true); })
            // .then(data => {
            //     {
            //         console.log(data);
            //         setDone(true);
            //     }
            // })
            .catch(error => {
                console.error(error);
                toast.error(error);
            });
    });
    if (done) {
        return (
            <div className="maincp" style={{ paddingTop: '20vh' }}>
                <div className="change-password-container" >
                    <h2 style={{ margin: 'auto', justifyContent: 'center', alignItems: 'center' }}>File Uploaded Successfully</h2>
                </div>
            </div>
        );
    }
    return (
        <div className="maincp" style={{ paddingTop: '20vh' }}>

            <div className="change-password-container" style={{ margin: 'auto', justifyContent: 'center', alignItems: 'center' }} >
                {/* <form >
                    <input type="file" name="file" />
                </form> */}
                <h2>UPDATE Profile Pic</h2>
                <form id="uploadForm" encType="multipart/form-data" >
                    <input type="file" name="file" onChange={(e) => { setTmp(e.target.value) }} />
                    {/* <div style={{justifyItems:'center'}}> */}
                    <input type="submit" value="Upload" style={{ marginLeft: '125px' }} />
                    {/* </div> */}
                </form>
            </div>
        </div>
        // style={{margin:'auto',justifyContent:'center',alignItems:'center'}}
    );
}

export default UpdateProfilepic;