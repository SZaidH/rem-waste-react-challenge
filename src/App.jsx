import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkipSelect from "./components/SkipSelect";
import UnderDevelopmentPage from "./components/UnderDevelopmentPage";

// Container Component for the webpage
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SkipSelect />} />
        <Route path="/under-development" element={<UnderDevelopmentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
