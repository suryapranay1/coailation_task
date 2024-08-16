import PropTypes from "prop-types";
import DiagnosticList from "./DiagnoticList";
import LabResults from "./Labresults";
import BloodPressureChart from "./BloodPressureChart";
import VitalSign from "./VitalSign";

import "./Cover.css";
import PatientDetail from "./PatientDetails";

const Cover = ({ patient, diagnosticList, labResults }) => {
  const { diagnosis_history } = patient;
  const latestDiagnosis = diagnosis_history[diagnosis_history.length - 1];

  return (
    <div className="cover-container">
      <div className="patient-detail"></div>
      <PatientDetail patient={patient} />
      <div className="vital-signs-container">
        <VitalSign
          icon={
            <img
              src="/images/HeartBPM@2x.png"
              alt="Heart Rate Icon"
              width="60"
              height="60"
            />
          }
          label="Respiratory Rate"
          value={`${latestDiagnosis.respiratory_rate.value} bpm`}
          status={latestDiagnosis.respiratory_rate.levels}
        />
        <VitalSign
          icon={
            <img
              src="/images/HeartBPM@2x.png"
              alt="Heart Rate Icon"
              width="60"
              height="60"
            />
          }
          label="Temperature"
          value={`${latestDiagnosis.temperature.value}°F`}
          status={latestDiagnosis.temperature.levels}
        />
        <VitalSign
          icon={
            <img
              src="/images/HeartBPM@2x.png"
              alt="Heart Rate Icon"
              width="60"
              height="60"
            />
          }
          label="Heart Rate"
          value={`${latestDiagnosis.heart_rate.value} bpm`}
          status={latestDiagnosis.heart_rate.levels}
        />
      </div>

      <BloodPressureChart diagnosisHistory={patient.diagnosis_history} />
      <DiagnosticList diagnosticList={diagnosticList} />
      <LabResults labResults={labResults} />
    </div>
  );
};

Cover.propTypes = {
  patient: PropTypes.shape({
    profile_picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    diagnosis_history: PropTypes.array.isRequired,
  }).isRequired,
  diagnosticList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  labResults: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Cover;
