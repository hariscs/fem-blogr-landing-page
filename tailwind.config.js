module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: ['Overpass', 'sans-serif'],
				heading: ['Ubuntu', 'sans-serif'],
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/bg-pattern-intro.svg')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
