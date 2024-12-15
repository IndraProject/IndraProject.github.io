/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:{
          fontFamily: ['Poppins'],
        },
      },

      keyframes: {
        slide :{
          'from' :{transform: 'translate3d(0,0,0)'},
          'to' : {transform : 'translate3d(-100%,0,0)'}
        },
        lineffect :{ 
          '0%' :{width: '0%'},
          '50%' : {width : '50%'},
          '100%' : {width : '100%'}
        }
      }
    },
  },
  plugins: [],
}

