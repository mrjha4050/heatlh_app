import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BMICalculator = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

      if (bmiValue > 30) {
        setBMI("You are Obese 😔" + bmiValue);
      } else if (bmiValue >= 25 && bmiValue <= 30) {
        setBMI("You are Overweight 🥴" + bmiValue);
      } else if (bmiValue >= 18.5 && bmiValue <= 25) {
        setBMI("You are Normal 😆" + bmiValue);
      } else {
        setBMI("You are Underweight 😔" + bmiValue);
      }
    }
  };

  return (
    <div className="text-center bg-blue-100 h-screen pt-10">
      <div className="rounded border-2 border-white mx-auto max-w-md p-8 bg-white">
        <h1 className="text-3xl text-black mb-6 font-bold">BMI Calculator</h1>
        <div className="input-container">
          <label className="text-xl my-2">Weight (kg):</label>
          <input
            className="rounded-md border-2 border-gray-300 h-10 w-full text-black text-xl text-center"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="input-container mt-4">
          <label className="text-xl">Height (cm):</label>
          <input
            className="rounded-md border-2 border-gray-300 h-10 w-full text-black text-xl text-center"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          onClick={calculateBMI}
          className="text-xl mt-6 rounded-md border-2 border-white bg-blue-300 text-black w-full h-12 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300"
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="result-container mt-6">
            <h2 className="text-xl">Your BMI:</h2>
            <p className="text-xl">{bmi}</p>
          </div>
        )}

        <button
          className="text-white border-none px-2 py-2 text-lg md:text-[16px] rounded-2xl mt-3 md:mt-6 w-full transition ease-in-out delay-100 bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300"
          onClick={redirectToHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BMICalculator;
