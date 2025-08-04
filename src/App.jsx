import Container from "./components/Container";
import OuterMargins from "./components/OuterMargins";
import Navbar from "./components/Navbar";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import BlogPostPage from "./pages/BlogPostPage";
import ResourcePage from "./pages/ResoucePage";
import TestPage from "./pages/TestPage";

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
              <Route path="/posts" element={<BlogPostPage />} />
              <Route path="/resources" element={<ResourcePage />} />
              {/* <Route path="/test" element={<TestPage />} /> */}
            </Routes>
          </Container>
        </BrowserRouter>
      </OuterMargins>
    </>
  );
}

export default App;
