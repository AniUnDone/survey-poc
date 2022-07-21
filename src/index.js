import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route,} from "react-router-dom"; 
import './index.css';
import App from './App';
import RatingSurvey from "./components/survey/RatingSurvey";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SurveyBuilder from './pages/SurveyBuilder';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
    <BrowserRouter>      
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="rating" element={<RatingSurvey />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<PublicRoute component={LoginPage} />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="surveybuilder" element={<PrivateRoute component={SurveyBuilder} />} />
      </Routes>
    </BrowserRouter>  
);