import React from 'react';
import '../style/studentprofile.css';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from 'react';
import { useGetdataMutation } from '../slices/student/studentApislice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

function StudentProfile() {
  const [student, setStudent] = useState({});//student object
  const [loading, setLoading] = useState(true);//loading state
  const navigate = useNavigate();

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  useEffect(() => {
    // console.log(localStorage.getItem('token'));
    fetch('https://back-end-production-3140.up.railway.app/api/student/profile', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => res.json()).then((data) => {
      // console.log(data);
      setStudent(data.stu);
      // const profilefileid = student?.profile_pic;
      // const profileurl = `https://back-end-production-3140.up.railway.app/api/student/files/profilepic/${profilefileid}`
      setLoading(false);
    }).catch((err) => {
      // console.log(err);
      setLoading(false);
    });
  }, []);

  const handleClickResume = async () => {
    // const studentid = localStorage.getItem('studentinfo.student_id');
    const fileid = student?.resume;
    if (!fileid) navigate('/*')
    // const res = await axios.get(`https://back-end-production-3140.up.railway.app/api/student/files/${fileid}`, {
    //   headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //   },
    // });
    // console.log(res);
    else
      window.open(`https://back-end-production-3140.up.railway.app/api/student/files/resume/${fileid}`);
  }

  const handleClickProfilepic = async () => {
    const fileid = student?.profile_pic;
    if (!fileid) navigate('/*')
    else
      window.open(`https://back-end-production-3140.up.railway.app/api/student/files/profilepic/${fileid}`);
  }
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



  if (loading) return (<div style={{
    position: "relative",
    display: "flex",
    justifyContent: "center",
    padding: "5vh 5vw",
  }}>
    <Paper sx={{ py: 1, px: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '73vh' }} className="container">
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </Paper>
  </div>);
  const profilefileid = student?.profile_pic;
  // console.log(profilefileid)
  // if (profilefileid) {
  //   let profileurl = `https://back-end-production-3140.up.railway.app/api/student/files/profilepic/${profilefileid}`;
  // }
  return (
    <div className="container" style={{ marginTop: 0, paddingTop: '20px', marginBottom: 0, paddingBottom: '20px' }}>
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card" style={{ width: '100%' }}>
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  {student && profilefileid && <img src={`https://back-end-production-3140.up.railway.app/api/student/files/profilepic/${profilefileid}`} alt="Admin" className="rounded-circle" width={150} height={150} />}
                  <div className="mt-3">
                    <h4 id='student_name'>{student?.name.toUpperCase()}</h4>
                    <p id="student id" className="text-secondary mb-1">{student?.student_id}</p>
                    {
                      student?.verified ? <p id="verify" className="text-success font-size-sm">Your profile is APPROVED </p> : <p id="verify" className="text-danger font-size-sm">Your profile is NOT APPROVED </p>
                    }

                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3" style={{ width: '100%' }}>
              <ul className="list-group list-group-flush" style={{ width: '100%' }}>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0 mt-3">Email</h6>
                  <span id="Email" className="text-secondary">{student?.email.main}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">10th Percentage</h6>
                  <span id="10thPercentage" className="text-secondary">{student?.results.tenth_percentage}%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">12th Percentage</h6>
                  <span id="12thPercentage" className="text-secondary">{student?.results.twelve_percentage}%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">CPI</h6>
                  <span id="CPI" className="text-secondary">{student?.cpi}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Current BackLogs</h6>
                  <span id="CurrentBackLogs" className="text-secondary">{student?.academics.current_backlogs}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Total BackLogs</h6>
                  <span id="TotalBackLogs" className="text-secondary">{student?.academics.total_backlogs}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Branch</h6>
                  <span id="Branch" className="text-secondary">{student?.academics.branch.toUpperCase()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Domain</h6>
                  <span id="Domain" className="text-secondary">{student?.domain.toUpperCase()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Registering For</h6>
                  <span id="RegisteringFor" className="text-secondary">{student?.registering_for.toUpperCase()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Interested in Placement</h6>
                  <span id="InterestedinPlacement" className="text-secondary">Yes</span>
                </li>
                {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Out of Placement Drive</h6>
                    <span className="text-secondary">Yes/NO</span>
                  </li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3" style={{ width: '100%' }}>
              <div className="card-body" style={{ width: '100%' }}>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div id="FirstName" className="col-sm-9 text-secondary">
                    {student?.name.toUpperCase()}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div id="LastName" className="col-sm-9 text-secondary">
                    {student?.surname.toUpperCase()}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Alternate Email Address</h6>
                  </div>
                  <div id="AlternateEmailAddress" className="col-sm-9 text-secondary">
                    {student?.email.alt}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Skype ID</h6>
                  </div>
                  <div id="SkypeID" className="col-sm-9 text-secondary">
                    {student?.skype_id}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Date Of Birth</h6>
                  </div>
                  <div id="DOB" className="col-sm-9 text-secondary">
                    {new Date(student?.dob).toLocaleString(undefined, options)}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div id="Gender" className="col-sm-9 text-secondary">
                    {student?.gender.toUpperCase()}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile Number</h6>
                  </div>
                  <div id="MobileNumber" className="col-sm-9 text-secondary">
                    {student?.phone_number.main}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Alternate Mobile Number</h6>
                  </div>
                  <div id="AlternateMobileNumber" className="col-sm-9 text-secondary">
                    {student?.phone_number.alt}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Father Name</h6>
                  </div>
                  <div id="FatherName" className="col-sm-9 text-secondary">
                    {student?.father_name.toUpperCase()}
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mother Name</h6>
                  </div>
                  <div id="MotherName" className="col-sm-9 text-secondary">
                    {student?.mother_name.toUpperCase()}
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Permanent Address</h6>
                  </div>
                  <div id="PermanentAddress" className="col-sm-9 text-secondary">
                    {student?.address.per_address}
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Current Address</h6>
                  </div>
                  <div id="CurrentAddress" className="col-sm-9 text-secondary">
                    {student?.address.cur_address}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">

                    <Button disabled={!student?.resume} sx={{ width: 150, mr: 5, backgroundColor: "#2B2442", my: 1 }} id="resume" required={true} component="label" onClick={handleClickResume} variant="contained" startIcon={<CloudDownloadIcon />} >
                      Download Resume
                    </Button>
                    {/* <Button sx={{ width: 150, mr: 5, backgroundColor: "#2B2442", my: 1 }} id="resume" required={true} component="label" onClick={handleClickProfilepic} variant="contained" startIcon={<CloudDownloadIcon />}>
                      Download Profilepic
                    </Button> */}
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