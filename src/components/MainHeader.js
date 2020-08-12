import React from 'react';
import './MainHeader.css';
import Logo from './Logo.gif';
function MainHeader() {
	return (
		<div className="mainHeader">
			<div className="mainHeader__left">
				<img src={Logo} alt="Smiley face" />
            </div>
            <div className="mainHeader__right">
            
            </div>
		</div>
	);
}

export default MainHeader;
