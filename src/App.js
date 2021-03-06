import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import useMovies from './hooks/useMovies';
import './css/style.css';

const Home = lazy(() => import('./components/Home'));
const Search = lazy(() => import('./components/Search'));
const Login = lazy(() => import('./components/Login'));
const FavoritePage = lazy(() => import('./components/FavoritePage'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));
const InformationMovie = lazy(() => import('./components/InformationMovie'));
const ReviewPage = lazy(() => import('./components/ReviewPage'));
const ChartPage = lazy(() => import('./components/ChartPage'));

function App() {
  const { windowDimensions } = useMovies();
  const { width } = windowDimensions;
  return (
    <div className="App">
      <Suspense fallback={<LinearProgress color="secondary" />}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/reviewpage/:reviewId" component={ReviewPage} />
          <Route exact path="/favorites" component={FavoritePage} />
          <Route exact path="/chartpage" component={ChartPage} />
          <Route
            exact
            path="/information/:movieId"
            render={(props) => <InformationMovie {...props} width={width} />}
          />
          <Route exact path="/search/:category" component={Search} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
