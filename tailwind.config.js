/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/**/*.html"
	],
	theme: {
		extend: {
			colors: {
				primary: '#FFEDA8',   
				secondary: '#FAE588',  
				tertiary: '#F9DC5C', 
			},
		},
	},
	plugins: [],
};
