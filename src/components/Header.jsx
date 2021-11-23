import Button from './Button';
import logo from '../assets/logo.svg';

const Header = () => {
	return (
		<header className=' flex items-center justify-between bg-hero-pattern border h-full bg-red-400'>
			<img src={logo} alt='logo' />
			<nav>
				<ul className='flex gap-8 text-white '>
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
				<a href='/'>Login</a>
				<Button>Sign Up</Button>
			</div>
		</header>
	);
};

export default Header;
