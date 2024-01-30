import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/Main";
import {AboutPage} from "pages/About";

export enum Routes {
    MAIN = "main",
    ABOUT = "about"
}

export const RoutePath: Record<Routes, string> = {
    [Routes.MAIN]: "/",
    [Routes.ABOUT]: "/about"
}

export const routeConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [Routes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    }
}