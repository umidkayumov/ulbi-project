import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routes";

const AppRouter = () => {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                {
                    Object.values(routeConfig).map(({element, path}) => (
                        <Route key={path} path={path} element={element} />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;