import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedState, setSelectedState] = useState("");

  const stateSpeciality = {
    Gujarat: [{ name: "fafda" }, { name: "khaman" }],
    Maharashtra: [{ name: "Misal Pav" }, { name: "Vada Pav" }],
    Rajashtan: [{ name: "Dal Baati" }, { name: "Ghevar" }]
  };

  var stateNamesList = Object.keys(stateSpeciality);

  function setStateHandler(state) {
    setSelectedState(state);
  }

  return (
    <div className="App">
      <h2>Food Speciality According To States</h2>
      {stateNamesList.map(function (state) {
        return (
          <button onClick={() => setStateHandler({ state })}>{state}</button>
        );
      })}
      <hr />
      <h5>Specialities Are :</h5>
      console.log(selectedState);
      {/* stateSpeciality[selectedState].map(function ()) */}
    </div>
  );
}
