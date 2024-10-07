/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm:"480px",
      md:"768px",
      lg:"1024px"
    },
    extend: {
      colors: {
        tillColor:'#008080',
        darkPurpelColor:'#301934',
        yellowColor:'#DFFF00',
        midnightBlueColor:'#191970',
        whiteColor:'#fff',
        blackColor:'#000',
        greenColor:'#007936',
        redColor:'#cc3433',
        darkColor:'#000',
        darkColorLight:'#171717',
        limeColor:'#00FF00',
        blueColor:'#0000FF',
        skyBlueColor:'#87CEEB',
        brownColor:'#A52A2A',
        coffeeColor:'#6F4E37',
        grayColor:'#A9A9A9',
        platinumColor:'#E5E4E2',
        darkPinkColor:'#AA336A'
      },
      backgroundImage: {
        "homeHiro": "url('/Image/Image.png')",
        "serviceHiro" : "url('/Image/aboutImg.png')",
        "projectHiro" : "url('/Image/pricingImg.png')",
        "contactHiro" : "url('/Image/contactUsImg.png')",
        "aboutHiro" :  "url('/Image/aboutImg.png')",
        "patternImg" : "url('/Image/Pattern.png')",
        "blogDetailsImg" : "url('Image/blogDetailsImg.png')",
      },
    },
    container:{
      center:true,
      padding: {
        DEFAULT:'1rem',
        sm: '1.5rem',
      }
    },
    fontFamily:{
      fontSuse: ["SUSE", 'sans-serif'],
      fontProtest: ["Protest Guerrilla", 'sans-serif'],
      fontLobster: ["Lobster", 'sans-serif'],
      fontBebas: ["Bebas Neue", 'sans-serif'],
      fontDancingScript: ["Dancing Script", 'sans-serif'],
      fontSpicyRice: ["Spicy Rice", 'sans-serif']
    }
  },
  plugins: [],
}