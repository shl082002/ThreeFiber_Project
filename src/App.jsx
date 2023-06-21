import AboutUs from "./Routes/AboutUs";
import Main from "./Routes/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
