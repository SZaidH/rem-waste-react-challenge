import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkipSelect from "./components/SkipSelect";

// Container Component for the webpage
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SkipSelect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
