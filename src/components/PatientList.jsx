import React from 'react'
import { FaTimesCircle } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/actions/patientAction';
import { changeStatus } from '../redux/actions/patientAction';

const PatientList = ({filteredPatients}) => {

    const dispatch = useDispatch();


  return (
    <div>
      {filteredPatients.map((hasta) => (
        <div key={hasta.id}>
          <div
            className={hasta.isDone ? "trueStil" : "falseStyle"}

            onDoubleClick={() => dispatch(changeStatus(hasta.id))} //isComplete durumunu değiştirmek için çift tıklama olayını ekliyoruz


          >
            <div>
              <h2>{hasta.patientName}</h2>
              <h4>{hasta.day}</h4>
              <h3>{hasta.myDoctor}</h3>
            </div>

            <div>
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={() => (dispatch(remove(hasta.id)))}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PatientList;