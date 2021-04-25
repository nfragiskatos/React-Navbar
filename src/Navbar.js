import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header" />
				<div className="links-container show-container" />
				<ul className="social-icons" />
			</div>
		</nav>
	);
};

export default Navbar;
