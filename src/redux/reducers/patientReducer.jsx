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
    default:
      return state;
  }
}

export default patientReducer