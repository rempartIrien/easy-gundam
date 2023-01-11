export default {
	"*.{js,jsx,ts,tsx,json,css,js}": ["prettier --check"],
	"**/!(generated)/*.{js,jsx,ts,tsx}": ["eslint --max-warnings=0"],
};
