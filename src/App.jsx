// This code sets up routing for a React application using the react-router-dom library.
// It defines routes for different URLs and associates each URL with a specific React component to render when that URL is accessed.
// The HashRouter component is used to enable routing with URL hashes (e.g., /#/registration) as opposed to browser history (which would use BrowserRouter).
// The Routes component is used to define the routing configuration.
// Each Route component defines a URL path and the corresponding React component (element) to render when that path is matched.
// The exported App component is the root component of the application, which encapsulates all the routing logic.

// Import necessary modules from the 'react-router-dom' library
import { HashRouter, Route, Routes } from 'react-router-dom';

// Import React components for different pages
import { LoginPage } from './Pages/loginPage/LoginPage';
import { RegistrationPage } from './Pages/registrationPage/RegistrationPage';
import { SubmissionPage } from './Pages/submissionPage/SubmissionPage';
import { ApplicationPage } from './Pages/ApplicationPage/ApplicationPage';
import { GeoPrintPage } from './Pages/GeoPrintPage/GeoPrintPage';
import { MapPage } from './Pages/MapPage/MapPage';
import { PasswordResetPage } from './Pages/PasswordResetPage/PasswordResetPage';
import { PrintPage } from './Pages/PrintPage/PrintPage';
import { ProjectListPage } from './Pages/ProjectListPage/ProjectListPage';
import { ScoringPage } from './Pages/ScoringPage/ScoringPage';

// Define the main App component
function App() {
  return (
    <>
      {/* Wrap the entire application in a HashRouter */}
      <HashRouter>
        {/* Define routing configuration inside the 'Routes' component */}
        <Routes>
          {/* Define a route for the root URL */}
          <Route path='/' element={<LoginPage />} />

          {/* Define a route for the 'registration' URL */}
          <Route path='/registration' element={<RegistrationPage />} />

          {/* Define a route for the 'submission' URL */}
          <Route path='/submission' element={<SubmissionPage />} />

          {/* Define a route for the 'application' URL */}
          <Route path='/application' element={<ApplicationPage />} />

          {/* Define a route for the 'geo_print' URL */}
          <Route path='/geo_print' element={<GeoPrintPage />} />

          {/* Define a route for the 'map' URL */}
          <Route path='/map' element={<MapPage />} />

          {/* Define a route for the 'password_reset' URL */}
          <Route path='/password_reset' element={<PasswordResetPage />} />

          {/* Define a route for the 'print_page' URL */}
          <Route path='/print_page' element={<PrintPage />} />

          {/* Define a route for the 'project_list' URL */}
          <Route path='/project_list' element={<ProjectListPage />} />

          {/* Define a route for the 'scoring' URL */}
          <Route path='/scoring' element={<ScoringPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

// Export the 'App' component as the default export
export default App;

