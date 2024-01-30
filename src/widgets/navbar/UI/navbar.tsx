import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames";

import styles from "./navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <nav className={classNames(styles.navbar, {}, [])}>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Navbar;
