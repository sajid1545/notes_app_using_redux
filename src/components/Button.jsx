import React from 'react';

const Button = ({ type, className, children }) => {
	return (
		<button
			type={type ? type : 'button'}
			className={className ? `button ${className}` : 'button-component'}>
			{children}
		</button>
	);
};

export default Button;
