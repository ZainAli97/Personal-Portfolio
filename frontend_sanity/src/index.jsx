import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import "./App.css";
const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
);