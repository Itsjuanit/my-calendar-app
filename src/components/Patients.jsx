import React from "react";

export const Patients = ({ patient, setPatient, deletePatient }) => {
  const { name, owner, email, discharged, symptoms, id } = patient;
  const handleDelete = () => {
    const answer = confirm("¿Estás seguro de eliminar este paciente?");
    if (answer) {
      deletePatient(id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Dueño: {""}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: {""}
        <span className="font-normal normal-case">{discharged}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className=" flex justify-center mt-10 ">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 rounded-lg text-white mr-10"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 rounded-lg text-white ml-10"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
