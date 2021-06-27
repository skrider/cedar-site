type AppMode = "chill" | "party" | "safe" | "admin"

type AppState = {
  mode: AppMode, 
}

type AppContext = {
  appState: AppState;
  setAppState: (state: AppState) => void;
};

type TextComment = {
  _id: string;
  content: string;
  name: string;
  date: string;
  authorLatitude?: string;
  authorLongitude?: string;
  redacted: boolean;
}

type ImageComment = {
  _id: string;
  link: string;
  caption: string;
  date: string;
  authorLatitude: string;
  authorLongitude: string;
  redacted: boolean;
}
