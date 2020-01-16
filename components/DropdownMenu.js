import React from 'react';

export default function DropdownMenu(props) {
	return (
		<div onClick={props.menuToggle} className="dropdown">
			<span className="dropdown__line" />
		</div>
	);
}
