
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Error from  "./components/Error";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App container-fluid">
    <HashRouter basename="/">

        <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
