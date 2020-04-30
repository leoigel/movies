import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Login from './components/Login';
import FavoritePage from './components/FavoritePage';
import PrivateRoute from './components/PrivateRoute';
import InformationMovie from './components/InformationMovie';
import ReviewPage from './components/ReviewPage';
import ChartPage from './components/ChartPage';
import useMovies from './hooks/useMovies';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './css/style.css';


function App({ location }) {
  const { windowDimensions } = useMovies();
  const { width } = windowDimensions;

  return (
    <>
    <div className="App" style={{ position: 'relative',paddingBottom:'4rem'}}>
       <Route exact path='/search/:category' component={Search} />
      <TransitionGroup>
        <CSSTransition
          timeout={500}
          classNames='fade'
          key={location.key}>
          
            <Switch key={location}>
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/reviewpage/:reviewId' component={ReviewPage} />
              <Route exact path='/favorites' component={FavoritePage} />
              <Route exact path='/chartpage' component={ChartPage} />
              <Route exact path='/information/:movieId' render={(props) => <InformationMovie {...props} width={width} />} />
            </Switch>
         
        </CSSTransition>
      </TransitionGroup>
      </div>
    </>
  );
}

export default withRouter(App);
