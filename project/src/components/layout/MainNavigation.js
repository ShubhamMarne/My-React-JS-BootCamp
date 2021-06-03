import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {

    return (
        <header className={classes.header}>
            <div classes={classes.logo}>Greate Quote</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink  to="/quotes" className={classes.active}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/new-quote" className={classes.active}>
                            Add Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );

};

export default MainNavigation;