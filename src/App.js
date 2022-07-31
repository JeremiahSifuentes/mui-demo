import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from './components/AppBar';
import Home from "./pages/Home";
import Tour from "./pages/Tour"
import Transition1 from "./pages/Transition";

// Wth
function App() {
  return (
    <BrowserRouter>
     <AppBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Tour />}/>
        <Route path="/transition" element={<Transition1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
