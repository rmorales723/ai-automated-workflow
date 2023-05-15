// import React from 'react';
// import FavoriteThings from './FavoriteThings';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const Things = ({ match }) => (
//   <div>
//     <h2>Favorite Things</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/favorite`}>Favorite Car</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/favorite`}>Favorite Food</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/favorite`}>Favorite Movie</Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:thingsId`} component={Things} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Slum Dog Millionaire</h3>}
//     />
//   </div>
// );

// export default Things;

import React from 'react';

const Things = ({match}) => {
    <div>
        <h2>{match.params.thingsId}</h2>
    </div>
}

export default Things;