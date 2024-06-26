/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        100:'repeat( auto-fit, minmax(150px, 1fr))'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors:{
        footerBG:"#27262E",
        white:"#FFFFFF",
        black:"#000000",
        purple:{
          line:"#9D6DFF",
          medium:"#5326AC",
          dark:"#28015D",
          light:"#8159C6",
          grad:"#803795"
        },
        brown:{
          light:"#7D7578",
          dark:"#494345"
        },
        blue:{
          darkCircle:"#150336",
          normalBG:"#23055B"
        },
        grey:{
          light:"#B2AEB1"
        },
        gold:{
          gradDark:"#BC802C",
          gradLight:"#FFDEAC"
        },
        tWhite:"rgb(255,255,255,0.4)",
        tBlack:"rgb(0,0,0,0.4)",
        scrollDark:"#6A483E",
        scrollLight:"#8E5D45",
        transparent:'rgb(0,0,0,0)',
        gradOrange:'#965212',
        gradOrange2:'#CA7A4E'
      },
      fontFamily: {
        poppins: "Poppins",
        lato: "Lato",
        playfair: "Playfair Display",
      },
    },
  },
  plugins: [],
}

