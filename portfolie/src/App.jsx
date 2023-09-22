import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
// import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            {/* <Route path="*" element={<NotFoundPage/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;