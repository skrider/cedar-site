import 'styled-components';

declare module 'styled-components' {
  
  type ColorSet = {
    primary: string;
    primaryHighlight: string;
    secondary: string;
    secondaryHighlight: string;
    content: string;
    foreground: string;
    background: string;
    red: string;
    green: string;
  }

  export interface DefaultTheme {
    toggleDarkMode: () => void;
    borderRadius: string;
    borderWidth: string;
    colors: ColorSet;
    partyColors: ColorSet;
    fontSizes: {
      h1: string;
      h2: string;
      p: string;
      sp: string;
    };
    fonts: {
      h1: string;
      h2: string;
      p: string;
      sp: string;
    };
    fontWeights: {
      h1: string;
      h2: string;
      p: string;
      sp: string;
    };
    sizes: {
      xs2: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xl2: string;
      xl3: string;
      xl4: string;
      xl5: string;
    }
  }
}
