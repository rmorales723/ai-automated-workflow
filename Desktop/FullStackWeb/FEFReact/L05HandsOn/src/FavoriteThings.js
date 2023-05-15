// import React from 'react';

// const FavoriteThings = ({match}) => {
//     <div>
//         <h2>{match.params.thingsId}</h2>
//     </div>
// }

// export default FavoriteThings;


import React from 'react';
import Things from './Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FavoriteThings = ({ match }) => (
  <div>
    <h2>Home</h2>
    <h2>Favorite Things</h2>
    <ul>
      <li>
        <Link to={`${match.url}/favoriteCar`}>Favorite Car</Link>
      </li>
      <li>
        <Link to={`${match.url}/favoriteFood`}>Favorite Food</Link>
      </li>
      <li>
        <Link to={`${match.url}/favoriteMovie`}>Favorite Movie</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:favoriteThingsId`} component={FavoriteThings} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Slum Dog Millionaire</h3>}
    />
  </div>
);

export default FavoriteThings;