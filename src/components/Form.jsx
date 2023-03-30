import React from "react";

export const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">aministralos.</span>
      </p>
      <form
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
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
