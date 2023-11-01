import { useState, useEffect } from "react";
// import {CheckDate} from "../pages/ChechDate"
import { useParams } from 'react-router-dom';

export const Buttoned = ({ reg_open, reg_end, cpiOf, jobId }) => {

  const stu_id = localStorage.getItem('studentInfo');
  const stuId = stu_id ? JSON.parse(stu_id)._id : null;
  console.log(stuId);
  console.log(jobId);

  const [stads, setStads] = useState(false);
  const [student, setStudent] = useState({});//student object
  const [loading, setLoading] = useState(true);//loading state
  // const studCpi = 7;
  useEffect(() => {
    console.log(localStorage.getItem('token'));
    fetch('http://localhost:8000/api/student/profile', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => res.json()).then((data) => {
        // console.log(data);
      setStudent(data.stu);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, []);

  const handleRegister = () => {
    if (jobId && stuId) {
      console.log("registered");
      fetch(`http://localhost:8000/api/jobprofile/${jobId}/${stuId}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          profileId: 1,
        })
      }).then((res) => res.json()).then((data) => {
        console.log(data);
        setStads(true);
      }).catch((err) => {
        console.log(err);
      });
    } else {
      console.log("Missing jobId or stuId.");
    }
  }

  const handleDeregister = () => {
    if (jobId && stuId) {
      console.log("deregistered");
      fetch(`http://localhost:8000/api/jobprofile/${jobId}/${stuId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          profileId: 1,
        })
      }).then((res) => res.json()).then((data) => {
        console.log(data);
        setStads(false);
      }).catch((err) => {
        console.log(err);
      });
    } else {
      console.log("Missing jobId or stuId.");
    }
  }

  var currentDate = new Date();
  const [stats, setStatus] = useState(false);
  const date1 = new Date(reg_open);
  const date2 = new Date(reg_end);
  useEffect(() => {
    if (currentDate.getTime() > date1.getTime() && currentDate.getTime() < date2.getTime())
      setStatus(!stats);
    // console.log(date1, date2);
  }, []);

  return (

    <>
      {stats && (student?.cpi >= cpiOf) && !stads && <button style={{
        backgroundColor: "#493D72", color: "white", fontSize: 16, height: 41,
        marginTop: 2
      }} className="btn btn-lg pb-2" onClick={() => { handleRegister() }}>REGISTER</button>}
      {stads &&
        <>
          <button style={{ backgroundColor: "#493D72", color: "white", marginTop: 2, fontSize: 15, height: 41, borderRadius: 5 }} className="btn btn-sm pb-2" onClick={() => { handleDeregister() }}> DEREGISTER </button>
        </>
      }
      {(!stats || student?.cpi < cpiOf) && <><button style={{
        backgroundColor: "#493D72", color: "white", fontSize: 16, height: 41,
        marginTop: 2
      }} className="btn btn-lg pb-2" disabled> REGISTER </button></>}
      {/* { !stats && <button style={{ backgroundColor: "#493D72", color: "white", fontSize: 16, height: 41, 
            marginTop:2}} className="btn btn-lg pb-2" onClick={() => { setStads(!stads) }}>REGISTER</button>} */}
    </>

  );
}


{/* <div style={{display:'flex', flexDirection:'column', justifyContent:'center',justifySelf:'flex-end' , inlineSize:110}}>
                        <div className="pb-2 d-flex flex-column gap-1 px-1 pe-1 my-1" style={{ border: '1px solid #2B2442', borderRadius: '5px'}}>
                            <h5 className="me-0 pe-0 mb-0">Resume</h5>
                            <button style={{ backgroundColor: "#493D72", color: "white" }} className="btn btn-sm"> DOWNLOAD</button>
                            <button style={{ backgroundColor: "#493D72", color: "white"}} className="btn btn-sm"> UPDATE</button>
                        </div>
                    </div> */}