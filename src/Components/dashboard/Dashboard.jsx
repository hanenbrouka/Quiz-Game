import React, { useState } from "react";
import "./Dashboard.css";
import Nav from "../Nav";
import Home from "../Home";
import ContentDash from "../ContentDash";
import Select from "../selectTopic/Select";
import Instruction from "../instruction/Instruction";

const Dashboard = () => {
  const [currentInterface, setCurrentInterface] = useState("interface1"); // Initialisation avec 'interface1' pour afficher l'interface 1 par défaut

  const changeInterface = (interfaceName) => {
    setCurrentInterface(interfaceName);
  };

  console.log(currentInterface);
  const renderInterface = () => {
    switch (currentInterface) {
      case "interface1":
        return <ContentDash changeInterface={changeInterface} />;
      case "interface2":
        return <Select />;
        return <Instruction />;
      case "interface3":
      default:
        return null;
    }
  };
  return (
    <div className="dashboard">
      <Nav />
      <Home changeInterface={changeInterface} />
      <div className="contenue">
        <ContentDash changeInterface={changeInterface} />
        <Select changeInterface={changeInterface} />
      </div>
    </div>
  );
};

export default Dashboard;
