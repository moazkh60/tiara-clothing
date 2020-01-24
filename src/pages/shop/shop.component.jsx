import React, { useState } from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection.component.jsx';
import { useSelector } from 'react-redux';
import { selectCollections } from '../../reducer/shop/shop.selector';

const ShopPage = () => {
	const collections = useSelector(state =>
		selectCollections(state)
	)
	return (  
		<div className="shop-page">
			{collections.map(({id, ...otherCollectionProps}) => 
				<CollectionPreview key={id} {...otherCollectionProps}/>
			)}
		</div>
	);
}
 
export default ShopPage;