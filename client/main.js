import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header';


const App=()=>{
	return(
		< Header />
		);
};


Meteor.startup(()=>{
	ReactDom.render(<App />, document.querySelector('.render-target'));
});