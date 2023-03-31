import React from "react";
import { useState, useEffect } from "react";
export const Form = ({ patients, setPatients }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [discharged, setDischarged] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
    if ([name, owner, email, discharged, symptoms].includes("")) {
      console.log("Todos los campos son obligatorios");
      setError(true);
      return;
    }
    setError(false);
    const objPatient = {
      name,
      owner,
      email,
      discharged,
      symptoms,
    };
    setPatients([...patients, objPatient]);
    setName("");
    setOwner("");
    setEmail("");
    setDischarged("");
    setSymptoms("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-xl mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">aministralos.</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <div className="bg-red-800 text-center text-white p-3 uppercase font-bold mb-3 rounded-md">
            <p>Todos los campos son obligatorios</p>
          </div>
        )}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la Mascota
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del dueño
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre del dueño"
            className="border-2 w-full p-2 mt2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto"
            className="border-2 w-full p-2 mt2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="discharged"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta del paciente
          </label>
          <input
            id="discharged"
            type="date"
            className="border-2 w-full p-2 mt2 placeholder-gray-400 rounded-md"
            value={discharged}
            onChange={(e) => setDischarged(e.target.value)}
          />
        </div>
        <div className="mb-10">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            name=""
            id="symptoms"
            className="border-2 w-full p-2 mt2 placeholder-gray-400 rounded-lg"
            placeholder="Describe los sintomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input
          value="Agregar"
          type="submit"
          className="bg-indigo-600 w-full text-white uppercase font-bold hover:bg-indigo-700 p-2 rounded-md cursor-pointer"
        />
      </form>
    </div>
  );
};
