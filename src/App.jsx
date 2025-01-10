import React, { useState } from "react";
import Input from "./input";
import Logic from "./logic";
import "./App.css";

function App() {
  const [grades, setGrades] = useState([]);

  // Function to add subjects to a specific semester
  const addGrade = (newGrade) => {
    setGrades((prevGrades) => {
      // Check if the semester already exists
      const existingSemester = prevGrades.find(
        (semester) => semester.semester === newGrade.semester
      );

      if (existingSemester) {
        // If semester exists, add subject to it
        existingSemester.subjects.push({
          subject: newGrade.subject,
          grade: newGrade.grade,
          creditHour: newGrade.creditHour,
        });
      } else {
        // If semester does not exist, create a new semester
        prevGrades.push({
          semester: newGrade.semester,
          subjects: [
            {
              subject: newGrade.subject,
              grade: newGrade.grade,
              creditHour: newGrade.creditHour,
            },
          ],
        });
      }
      return [...prevGrades]; // Return a new array to trigger re-render
    });
  };

  return (
    <div>
      <h1>CGPA Calculator</h1>
      <Input addGrade={addGrade} /> {/* Pass addGrade function to Input */}
      <Logic grades={grades} />{" "}
      {/* Pass the grades to Logic to calculate and display CGPA */}
      <footer className="signature">
        <p>
          Project developed by: <strong>Virenkumar Vijay Kevat</strong>
        </p>
      </footer>
    </div>
  );
}

export default App;
