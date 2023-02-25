import React, { useState } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Bio from './Components/Bio/bio';
import SideDrawer from './Components/SideDrawer/SideDrawer';

import FoggedGlass from './Components/FoggedGlass/FoggedGlass';

import KindWords from './Components/KindWords/KindWords';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';
import More from './Components/More/More';

import Projects from './Components/Projects/Projects';
import ScrollReset from './Components/ScrollReset/ScrollReset';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
	const [
		sideDrawerOpen,
		setSideDrawerOpen
	] = useState(false);

	const runHideShow = () => {
		setSideDrawerOpen((prev) => {
			const value = setSideDrawerOpen(!prev);
			console.log(value);
			return value;
		});
	};

	const exitMenu = () => {
		setSideDrawerOpen(false);
		window.scrollTo(0, 0);
	};

	const expandSide = sideDrawerOpen ? <SideDrawer hideShow={runHideShow} onClick={exitMenu} /> : null;
	const expandFog = sideDrawerOpen ? <FoggedGlass unFogGlass={exitMenu} /> : null;

	return (
		<Router>
			<ScrollReset />
			<div style={{ height: '100' }}>
				<NavBar pushShowHide={runHideShow} />
				<hr className='header-break' />
				{expandSide} {expandFog}
				<main>
					<Switch>
						<Route path='/' exact={true} component={Home} />
						<Route path='/about' component={Bio} />
						<Route path='/resume' component={Resume} />
						<Route path='/references' component={KindWords} />
						<Route path='/projects' component={Projects} />
						<Route path='/additional' component={More} />
					</Switch>
				</main>
			</div>
		</Router>
	);
};

export default App;
