export const post = (patient) => ({ type: 'ADD_PATIENT', payload: patient });

export const remove=(patientId) => ({ type: 'REMOVE_PATIENT', payload: patientId });

export const changeStatus=(patientId) => ({ type: 'CHANGES_STATUS', payload: patientId })
