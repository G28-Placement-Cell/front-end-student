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
    console.log(localStorage.getItem('token'));
    fetch('http://localhost:8000/api/student/profile', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      setStudent(data.stu);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, []);

  const labels = ["Performance"]
  const data1 = [`${student?.jobprofiles?.length}`]
  const data2 = [`${student?.shortlisted?.length}`]

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

  return (student?.verified?(<div className="graph-container" style={{paddingTop:'5vh'}}><Bar options={options} data={data}/></div>) : (navigate('/nv')));
}

export default BarChart