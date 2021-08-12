import React, { useState } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import { DefaultTheme, ThemeProvider } from 'styled-components'

import { theme, GlobalStyle } from '../styles/theme'
import '../styles/globals.css'

import Store from '../src/store';

import {Navbar, NavbarComp} from '../src/components/Navbar';
import {TopFiller, HeaderLayout, Layout, SubHeader, Container } from '../styles/pages/home';
import Logo from '../src/components/Logo';
import Background from '../src/components/Background';
import Footer from '../src/components/Footer';

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
    mode: "chill",
  });
  const [navbarState, setNavbarState] = useState<NavbarItem[]>([]);
  
  return (
    <Store.Provider value={{
      appState: appState,
      setAppState: setAppState,
    }}>
      <Navbar.Provider
        value={{
          navbar: navbarState,
          setNavbar: setNavbarState
        }}
      >
        <ThemeProvider theme={getTheme(appState.mode)}>
          <GlobalStyle />
          <Container>
            <Background />
            <TopFiller />
            <Layout>
              <HeaderLayout>
                <div>
                  <Logo>
                    IHOP
                  </Logo>
                  <SubHeader>
                    Southside Berkeley
                  </SubHeader>
                </div>
                <img alt="hop" src="https://ssl.cdn-redfin.com/photo/10/mbphoto/522/genMid.28117522_0.jpg" />
              </HeaderLayout>
              <NavbarComp />
              <Component {...pageProps} />
              <Footer />
            </Layout>
          </Container>
        </ThemeProvider>
      </Navbar.Provider>
    </Store.Provider>
  )
}

export default MyApp
