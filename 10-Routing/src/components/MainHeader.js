import { Link, NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = () => {
    return <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    {/* <Link to="/welcome"> Welcome </Link> */} 
                    {/* Normal link which will avoid sending request to server  */}


                    <NavLink activeClassName={classes.activeClassName} to="/welcome"> Welcome </NavLink>


                </li>
                <li>
                    {/* <Link to="/products"> Products </Link> */}
                    <NavLink  activeClassName={classes.activeClassName} to="/products"> Products </NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainHeader;