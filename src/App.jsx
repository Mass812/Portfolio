import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';
import Bio from './Components/Bio/bio';
import SideDrawer from './Components/SideDrawer/SideDrawer';

import FoggedGlass from './Components/FoggedGlass/FoggedGlass';

import KindWords from './Components/KindWords/KindWords';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';

import ScrollReset from './Components/ScrollReset/ScrollReset';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
	const [
		sideDrawerOpen,
		setSideDrawerOpen
	] = useState(false);

	const runHideShow = () => {
		setSideDrawerOpen((prev) => !prev);
	};

	const exitMenu = () => {
		setSideDrawerOpen(false);
		window.scrollTo(0, 0);
	};

	const expandSide = sideDrawerOpen ? <SideDrawer hideShow={runHideShow} onClick={exitMenu} /> : null;
	const expandFog = sideDrawerOpen ? <FoggedGlass unFogGlass={exitMenu} /> : null;

	return (
		<Router
			future={{
				v7_startTransition   : true,
				v7_relativeSplatPath : true
			}}
		>
			<ScrollReset />
			<div>
				<NavBar pushShowHide={runHideShow} />
				<hr className='header-break' />
				{expandSide} {expandFog}
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<Bio />} />
						<Route path='/resume' element={<Resume />} />
						<Route path='/references' element={<KindWords />} />
						{/* Stale bookmarks (/projects, /additional) land on Home. */}
						<Route path='*' element={<Navigate to='/' replace />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
};

export default App;
