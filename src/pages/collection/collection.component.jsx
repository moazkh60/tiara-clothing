import React from "react";
import "./collection.styles.scss";
import { useRouteMatch } from 'react-router-dom'
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../reducer/shop/shop.selector";
import { useSelector } from "react-redux";

const CollectionPage = () => {

  const match = useRouteMatch()
  const { title, items } = useSelector(state => selectCollection(match.params.categoryId)(state))

  return (
    <div className="collection-page">
      <h2 className='title'>{ title }</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};

export default CollectionPage;
