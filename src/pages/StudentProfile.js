import React from 'react';
import '../style/studentprofile.css';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from 'react';
import { useGetdataMutation } from '../slices/student/studentApislice';
import axios from 'axios';

function StudentProfile() {
  const [student, setStudent] = useState({});//student object

  // const [getdata, { isLoading }] = useGetdataMutation();

  // const fetchdata = async () => {
  //   try {
  //     const studentid = localStorage.getItem('studentinfo.student_id');
  //     const res = await getdata({ studentid }).unwrap();
  //     // dispatch(setCredentials({ ...res }))
  //     // href = "http://localhost:3001/";
  //     // navigate('http://localhost:3001/');
  //     //link to http://localhost:3001 with payload
  //     // window.location.href = 'http://localhost:3001'
  //     // navigate('/profile');
  //     console.log(res);
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    console.log(localStorage.getItem('token'));
    fetch('http://localhost:5000/api/student/profile', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      setStudent(data.stu);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  return (
    < div className="container" >
      <div className="main-body">

        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                  <div className="mt-3">
                    <h4>student name</h4>
                    <p id="student id" className="text-secondary mb-1">student id</p>
                    <p id="verify" className="text-muted font-size-sm">Your profile is APPROVED </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Email</h6>
                  <span id="Email" className="text-secondary">0000@daiict.ac.in</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">10th Percentage</h6>
                  <span id="10thPercentage" className="text-secondary">00.00%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">12th Percentage</h6>
                  <span id="12thPercentage" className="text-secondary">00.00%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">CPI</h6>
                  <span id="CPI" className="text-secondary">0.00</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Current BackLogs</h6>
                  <span id="CurrentBackLogs" className="text-secondary">0</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Total BackLogs</h6>
                  <span id="TotalBackLogs" className="text-secondary">0</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Branch</h6>
                  <span id="Branch" className="text-secondary">0</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Domain</h6>
                  <span id="Domain" className="text-secondary">IT</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Registering For</h6>
                  <span id="RegisteringFor" className="text-secondary">-</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Interested in Placement</h6>
                  <span id="InterestedinPlacement" className="text-secondary">Yes/NO</span>
                </li>
                {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Out of Placement Drive</h6>
                    <span className="text-secondary">Yes/NO</span>
                  </li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div id="FirstName" className="col-sm-9 text-secondary">
                    -
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div id="LastName" className="col-sm-9 text-secondary">
                    -
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Alternate Email Address</h6>
                  </div>
                  <div id="AlternateEmailAddress" className="col-sm-9 text-secondary">
                    xyz@gmail.com
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Skype ID</h6>
                  </div>
                  <div id="SkypeID" className="col-sm-9 text-secondary">
                    123:jdgajdg:123
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Date Of Birth</h6>
                  </div>
                  <div id="DOB" className="col-sm-9 text-secondary">
                    00-00-0000
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div id="Gender" className="col-sm-9 text-secondary">
                    -
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile Number</h6>
                  </div>
                  <div id="MobileNumber" className="col-sm-9 text-secondary">
                    1234567890
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Alternate Mobile Number</h6>
                  </div>
                  <div id="AlternateMobileNumber" className="col-sm-9 text-secondary">
                    1234567890
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Father Name</h6>
                  </div>
                  <div id="FatherName" className="col-sm-9 text-secondary">
                    bhai
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mother Name</h6>
                  </div>
                  <div id="MotherName" className="col-sm-9 text-secondary">
                    ben
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Permanent Address</h6>
                  </div>
                  <div id="PermanentAddress" className="col-sm-9 text-secondary">
                    -
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Current Address</h6>
                  </div>
                  <div id="CurrentAddress" className="col-sm-9 text-secondary">
                    -
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <Button sx={{ width: 150, mr: 5, backgroundColor: "#2B2442" }} id="resume" required={true} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                      Download Resume
                    </Button>
                    <Button sx={{ width: 150, backgroundColor: "#2B2442" }} id="resume" required={true} type="file" component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                      Upload Resume
                      <VisuallyHiddenInput type="file" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}

export default StudentProfile;