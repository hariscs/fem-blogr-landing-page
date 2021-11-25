import { useState, useEffect } from 'react';

import Button from './Button';
import logo from '../assets/logo.svg';

const Header = () => {
	const [button, setButton] = useState(true);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<header className=' bg-hero-pattern bg-right-top bg-cover bg-red-400 bg rounded-bl-3xl font-body p-8'>
			{/* navbar start */}
			<div className='flex items-center justify-between'>
				<img src={logo} alt='logo' />
				<nav>
					<ul className='flex gap-8 text-white md:px-36'>
						<li>
							<a href='/'>Product</a>
						</li>
						<li>
							<a href='/'>Company</a>
						</li>
						<li>
							<a href='/'>Connect</a>
						</li>
					</ul>
				</nav>

				<div className='flex items-center gap-8'>
					<a href='/' className='text-white hidden md:block'>
						Login
					</a>
					{button && <Button>Sign Up</Button>}
				</div>
			</div>

			{/* hero section */}
			<div className='my-40  grid place-items-center'>
				<h1 className='font-bold text-white text-4xl text-center'>
					A modern publishing platform
				</h1>
				<p className='text-white text-md'>
					Grow your audience and build your online brand
				</p>
				<div className='flex gap-4'>
					<Button>Start For Free</Button>
					<Button>Learn More</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
