export const fakeSongs: SongData[] = [
  {
    name: "UCLA",
    imageLink: "http://www.aal-europe.eu/wp-content/uploads/2014/10/square-1.jpg",
  },
  {
    name: "UCLA",
    imageLink: "http://www.aal-europe.eu/wp-content/uploads/2014/10/square-1.jpg",
  },
  {
    name: "UCLA",
    imageLink: "http://www.aal-europe.eu/wp-content/uploads/2014/10/square-1.jpg",
  },
  {
    name: "UCLA",
    imageLink: "http://www.aal-europe.eu/wp-content/uploads/2014/10/square-1.jpg",
  },
  {
    name: "UCLA",
    imageLink: "http://www.aal-europe.eu/wp-content/uploads/2014/10/square-1.jpg",
  },
  {
    name: "UCLA",
    imageLink: "http://www.aal-europe.eu/wp-content/uploads/2014/10/square-1.jpg",
  },
]

const array = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium "

const size = (ct : number) => {
  let array2 = array;
  for (let i = 1; i < ct; i += 1) {
    array2 = `${array2}${array}`;
  }
  return array2;
}

export const fakeCards: TextComment[] = [
  {
    content: size(10),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(16),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(8),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(11),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(6),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(15),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(7),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(8),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(10),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(20),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(17),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(5),
    name: "Caelin Sutch",
    date: 1625346863
  },
  {
    content: size(7),
    name: "Caelin Sutch",
    date: 1625346863
  },
]
