/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                beige: "#FFFBF6",
                grøn: "#5D624C",
            },

            fontFamily: {
                prata: ['Prata', 'system-ui'],
                openSans: ['Open Sans', 'system-ui'],
            },

            keyframes: {
                slide: {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-100%)' },
                }
              },
              animation: {
                slide: 'slide 10s linear infinite',
              },

        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],

    
}
