import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import { Link } from "react-router-dom";
import { Suspense } from "react";

const App = () => {
    return (
        <div className="App">
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>

           <Suspense fallback="Loading...">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
           </Suspense>
        </div>
    );
}

export default App;