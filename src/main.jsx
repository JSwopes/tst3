// This code sets up and initializes a React application.

// import React from 'react'; and import ReactDOM from 'react-dom/client'; import the React and ReactDOM modules, which are required for building and rendering React components.

// import App from './App.jsx'; imports the main component of the application, which is typically the root component responsible for rendering the entire application.

// import './index.css'; imports a CSS file named index.css for styling the application. This file likely contains styles that will be applied to components within the app.

// ReactDOM.createRoot(document.getElementById('root')).render(...); initializes and renders the React application. Here's what's happening within this line:

//     ReactDOM.createRoot(document.getElementById('root')): This creates a React root instance associated with an HTML element with the id attribute set to 'root'.
//      This is typically the DOM element where the React application will be mounted.

//     .render(...): This method is used to render the React component(s) into the specified root element. In this case, it wraps the <App /> component with <React.StrictMode>. 
//     <React.StrictMode> is a wrapper component that helps identify potential issues in your application during development and is recommended for use during development.



// Import the necessary React and ReactDOM modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component from './App.jsx'
import App from './App.jsx';

// Import a CSS file for styling
import './index.css';

// Use ReactDOM.createRoot to render the application
// inside the element with the id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the main <App /> component with <React.StrictMode>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
