import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Chart } from "chart.js/auto";
import "./BloodPressureChart.css"; // Import CSS file for styling

const BloodPressureChart = ({ diagnosisHistory }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCtx = chartRef.current.getContext("2d");

    const labels = diagnosisHistory.map(
      (entry) => `${entry.month} ${entry.year}`
    );
    const systolicData = diagnosisHistory.map(
      (entry) => entry.blood_pressure.systolic.value
    );
    const diastolicData = diagnosisHistory.map(
      (entry) => entry.blood_pressure.diastolic.value
    );

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Systolic",
          data: systolicData,
          borderColor: "#ff6384", // Pink color for systolic
          fill: false,
          tension: 0.1,
        },
        {
          label: "Diastolic",
          data: diastolicData,
          borderColor: "#36a2eb", // Blue color for diastolic
          fill: false,
          tension: 0.1,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false, // This allows you to set a custom width/height
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Blood Pressure Over Time",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const myChart = new Chart(chartCtx, config);

    return () => {
      myChart.destroy();
    };
  }, [diagnosisHistory]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

// Add PropTypes validation for the diagnosisHistory prop
BloodPressureChart.propTypes = {
  diagnosisHistory: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      blood_pressure: PropTypes.shape({
        systolic: PropTypes.shape({
          value: PropTypes.number.isRequired,
          levels: PropTypes.string.isRequired,
        }).isRequired,
        diastolic: PropTypes.shape({
          value: PropTypes.number.isRequired,
          levels: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      heart_rate: PropTypes.shape({
        value: PropTypes.number.isRequired,
        levels: PropTypes.string.isRequired,
      }).isRequired,
      respiratory_rate: PropTypes.shape({
        value: PropTypes.number.isRequired,
        levels: PropTypes.string.isRequired,
      }).isRequired,
      temperature: PropTypes.shape({
        value: PropTypes.number.isRequired,
        levels: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default BloodPressureChart;
