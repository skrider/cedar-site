import React from "react";
import {NavbarLayout} from './styles';
import {Button} from '../atoms';
import Store from '../../store';

const Navbar : React.FC = () => {
  return (
    <NavbarLayout>
      <Store.Consumer>
        {({appState: {mode}}) => (
          <>
            {mode !== 'safe' && 
              <Button
                onClick={() => {
                  window.history.pushState({}, "submit", "/submit")
                  window.history.go(0);
                }}
              >
                Comment
              </Button>
            }
            {mode === 'party' && 
              <Button>
                Song Rec
              </Button>
            }
            {mode === 'admin' && 
              <Button>
                Admin
              </Button>
            }
          </>
        )}
      </Store.Consumer>
    </NavbarLayout>
  )
}

export default Navbar;
