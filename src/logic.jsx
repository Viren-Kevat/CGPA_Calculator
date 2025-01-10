import React from "react";

// Map of alphabetic grades to grade points
const gradeMapping = {
  AA: 10,
  AB: 9,
  BA: 8,
  BB: 7,
  BC: 6,
  CC: 5,
  CD: 4,
  DD: 3,
  FF: 0, // For failing grade
};

// Function to get grade point from an alphabetic grade
const getGradePoint = (grade) => {
  return gradeMapping[grade] || 0; // Default to 0 if grade is invalid
};

function Logic({ grades }) {
  const calculation = () => {
    let overallGrade = 0;
    let overallCreditHour = 0;

    const semesterWise = grades.map((semester) => {
      let semTotalGrade = 0;
      let semTotalCreditHour = 0;

      semester.subjects.forEach((subject) => {
        const gradePoint = getGradePoint(subject.grade.toUpperCase()); // Ensure grade is uppercase
        semTotalGrade += gradePoint * subject.creditHour;
        semTotalCreditHour += subject.creditHour;
      });

      overallGrade += semTotalGrade;
      overallCreditHour += semTotalCreditHour;

      return {
        semester: semester.semester,
        cgpa: semTotalCreditHour
          ? (semTotalGrade / semTotalCreditHour).toFixed(2)
          : "0.00",
      };
    });

    const overallCgpa = overallCreditHour
      ? (overallGrade / overallCreditHour).toFixed(2)
      : "0.00";

    return {
      semesterWise,
      overallCgpa,
    };
  };

  const { semesterWise, overallCgpa } = calculation();

  return (
    <div>
      <h1>CGPA Calculator</h1>
      <h2>Overall CGPA: {overallCgpa}</h2>
      {semesterWise.map((semester) => (
        <div key={semester.semester}>
          <h4>Semester {semester.semester}</h4>
          <p>CGPA: {semester.cgpa}</p>
          <ul>
            {grades
              .find((s) => s.semester === semester.semester)
              .subjects.map((subject, index) => (
                <li key={index}>
                  {subject.subject}: Grade {subject.grade}, Credit Hour{" "}
                  {subject.creditHour}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Logic;
