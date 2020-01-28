import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component.jsx";
import CollectionPage from "../collection/collection.component.jsx";

const ShopPage = () => {
  const match = useRouteMatch();

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
