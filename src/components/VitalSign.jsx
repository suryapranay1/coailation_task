import PropTypes from "prop-types";
import "./VitalSign.css"; // Import CSS file for styling

const VitalSign = ({ icon, label, value, status }) => {
  return (
    <div className={`vital-sign ${status.toLowerCase()}`}>
      <div className="vital-sign-icon">{icon}</div>
      <div className="vital-sign-info">
        <p className="vital-sign-value">{value}</p>
        <p className="vital-sign-label">{label}</p>
        <p className="vital-sign-status">{status}</p>
      </div>
    </div>
  );
};

VitalSign.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default VitalSign;
