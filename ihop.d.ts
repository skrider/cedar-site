type AppMode = "chill" | "party" | "safe" | "admin"

type NavbarLink = {
  name: string,
  type: "link",
  route: string,
}

type NavbarEffect = {
  name: string,
  type: "effect",
  effect: () => void,
}

type NavbarItem = NavbarLink | NavbarEffect;

type NavbarContext = {
  navbar: NavbarItem[],
  setNavbar: (navbar: NavbarItem[]) => void;
}

type AppState = {
  mode: AppMode,
}

type AppContext = {
  appState: AppState;
  setAppState: (state: AppState) => void;
};

type SongData = {
  name: string;
  artist: string;
  approved: boolean;
  date: number;
}

type TextComment = {
  _id?: string;
  content: string;
  name?: string;
  date: number;
  authorLatitude?: string;
  authorLongitude?: string;
  rejected?: boolean;
}

type ImageComment = {
  _id: string;
  link: string;
  caption: string;
  date: number;
  authorLatitude: string;
  authorLongitude: string;
  rejected: boolean;
}
