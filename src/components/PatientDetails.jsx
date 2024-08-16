import PropTypes from "prop-types";
import "./patientDetails.css";

const PatientDetail = ({ patient }) => {
  return (
    <div className="patient-detail-container">
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="patient-detail-photo"
      />
      <h2>{patient.name}</h2>
      <ul className="patient-detail-info">
        <li>
          <strong>Date Of Birth: </strong>
          {patient.date_of_birth}
        </li>
        <li>
          <strong>Gender: </strong>
          {patient.gender}
        </li>
        <li>
          <strong>Contact Info: </strong>
          {patient.phone_number}
        </li>
        <li>
          <strong>Emergency Contacts: </strong>
          {patient.emergency_contact}
        </li>
        <li>
          <strong>Insurance Provider: </strong>
          {patient.insurance_type}
        </li>
        <li>
          <button style={{ marginLeft: "3em" }} className="show-all-info-btn">
            Show All Information
          </button>
        </li>
      </ul>
    </div>
  );
};

PatientDetail.propTypes = {
  patient: PropTypes.shape({
    profile_picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date_of_birth: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    emergency_contact: PropTypes.string.isRequired,
    insurance_type: PropTypes.string.isRequired,
  }).isRequired,
};

export default PatientDetail;
