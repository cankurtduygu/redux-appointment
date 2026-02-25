export const post = (patient) => ({ type: 'ADD_PATIENT', payload: patient });

export const remove=(patientId) => ({ type: 'REMOVE_PATIENT', payload: patientId });
