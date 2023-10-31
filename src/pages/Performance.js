import { Bar } from "react-chartjs-2"
import '../App.css'

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

  const labels = ["Performance"]
  const data1 = [10]
  const data2 = [7]

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

  return (<div className="graph-container" style={{marginTop:'5vh'}}><Bar options={options} data={data}/></div>);
}

export default BarChart