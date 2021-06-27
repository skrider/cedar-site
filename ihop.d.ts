type AppMode = "chill" | "party" | "safe"

type AppState = {
  mode: AppMode, 
}

type AppContext = {
  appState: AppState;
  setAppState: (state: AppState) => void;
};

type TextComment = {
  content: string;
  date: string;
  authorLatitude?: string;
  authorLongitude?: string;
  redacted: boolean;
}

type ImageComment = {
  link: string;
  caption: string;
  date: string;
  authorLatitude: string;
  authorLongitude: string;
  redacted: boolean;
}
