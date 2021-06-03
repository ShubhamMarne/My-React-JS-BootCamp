import React, {Suspense} from 'react';

import {Redirect, Route, Switch} from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';
import AllQuotes from './pages/AllQuotes';
import NotFound from './pages/NotFound';
import QuoteDetails from './pages/QuoteDetails';

// Lazy loading
const NewQuote = React.lazy(() => import('./pages/NewQuote'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner/></div>}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/quotes/:quoteId" exact>
          <QuoteDetails></QuoteDetails>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      </Suspense>
      </Layout>
  );
}

export default App;
