import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth'
import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';



function App() {

  const showHeaderProfile = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
       <Header/>
      {showHeaderProfile && <UserProfile/>}
     {!showHeaderProfile &&  <Auth/>}
      {showHeaderProfile && <Counter />}
    </Fragment>
    
  );
}

export default App;
