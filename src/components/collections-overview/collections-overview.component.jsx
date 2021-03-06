import React from "react";
import { useSelector } from 'react-redux';
import "./collections-overview.styles.scss";
import CollectionPreview from "../preview-collection/preview-collection.component";
import { selectCollectionsForPreview  } from "../../reducer/shop/shop.selector";

const CollectionsOverview = () => {
  const collections =  useSelector(state => selectCollectionsForPreview(state));
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
