import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import OvulationCalculator from "./components/OvulationCalculator";
import BMICalculator from "./components/BMI.Calculator";
import MealSuggestions from "./components/MealSuggestions";
import Start from "./components/Start";
// import resgister from "./components/Register";"
import Register from "./components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Ovulation Calculator"  element={<OvulationCalculator />}/>
          <Route path="/Register" element={<Register />} />
          <Route path="/BMI Calculator" element={<BMICalculator />} />
          <Route path="/Meal Suggestions" element={<MealSuggestions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


