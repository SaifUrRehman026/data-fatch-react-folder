import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import UserDetails from "./Compoents/UserDetails";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
 ,
)
