# CGPA Calculator 🧮

## About the Project

This **CGPA Calculator** is a React-based web application designed to calculate semester-wise and overall CGPA (Cumulative Grade Point Average) for students. The app allows users to input subject grades (in alphabetical format, such as `AA`, `AB`, etc.) and credit hours for multiple semesters, aligning with the **Gujarat University grading system**. It is an intuitive and user-friendly tool for students to track their academic performance effectively.

## Features

- 🎓 **Grade Input in Alphabetical Format**: Accepts grades in formats such as `AA`, `AB`, `BA`, etc., per Gujarat University's grading system.
- 📊 **Dynamic CGPA Calculation**: Computes semester-wise CGPA and overall CGPA based on grades and credit hours.
- 📋 **Custom Input Handling**:
  - Allows input for multiple semesters.
  - Validates grades and credit hours for accurate calculation.
- 🌐 **Responsive Design**: The app is built with a clean and responsive UI for seamless usage across devices.
- 🛠️ **Grading System Support**: Includes validation for grades and calculations aligned with the Gujarat University grading system:
  - `AA` = 10, `AB` = 9, `BA` = 8, and so on.
- 🔄 **Error Handling**: Provides detailed error messages for invalid inputs.

## Grading System

The project uses the **Gujarat University grading system** for grade-to-point conversion:

| Grade | Grade Point |
| ----- | ----------- |
| AA    | 10          |
| AB    | 9           |
| BA    | 8           |
| BB    | 7           |
| BC    | 6           |
| CC    | 5           |
| CD    | 4           |
| DD    | 3           |
| FF    | 0           |

## How It Works

1. **Add Subject Details**: Select a semester and input the subject name, grade, and credit hours.
2. **Calculate CGPA**: The app dynamically computes semester-wise CGPA and overall CGPA.
3. **View Results**: Check detailed CGPA breakdown for each semester, along with subject-wise grades and credit hours.

## Technologies Used

This project is built using the following technologies:

- **React.js**: A powerful JavaScript library for building user interfaces.
- **JavaScript (ES6+)**: For implementing logic and managing state.
- **CSS**: For styling the application and making it responsive.
- **HTML**: For the basic structure of the web page.
- **React Hooks**: To manage state and side effects in functional components.
- **React Functional Components**: To build reusable and clean components.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cgpa-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
    cd cgpa-calculator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm start
   ```
5. The app will be available at [http://localhost:3000](http://localhost:3000).
