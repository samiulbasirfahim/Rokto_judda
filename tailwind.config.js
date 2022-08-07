/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#ef4444",
					secondary: "#1727b5",
					accent: "#63ff8c",
					neutral: "#311B31",
					"base-100": "#1f2937",
					info: "#3B5CE3",
					success: "#3CD79E",
					warning: "#B48913",
					error: "#DD223E",
				},
			},
		],
	},
}
