import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { post } from '../redux/actions/patientAction';

const AddPatient = () => {
  const dispatch = useDispatch();
  const { doctors, selectedDoctorId } = useSelector(
    (state) => state.doctorReducer
  );

  const [hastaAdi, setAd] = useState('');
  const [tarih, setTarih] = useState('');

  const selectedDoctor = doctors.find((doc) => doc.id === selectedDoctorId);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!hastaAdi.trim() || !tarih || !selectedDoctor) {
      return;
    }

    dispatch(
      post({
        id: uuid(),
        patientName: hastaAdi,
        day: tarih,
        isDone: false,
        myDoctor: selectedDoctor.doctorName,
      })
    );

    setAd('');
    setTarih('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name"> Patient Information</label>
        <input
          id="name"
          type="text"
          value={hastaAdi}
          onChange={(e) => setAd(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="date"> Day & Time</label>
        <input
          id="date"
          type="datetime-local"
          value={tarih}
          onChange={(e) => setTarih(e.target.value)}
        />
      </div>

      <div>
        <button className="doc" type="submit">
          <span style={{ color: 'red' }}>{selectedDoctor?.doctorName}</span>{' '}
          için kayıt oluştur
        </button>
      </div>
    </form>
  );
};

export default AddPatient;
