/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "13":"3.25rem",
        "51":"12.75rem",
        "102":"28.125rem"
        
      },
      fontFamily:{
        'galano':['GalanoGrotesqueBold'],
        'galanoExtraBold':['GalanoGrotesqueExtraBold'],
        'GalanoGrotesqueMedium':['GalanoGrotesqueMedium'],
        'GalanoGrotesqueRegular':['GalanoGrotesqueRegular']
      },
      
      width:{
        "105":"66.5rem",
        "90":"22.5rem",
        "99":"25.625rem",
        "75":"18.125rem"
        
      },
      colors:{
        'white': '#ffffff',
        'pink':'#FF0D87',
        'tiyatro':'#B77CB8',
        'stand-up':'#F19653',
        'sinema':'#F07266',
        'konser':'#9FAE5D',
        'active':'#F19653'
        
      },
      screens:{
        'xxs':'350px',
        'xs':'450px'
      }
    },
  },
  plugins: [],
}

