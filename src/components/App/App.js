import React from 'react';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';

function App() {
	return (
		<React.Fragment>
			<div className="logo">
				<img src="./src/static/Logo.svg" alt="LOGO" className="logo__img" />
			</div>
			<SideBar />
			<Content />
		</React.Fragment>
	);
}

export default App;
