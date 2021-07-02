import { createGlobalStyle, DefaultTheme } from 'styled-components';

const sizes = {
  xs2: "0.2rem", 
  xs: "0.3rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1.25rem",
  xl: "2rem",
  xl2: "2.5rem",
  xl3: "3.25rem",
  xl4: "4rem",
  xl5: "5rem",
};

const theme: DefaultTheme = {
  toggleDarkMode: () => {},
  border: {
    radius: sizes.sm,
    width: '2px',
    color: '#E4E4E4',
    all: `2px solid #E4E4E4`
  },
  colors: {
    primary: '#D24949',
    primaryHighlight: '#AE3131',
    secondary: '#3CA4EF',
    secondaryHighlight: '#0075CA',
    content: '#5F5F5F',
    foreground: '#FFFFFF',
    background: '#f8f8ff',
    red: '#FF8E8E',
    green: '#4BC003',
  },
  partyColors: {
    primary: '#2EB4FF',
    primaryHighlight: '#2EB4FF',
    secondary: '#8E8E8E',
    secondaryHighlight: '#8E8E8E',
    content: 'white',
    foreground: '#2c2f33',
    background: '#23272a',
    red: '#FF8E8E',
    green: '#4BC003',
  },
  fontSizes: {
    h1: "2.25rem",
    h2: "1.5rem",
    p: "1.125rem",
    sp: "0.688rem",
  },
  fontWeights: {
    h1: "500",
    h2: "500",
    p: "300",
    sp: "500",
  },
  fonts: {
    h1: "Roboto",
    h2: "Roboto",
    p: "Roboto",
    sp: "Roboto",
  },
  sizes: sizes,
};

const GlobalStyle = createGlobalStyle`
  html, body, div, span, iframe,
  h1, h2, p, a {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: ${p => p.theme.fonts.p};
    line-height: 115%;
    font-size: ${p => p.theme.fontSizes.p};
    font-weight: ${p => p.theme.fontWeights.p};
    color: ${p => p.theme.colors.content};
    -webkit-apearance: none;
    vertical-align: baseline;
  }
  img {
    max-width: 100%;
    border-radius: ${p => p.theme.border.radius};
  }
  body {
    line-height: 1;
  }
  input,
  button,
  textarea {
    font: inherit;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0px;
  }
  
  h1 {
    font-family: ${p => p.theme.fonts.h1};
    font-size: ${p => p.theme.fontSizes.h1};
    font-weight: ${p => p.theme.fontWeights.h1};    
    color: ${p => p.theme.colors.primary};
  }
  
  h2 {
    font-family: ${p => p.theme.fonts.h2};
    font-size: ${p => p.theme.fontSizes.h2};
    font-weight: ${p => p.theme.fontWeights.h2};
    color: ${p => p.theme.colors.secondary};
  }

  a {
    color: ${p => p.theme.colors.secondary};
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
    transition: color ease-in 0.15s;
    font-size: ${p => p.theme.fontSizes.sp};
  }

  a:hover {
    color: ${p => p.theme.colors.secondaryHighlight};
  }
`

export { theme, GlobalStyle };
