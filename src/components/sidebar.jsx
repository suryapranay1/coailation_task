import { useState, useEffect } from "react";
import "./Sidebar.css";
import Cover from "./Cover";

const Sidebar = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const username = "coalition";
    const password = "skills-test";
    const authString = btoa(`${username}:${password}`);

    fetch("https://fedskillstest.coalitiontechnologies.workers.dev/", {
      headers: {
        Authorization: `Basic ${authString}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPatients(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Patients</h2>
          <img
            src="/images/search_FILL0_wght300_GRAD0_opsz24@2x.png"
            alt="Search Icon"
            className="search-icon"
          />
        </div>
        <ul className="patient-list">
          {Array.isArray(patients) && patients.length > 0 ? (
            patients.map((patient, index) => (
              <li
                key={index}
                className="patient-item"
                onClick={() => handlePatientClick(patient)}
              >
                <img
                  src={patient.profile_picture}
                  alt={patient.name}
                  className="patient-photo"
                />
                <div className="patient-info">
                  <span className="patient-name">{patient.name}</span>
                  <span className="patient-details">
                    {patient.gender}, {patient.age}
                  </span>
                </div>
                <img
                  src="/images/more_horiz_FILL0_wght300_GRAD0_opsz24@2x.png"
                  alt="More Options"
                  className="more-icon"
                  width="1em"
                  height="1em"
                />
              </li>
            ))
          ) : (
            <li>No patients found</li>
          )}
        </ul>
      </div>
      <div className="main-content">
        {selectedPatient ? (
          <div className="patient-detail-section">
            <Cover
              patient={selectedPatient}
              diagnosticList={selectedPatient.diagnostic_list}
              labResults={selectedPatient.lab_results}
            />
          </div>
        ) : (
          <div className="select-patient-message">
            Please select a patient to view details
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
