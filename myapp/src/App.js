import React, { useState } from "react";
import StudentsDb from "./StudentsDb";
import FontSizeSelector from "./components/FontSizeSelector";
import Table from "./components/Table";
import Profile from "./components/Profile";
import './compo.css';
const App = () => {
  const [students] = useState(StudentsDb);
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [fontSize, setFontSize] = useState("16px");

  const selectStudent = (index) => {
    setSelectedStudent(students[index]);
  };

  return (
    <div style={{ display: "flex", fontSize }}>
      <div style={{ flex: 1 }}>
        <FontSizeSelector fontSize={fontSize} setFontSize={setFontSize} />
        <Table students={students} selectStudent={selectStudent} />
      </div>
      <div style={{ flex: 1, marginLeft: "20px" }}>
        <Profile student={selectedStudent} />
      </div>
    </div>
  );
};

export default App;
