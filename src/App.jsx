import Container from "./components/Container";
import OuterMargins from "./components/OuterMargins";
import Navbar from "./components/Navbar";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <>
      <OuterMargins>
        <BrowserRouter>
          <Navbar></Navbar>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </OuterMargins>
    </>
  );
}

export default App;
