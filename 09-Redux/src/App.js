import { Fragment } from 'react';
import {useSelector} from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header></Header>
      {!isAuthenticated && <Auth></Auth>}
      {isAuthenticated && <UserProfile></UserProfile>}
      <Counter />
    </Fragment>
  );
}

export default App;
