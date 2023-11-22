import { useState, useEffect } from "react";
import { Typography, Paper, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

export const Buttoned = ({ reg_open, reg_end, cpiOf, jobId, registered, student_cpi }) => {
  const navigate = useNavigate();
  const stu_id = localStorage.getItem('studentInfo');
  const stuId = stu_id ? JSON.parse(stu_id)._id : null;
  // const jobProfiles = localStorage.getItem('jobProfiles');
  // console.log(stuId);
  // console.log(jobId);
  // console.log(registered, 'reg');

  const [student, setStudent] = useState({});//student object
  const [loading, setLoading] = useState(true);//loading state
  const [load, setLoad] = useState(false);
  // console.log(student_cpi);
  let isvalidcpi = false;
  // console.log(parseFloat(student_cpi), parseFloat(cpiOf));
  if (parseFloat(student_cpi) >= parseFloat(cpiOf)) {
    isvalidcpi = true;
  }
  // console.log(isvalidcpi);

  const [stads, setStads] = useState(registered);

  const handleRegister = () => {


    if (jobId && stuId) {
      setLoad(true);
      // console.log("registered");
      fetch(`https://back-end-production-3140.up.railway.app/api/jobprofile/${jobId}/${stuId}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          profileId: 1,
        }),
      }).then((res) => res.json()).then((data) => {
        setStads(true);
        setLoad(false);
      }).catch((err) => {
        // console.log(err);
      });
    } else {
      // console.log("Missing jobId or stuId.");
    }
  }

  const handleDeregister = () => {
    if (jobId && stuId) {
      setLoad(true);
      // console.log("deregistered");
      fetch(`https://back-end-production-3140.up.railway.app/api/jobprofile/${jobId}/${stuId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          profileId: 1,
        })
      }).then((res) => res.json()).then((data) => {
        setStads(false);
        setLoad(false);
      }).catch((err) => {
        // console.log(err);
      });
    } else {
      // console.log("Missing jobId or stuId.");
    }
  }

  var currentDate = new Date();
  const [stats, setStatus] = useState(false);
  const date1 = new Date(reg_open);
  const date2 = new Date(reg_end);

  useEffect(() => {
    if (currentDate.getTime() > date1.getTime() && currentDate.getTime() < date2.getTime())
      setStatus(!stats);
  }, []);


  let button;

  if (stats && isvalidcpi && !stads) {
    button = (
      <button
        style={{
          backgroundColor: "#493D72",
          color: "white",
          fontSize: 16,
          height: 41,
          marginTop: 2,
        }}
        className="btn btn-lg pb-2"
        onClick={() => {
          handleRegister();
        }}
      >
        REGISTER
      </button>
    );
  } else if (stads) {
    if (stats) {
      button = (
        <button
          style={{
            backgroundColor: "#2B2442",
            color: "white",
            marginTop: 2,
            fontSize: 15,
            height: 41,
            borderRadius: 5,
          }}
          className="btn btn-sm pb-2"
          onClick={() => {
            handleDeregister();
          }}
        >
          DEREGISTER
        </button>
      );
    }
    else {
      button = (
        <button
          style={{
            backgroundColor: "#2B2442",
            color: "white",
            marginTop: 2,
            fontSize: 15,
            height: 41,
            borderRadius: 5,
          }}
          className="btn btn-sm pb-2"
          disabled
        >
          DEREGISTER
        </button>
      );
    }
  }
  else {
    button = (
      <button
        style={{
          backgroundColor: "#493D72",
          color: "white",
          fontSize: 16,
          height: 41,
          marginTop: 2,
        }}
        className="btn btn-lg pb-2"
        disabled
      >
        REGISTER
      </button>
    );
  }
  if (load) return <>
    {
      <button
        style={{
          backgroundColor: "#493D72",
          color: "white",
          fontSize: 16,
          height: 41,
          marginTop: 2,
        }}
        className="btn btn-lg pb-2"
      >
        Loading...
      </button>
    }</>
  else {
    return <>

      {button}
    </>;
  }
}


{/* {stats && isvalidcpi && !stads && <button style={{
        backgroundColor: "#493D72", color: "white", fontSize: 16, height: 41,
        marginTop: 2
      }} className="btn btn-lg pb-2" onClick={() => { handleRegister() }}>REGISTER</button>}
      {stads &&
        <>
          <button style={{ backgroundColor: "#493D72", color: "white", marginTop: 2, fontSize: 15, height: 41, borderRadius: 5 }} className="btn btn-sm pb-2" onClick={() => { handleDeregister() }}> DEREGISTER </button>
        </>
      }
      {(!stats || !isvalidcpi) && <><button style={{
        backgroundColor: "#493D72", color: "white", fontSize: 16, height: 41,
        marginTop: 2
      }} className="btn btn-lg pb-2" disabled> REGISTER </button></>} */}