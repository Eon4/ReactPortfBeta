import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { Work } from "./pages/Work/work";
import { Contact } from "./pages/Contact/contact";
// import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            {/* <Route path="*" element={<NotFoundPage/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;