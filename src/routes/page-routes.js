
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "../components/landingPage";
import { Home } from "../components/mainPage";

export const Routers = () => {
   
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/info" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}