import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { ListPatients } from "./components/ListPatients";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientsLS);
    };
    getLS();

    const handleStorage = (e) => {
      if (e.key === "patients") {
        getLS();
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const newPatients = patients.filter((patient) => patient.id !== id);
    setPatients(newPatients);
  };

  return (
    <div className="container mx-auto mt-8">
      <Header numbers={1} />
      <div className="mt-12 md:flex ">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <ListPatients
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
