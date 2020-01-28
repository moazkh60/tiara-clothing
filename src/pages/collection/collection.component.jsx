import React from "react";
import "./collection.styles.scss";
import { useRouteMatch } from 'react-router-dom'
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../reducer/shop/shop.selector";
import { useSelector } from "react-redux";

const CollectionPage = () => {

  const match = useRouteMatch()
  const collection = useSelector(state => selectCollection(match.params.categoryId)(state))
  console.log(collection)

  return (
    <div className="category">
      <h2>Collection Page</h2>
    </div>
  );
};

export default CollectionPage;
