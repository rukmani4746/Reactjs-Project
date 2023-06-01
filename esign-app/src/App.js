import React, { useState } from "react";
import Title from "./components/Title";
// import esign from "../src/images/esign.jpg";

function App() {
  const [name, setName] = useState("Date");
  const [date, setDate] = useState("name");

  return (
    // <div className="shoe-container">
    // <img src={esign} alt=""/>

    <div className="container-fluid img">
     
      <h1 className="text-center heading">Signature app</h1>
     <div className="child1"> <Title text={date} /></div>
      <div className="child2"><Title text={name} /></div>
      <p>
     Hello guys my name is rukmani ahirwar this is simple app where you can <br />
     create your signature using a input box and also can save the date when you have create this signature .I hope you will like it.<br />
      Besides just signing your digital documents, e-Signature software allows for more efficient document storage, organization, and retrieval of your documents. Instead of having to go through a file cabinet, easily search and find your desired document.
      </p>
      <div className="d-flex input-boxes">
        <input
          type="date" className="inp1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text" className="inp"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </div>
    // </div>
  );
}

export default App;