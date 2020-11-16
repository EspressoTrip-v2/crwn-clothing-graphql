import React from 'react';

/* REACT COMPONENTS */
import { default as CollectionsOverview } from '../../components/collections-overview/collections-overview.container';
import { default as CollectionPage } from '../collection/collection.container';

/* ROUTER MODULES */
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
