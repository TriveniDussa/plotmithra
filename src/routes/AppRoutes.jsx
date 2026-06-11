import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import PropertiesPage from "../pages/PropertiesPage";
import BuyPage from "../pages/BuyPage";
import RentPage from "../pages/RentPage";
import SellPage from "../pages/SellPage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PropertyDetails from "../components/Property/PropertyDetails";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/properties" element={<PropertiesPage />} />
                <Route path="/buy" element={<BuyPage />} />
                <Route path="/rent" element={<RentPage />} />
                <Route path="/sell" element={<SellPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;