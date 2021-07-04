import { createContext } from "react";

export default createContext<AppContext>({
  appState: { 
    mode: "chill",
    navbar: []
  },
  setAppState: (target) => {console.log(target)},
});
