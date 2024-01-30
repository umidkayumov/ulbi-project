import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import AppRouter from "app/providers/router/UI/AppRouter";
import {Navbar} from "widgets/navbar";

const App = () => {
   const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames("App", {}, [theme])}>
            <button onClick={toggleTheme}>theme</button>
            <Navbar />
            <AppRouter />
        </div>
    );
}

export default App;