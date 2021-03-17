import React from 'react';

const TechnicianItem = ({ tech }) => {
	return (
		<li className='collection-item'>
			{`${tech.firstName} ${tech.lastName}`}
			<a href='#delete-tech' className='secondary-content'>
				<i className='material-icons grey-text'>delete</i>
			</a>
		</li>
	);
};

export default TechnicianItem;
