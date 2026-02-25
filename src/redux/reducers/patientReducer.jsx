import { hastaData } from "../../helper/Data";

const initialState = {
  patients: hastaData
};


const patientReducer = ( state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PATIENT":
      return {
        ...state,
        patients: [...state.patients, payload]
      };
    case "REMOVE_PATIENT":
      return {
        ...state,
        patients: state.patients.filter((patient)=> patient.id !== payload)
      }

     case "CHANGES_STATUS":
      return {
        ...state,
        patients: state.patients.map((patient) => patient.id === payload ? {...patient, isDone: !patient.isDone} : patient)
      }
    default:
      return state;
  }
}

export default patientReducer