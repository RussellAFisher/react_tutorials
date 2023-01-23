// 1. Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

// 2. Get reference to div with ID root (index.html)
const el = document.getElementById('root');

// 3. Tell React to control root element
const root = ReactDOM.createRoot(el);

// 4. Show component on screen
root.render(<App />);

