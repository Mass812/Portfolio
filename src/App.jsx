import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Bio from './Components/Bio/bio';
import SideDrawer from './Components/SideDrawer/SideDrawer';

import FoggedGlass from './Components/FoggedGlass/FoggedGlass';

import KindWords from './Components/KindWords/KindWords';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';

import ScrollReset from './Components/ScrollReset/ScrollReset';
import NavBar from './Components/NavBar/NavBar';
import SpreadNav from './Components/NavBar/SpreadNav';

// Split out so useLocation has a Router ancestor — App itself renders <Router>,
// so it can't call the hook directly.
const AppShell = () => {
	const [
		sideDrawerOpen,
		setSideDrawerOpen
	] = useState(false);
	const { pathname } = useLocation();
	const isHome = pathname === '/';

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
		<div>
			<NavBar pushShowHide={runHideShow} isHome={isHome} />
			{/* On Home, mobile widths swap the hamburger for a static link row and
			    drop this rule entirely — other pages keep both the drawer and
			    the rule, since they don't need the same one-tap access back to
			    the other sections. */}
			{isHome ? <SpreadNav mobile isHome /> : null}
			<hr className={isHome ? 'header-break header-break-home' : 'header-break'} />
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
	);
};

const App = () => {
	return (
		<Router
			future={{
				v7_startTransition   : true,
				v7_relativeSplatPath : true
			}}
		>
			<ScrollReset />
			<AppShell />
		</Router>
	);
};

export default App;
