import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header';
import LinkCreate from './components/link_create';


const App=()=>{
	return(
		<div>
			< Header />
			<LinkCreate />
		</div>

		);
};


Meteor.startup(()=>{
	ReactDom.render(<App />, document.querySelector('.render-target'));
});