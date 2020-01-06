import React from 'react';
import './preview-collection.styles.scss';
import { findAllByTitle } from '@testing-library/react';

const CollectionPreview = ({title, items}) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items.filter((items,index) => index < 4).map(item => <div key={item.id}>{item.name}</div>)}
			</div>
		</div>
	);
}
 
export default CollectionPreview;