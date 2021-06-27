import { createContext } from "react";

export default createContext<AppContext>({
  appState: { 
    mode: "chill" 
  },
  setAppState: (target) => {console.log(target)},
});
