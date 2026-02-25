import React from 'react'
import { doctorData } from '../../helper/Data';

const initialState = {
  doctors: doctorData,
  selectedDoctorId: null
};


const doctorReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case "SELECT_DOCTOR":
            return {
                ...state,
                selectedDoctorId: payload
            }
        default:
            return state;
    }
  
}

export default doctorReducer