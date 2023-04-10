import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { FormPage } from "./pages/FormPage";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { NavBar } from "./components/NavBar";
import { Container } from "./components/styles/Container.styled";
import { NameContextProvider } from "./components/context/NameContext";
function App() {
  return (
    <>
      <GlobalStyles />
      <NameContextProvider>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </Container>
      </NameContextProvider>
    </>
  );
}

export default App;
