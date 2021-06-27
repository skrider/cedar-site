import React, { useState } from 'react';
import '../styles/globals.css'
import { theme, GlobalStyle } from '../styles/theme'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Store from '../src/store';

const getTheme = (mode : AppMode) : DefaultTheme => {
  switch (mode) {
    case "party": 
      return {
        ...theme, 
        colors: theme.partyColors 
      }
    default:
      return theme
  }
}

function MyApp({ Component, pageProps } : AppProps) {
  const [appState, setAppState] = useState<AppState>({
    mode: "chill"
  });
  
  return (
    <Store.Provider value={{
      appState: appState,
      setAppState: setAppState,
    }}>
      <ThemeProvider theme={getTheme(appState.mode)}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Store.Provider>
  )
}

export default MyApp
