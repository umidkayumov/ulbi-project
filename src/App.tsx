import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";


const App = () => {
   const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames("App", {}, [theme])}>
            <button onClick={toggleTheme}>theme</button>
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