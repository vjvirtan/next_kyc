import type { Config } from "tailwindcss";

const baseColors = (key:string):string => {
  
  switch (key) {
    case "primary": 
      return 'var(--color-primary)'
    case "light":
      return 'var(--color-light)'
    case "mid":
      return 'var(--color-mid)'
    case "gray":
      return 'var(--color-gray)'
     case "gray-light":
      return 'var(--color-gray-light)'
     case "gray-mid":
      return 'var(--color-gray-mid)'
     case "gray-dark":
      return 'var(--color-gray-dark)'
    case "green":
      return 'var(--color-green)'
    default:
      return 'var(--color-primary)'

  }
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
   extend: {
      colors: {
        main: {
         primary: baseColors("primary"),
         light: baseColors("light"),
          mid: baseColors('mid'),
         green: baseColors('green'),
          
       },
        base: {
          primary: baseColors('gray'),
          light: baseColors('gray-light'),
          mid: baseColors('gray-mid'),
          dark: baseColors('gray-dark')
        }
      },
    
       
     keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(0)',  },
          '50%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0)', },
        },
        'bg-change': {
          '0%': { backgroundColor: '', },
          "50%": {backgroundColor: 'green'},
          '100%': { backgroundColor: '', color:'bg-green-500' },
        },
        'text-change': {
          '0%': { color: 'bg-blue-500' },
          '100%': { color: 'bg-yellow-500' },
        },
     },
      animation: {
        'slide-right': 'slide-right 0.5s ease-in-out',
        'bg-change': 'bg-change 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
