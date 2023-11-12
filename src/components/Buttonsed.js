import { useState, useEffect } from "react";

export const Buttoned = ({ reg_open, reg_end, cpiOf, jobId, registered }) => {

  const stu_id = localStorage.getItem('studentInfo');
  const stuId = stu_id ? JSON.parse(stu_id)._id : null;
  // const jobProfiles = localStorage.getItem('jobProfiles');
  console.log(stuId);
  console.log(jobId);
  console.log(registered, 'reg');

  const [student, setStudent] = useState({});//student object
  const [loading, setLoading] = useState(true);//loading state

  const [stads, setStads] = useState(registered);

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
    </>

  );
}