import { NavLink } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <NavLink className='btn' to={`/quotes/${props.id}`}>
        View Fullscreen
      </NavLink>
    </li>
  );
};

export default QuoteItem;
