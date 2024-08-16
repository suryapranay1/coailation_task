import PropTypes from "prop-types";
import "./LabResults.css";

const LabResults = ({ labResults }) => {
  if (!labResults || labResults.length === 0) {
    return <div>No lab results available</div>;
  }

  return (
    <div className="lab-results-container">
      <h2>Lab Results</h2>
      <div className="results-list">
        {labResults.map((result, index) => (
          <div key={index} className="result-item">
            <span>{result}</span>
            <img
              src="/images/download_FILL0_wght300_GRAD0_opsz24 (1)@2x.png"
              width="20"
              height="20"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

LabResults.propTypes = {
  labResults: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LabResults;
