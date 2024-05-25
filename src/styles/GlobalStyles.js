import '@fontsource/sirin-stencil';
import '@fontsource/kaushan-script';
import '@fontsource/metamorphous';
import botanicals from "../assets/Images/botanicals.webp"


import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

${'' /* *{
    outline: 1px solid red !important;
}  */}

html.has-scroll-smooth {
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;  
}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}
body{
    font-family: "Sirin Stencil";
    overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url(${botanicals});
    background-repeat: repeat;
    background-size: auto;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;