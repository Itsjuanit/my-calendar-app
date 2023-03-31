import React from "react";
import { Patients } from "./Patients";

export const ListPatients = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-[calc(100vh-4rem)] overflow-x-hidden overflow-y-auto pr-2">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">pacientes.</span>
          </p>
          {patients.map((patient) => {
            return (
              <Patients
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando tus{" "}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
        </>
      )}
    </div>
  );
};
