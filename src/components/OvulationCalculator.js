import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OvulationCalculator = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/"); 
  };

  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [nextPeriod, setNextPeriod] = useState("");
  const [fertileWindow, setFertileWindow] = useState("");

  const calculateCycle = () => {
    if (!lastPeriodDate) {
      // Add validation to ensure the lastPeriodDate is not empty
      alert("Please enter the first day of your last menstrual period.");
      return;
    }

    const lastPeriod = new Date(lastPeriodDate);
    const nextPeriodDate = new Date(lastPeriod);
    nextPeriodDate.setDate(lastPeriod.getDate() + 28);

    const fertileStartDate = new Date(lastPeriod);
    fertileStartDate.setDate(lastPeriod.getDate() + 10);
    const fertileEndDate = new Date(fertileStartDate);
    fertileEndDate.setDate(fertileStartDate.getDate() + 5);

    setNextPeriod(formatDate(nextPeriodDate));
    setFertileWindow(
      `${formatDate(fertileStartDate)} to ${formatDate(fertileEndDate)}`
    );
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="text-center bg-white h-screen pt-10">
      <div className="rounded border-2 border-white max-w-md mx-auto bg-white p-6 md:max-w-xl lg:max-w-2xl">
        <h1 className="text-4xl md:text-6xl text-pink-600 mb-6 font-[Merriweather]">
          Ovulation Calculator
        </h1>

        <label htmlFor="" className="text-lg md:text-2xl">
          Enter the first day of your last menstrual period:
        </label>
        <div>
          <input
            className="bg-pink-600 text-white border-2 border-black rounded px-2 py-2 mt-3 md:mt-6 w-half"
            type="date"
            id="lastPeriodDate"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            required
          />
        </div>

        <button
          className="text-white border-none px-2 py-2 text-lg md:text-[16px] rounded-2xl mt-3 md:mt-6 w-full transition ease-in-out delay-100 bg-pink-600 hover:-translate-y-1 hover:scale-110 hover:bg-pink-900 duration-300"
          onClick={calculateCycle}
        >
          Calculate
        </button>

        <div className="mt-6 md:mt-10">
          <h2 className="text-xl md:text-3xl m-4">Results:</h2>
          <p className="mt-3 md:mt-6">
            <strong className="text-lg md:text-2xl">
              Next Period Start Date:
            </strong>{" "}
            <span className="text-pink-600 text-lg md:text-2xl">
              {nextPeriod}
            </span>
          </p>
          <p className="mt-3 md:mt-6">
            <strong className="text-lg md:text-2xl">Fertile Window:</strong>{" "}
            <span className="text-pink-600 text-lg md:text-2xl">
              {fertileWindow}
            </span>
          </p>
        </div>

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

export default OvulationCalculator;
