import { Bar } from "react-chartjs-2"
import '../App.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Performance analysis",
      },
    },
  }

  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);



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
      if (data.stu.verified === false) {
        navigate('/nv');
      }
      setLoading(false);
    }).catch((err) => {
      // console.log(err);
      setLoading(false);
    });
  }, []);

  const labels = ["Performance"]
  const data1 = [`${student?.jobprofiles?.length}`]
  const data2 = [`${student?.shorlisted?.length}`]

  const navigate = useNavigate();

  const data = {
    labels,
    datasets: [
      {
        label: "Tests Attempted",
        data: data1,
        backgroundColor: "rgba(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
      {
        label: "Tests cleared",
        data: data2,
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
      },
    ],
  }

  return (<div className="graph-container" style={{ paddingTop: '5vh' }}><Bar options={options} data={data} /></div>);
}

export default BarChart
