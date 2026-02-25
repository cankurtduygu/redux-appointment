import React from 'react'
import { FaTimesCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';

const PatientList = ({filteredPatients}) => {

    const { patients } = useSelector((state) => state.patientReducer);

    const { selectedDoctorId } = useSelector((state) => state.doctorReducer);
    // console.log(patients);


  return (
    <div>
      {filteredPatients.map((hasta) => (
        <div key={hasta.id}>
          <div
            className={hasta.isDone ? "trueStil" : "falseStyle"}
            // onDoubleClick={() =>
            //   setHastalar(
            //     hastalar.map((a) =>
            //       a.id === hasta.id ? { ...a, isDone: !a.isDone } : a,
            //     ),
            //   )
            // }
          >
            <div>
              <h2>{hasta.patientName}</h2>
              <h4>{hasta.day}</h4>
              <h3>{hasta.myDoctor}</h3>
            </div>

            <div>
              <FaTimesCircle
                style={{ color: "red" }}
                // onClick={() =>
                //   setHastalar(hastalar.filter((a) => a.id !== hasta.id))
                // }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PatientList;