import '@fontsource/sirin-stencil';
import '@fontsource/kaushan-script';
import '@fontsource/metamorphous';
import blackmarble from "../assets/Images/blackmarble.webp";

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

${'' /* *{
    outline: 0.0625rem solid red !important; /* 1px converted to rem */
}  */}

html.has-scroll-smooth {
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;  
}

html {
    font-size: 100%; /* 16px base font size (1rem = 16px) */
}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}
body{
    font-family: "Sirin Stencil";
    overflow-x: hidden;
    font-size: 1rem; /* Base font size */
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
    background-image: url(${blackmarble});
    background-repeat: repeat;
    background-size: auto;
}

*, *::before, *::after {
    box-sizing: inherit;
}

/* Media Queries for Responsive Design */

@media (max-width: 75rem) { /* 1200px to rem */
    body {
        background-size: contain; /* Adjust background for medium screens */
    }
}

@media (max-width: 48rem) { /* 768px to rem */
    body {
        font-size: 0.875rem; /* Relative font size for tablets */
    }
    
    h1 {
        font-size: 1.5rem; /* Adjust heading sizes */
    }
    
    h2 {
        font-size: 1.375rem;
    }
    
    h3 {
        font-size: 1.25rem;
    }
}

@media (max-width: 30rem) { /* 480px to rem */
    body {
        font-size: 0.75rem; /* Relative font size for phones */
        background-size: cover; /* Adjust background for small screens */
    }
    
    h1 {
        font-size: 1.25rem; /* Adjust heading sizes */
    }
    
    h2 {
        font-size: 1.125rem;
    }
    
    h3 {
        font-size: 1rem;
    }
}
`;

export default GlobalStyles;
