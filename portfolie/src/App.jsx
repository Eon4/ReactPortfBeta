import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { Gallery } from "./pages/Gallery/Gallery";
// import { NotFoundPage } from "./pages/NotFoundPage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            {/* <Route path="*" element={<NotFoundPage/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;