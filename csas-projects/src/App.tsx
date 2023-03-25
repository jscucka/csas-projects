import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";
import { GlobalStyles } from "./components/styles/GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
