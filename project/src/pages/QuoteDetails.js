import { Fragment } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import Comments from "../components/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
    { id : "q1", author : "MAx", text : "This is first book"},
    { id : "q2", author : "Min", text : "This is second book"},
    { id : "q3", author : "Mean", text : "This is third book"}
];

const QuoteDetails = () => {
    const params = useParams();
    const match = useRouteMatch();

    const quote = DUMMY_DATA.find(quote => quote.id == params.quoteId);

    if(!quote){
        return <h1>NO quote found</h1>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`${match.path}}/comments`} exact>
                <Comments>
                
                </Comments>
            </Route>
        </Fragment>
    );   
}

export default QuoteDetails;