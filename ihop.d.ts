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
