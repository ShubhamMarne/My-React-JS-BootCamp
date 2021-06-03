import QuoteList from '../components/quotes/QuoteList';

const DUMMY_DATA = [
    { id : "q1", author : "MAx", text : "This is first book"},
    { id : "q2", author : "Min", text : "This is second book"},
    { id : "q3", author : "Mean", text : "This is third book"}
];

const AllQuotes = () => {
    
    return <QuoteList quotes={DUMMY_DATA}/>
}

export default AllQuotes;