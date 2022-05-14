module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-color': '#944E6C',
				'gray-primary': '#BDBDBD',
				'gray-input': '#F6F6F6',
			},
			fontSize: {
				tiny: '10px',
			},
		},
	},
	plugins: [],
};
