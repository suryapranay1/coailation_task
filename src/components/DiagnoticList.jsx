import PropTypes from "prop-types";
import "./DiagnoticList.css";

const DiagnosticList = ({ diagnosticList }) => {
  if (!diagnosticList || diagnosticList.length === 0) {
    return <div>No diagnostic information available</div>;
  }

  return (
    <div className="diagnostic-list-container">
      <h2>Diagnostic List</h2>
      <table className="diagnostic-table">
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticList.map((diagnosis, index) => (
            <tr key={index}>
              <td>{diagnosis.name}</td>
              <td>{diagnosis.description}</td>
              <td>{diagnosis.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DiagnosticList.propTypes = {
  diagnosticList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DiagnosticList;
