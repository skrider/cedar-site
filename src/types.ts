export type TextComment = {
  content: string;
  date: string;
  authorLatitude?: string;
  authorLongitude?: string;
  redacted: boolean;
}

export type ImageComment = {
  link: string;
  caption: string;
  date: string;
  authorLatitude: string;
  authorLongitude: string;
  redacted: boolean;
}
