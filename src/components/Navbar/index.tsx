import React, {createContext} from "react";
import { NavbarLayout } from './styles';
import {Button} from '../atoms';

export const Navbar = createContext<NavbarContext>({
  navbar: [],
  setNavbar: () => {},
})

export const NavbarComp : React.FC = () => {
  return (
    <NavbarLayout>
      <Navbar.Consumer>
        {({navbar}) => (
          <>
            {navbar.map(({name, type, ...item}, index) => (
              <Button
                key={`navbar-${index}`}
                onClick={type === "link" ? 
                  () => {
                    // @ts-ignore
                    window.history.pushState({}, name, item.route);
                    window.history.go(0);
                  } :
                  // @ts-ignore
                  item.effect
                }
              >
                {name}
              </Button>
            ))}
          </>
        )}
      </Navbar.Consumer>
    </NavbarLayout>
  )
}
