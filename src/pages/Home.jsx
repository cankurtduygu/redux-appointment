import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PatientList from '../components/PatientList';
import { selectDoctor } from '../redux/actions/doctorAction';
import AddPatient from '../components/AddPatient';

const Home = () => {

    const { doctors, selectedDoctorId } = useSelector((state) => state.doctorReducer);

    const { patients } = useSelector((state) => state.patientReducer);
    console.log(patients);
    const dispatch = useDispatch();   

    const visibleDoctors = selectedDoctorId ? doctors.filter((doc) => doc.id === selectedDoctorId) : doctors;

    const selectedDoctorName = selectedDoctorId ? doctors.find((doc) => doc.id === selectedDoctorId).doctorName : "";

    const filteredPatients = selectedDoctorId ? patients.filter((patient) => patient.myDoctor === selectedDoctorName) : patients;


  return (
    <div
    style={{
        display: selectedDoctorId ? "flex" : "block",
        justifyContent: "space-around",
      }}
    >
    <div>
        <header className="header">
          <h1>HOSPITAL</h1>

          <div className="dr">
           {visibleDoctors.map((doc) => (
              <div key={doc.id}>
                <img
                  className="btn"
                  src={doc.doctorImg}
                  alt=""
                  width="180px"
                  height="150px"
                  style={{ background: doc.id === selectedDoctorId ? "aqua" : "lightgreen" }}
                  onClick={() => dispatch(selectDoctor(doc.id))}
                />
                <h4
                   style={{
                     background: doc.id === selectedDoctorId ? "aqua" : "lightgreen",
                     borderLeft: `10px solid ${doc.id === selectedDoctorId ? "blue" : "green"}`,
                  }}
                >
                  {doc.doctorName}{" "}
                </h4>
              </div>
            ))}

          </div>
        </header>

        {selectedDoctorId && <AddPatient />}

        </div>
        <PatientList filteredPatients={filteredPatients} />
    </div>
  )
}

export default Home