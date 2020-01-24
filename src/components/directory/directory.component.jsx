import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../reducer/directory/directory.selector';

const DirectoryMenu = () => {

	const sections = useSelector(state => selectDirectorySections(state))
	  
	return (
		<div className="directory-menu">
			{sections.map(({id, ...otherSectionProps}) => 
				<MenuItem key={id} {...otherSectionProps}/>
			)}
		</div>
	  );
}
 
export default DirectoryMenu;