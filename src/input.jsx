import React, { useState } from "react";

function Input({ addGrade }) {
  const [semester, setSemester] = useState(1); // Default to semester 1
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [creditHour, setCreditHour] = useState("");
  const [error, setError] = useState("");

  // Valid grades as per Gujarat University's grading system
  const validGrades = ["AA", "AB", "BA", "BB", "BC", "CC", "CD", "DD", "FF"];

  const handleChange = (e) => {
    e.preventDefault();

    setError(""); // Clear previous errors

    // Validate inputs
    if (!subject.trim()) {
      setError("Subject cannot be empty.");
      return;
    }

    if (!validGrades.includes(grade.toUpperCase())) {
      setError(`Please enter a valid grade (${validGrades.join(", ")}).`);
      return;
    }

    const parsedCreditHour = parseFloat(creditHour);

    if (
      isNaN(parsedCreditHour) ||
      parsedCreditHour <= 0 ||
      parsedCreditHour > 5
    ) {
      setError("Please enter a valid credit hour (1-5).");
      return;
    }

    // Add the new grade to the selected semester
    addGrade({
      semester,
      subject,
      grade: grade.toUpperCase(), // Ensure the grade is stored in uppercase
      creditHour: parsedCreditHour,
    });

    // Reset input fields after submission
    setSubject("");
    setGrade("");
    setCreditHour("");
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        {/* Semester selection */}
        <select
          onChange={(e) => setSemester(Number(e.target.value))}
          value={semester}
        >
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              Semester {index + 1}
            </option>
          ))}
        </select>

        {/* Subject input */}
        <input
          type="text"
          placeholder="Enter Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        {/* Grade input */}
        <input
          type="text"
          placeholder="Enter Grade (e.g., AA, AB, BA)"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />

        {/* Credit Hour input */}
        <input
          type="number"
          placeholder="Enter Credit Hour (1-5)"
          value={creditHour}
          onChange={(e) => setCreditHour(e.target.value)}
          min="0"
          max="5"
        />

        <button type="submit">Add Subject</button>
      </form>

      {/* Display error if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Input;
