import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MarketOverview from './containers/marketOverview';
import Liquidity from './containers/liquidity';

const Router = () => (
  <Switch>
    <Route exact path="/" component={MarketOverview} />
    <Route exact path="/liquidity" component={Liquidity} />
  </Switch>
);

export default Router;
