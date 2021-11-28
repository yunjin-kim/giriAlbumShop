export interface ArtistName {
  topalbums: Topalbums;
}

export interface Topalbums {
  album:   ArtAlbum[];
  "@attr": Attr;
}

export interface Attr {
  artist:     string;
  page:       string;
  perPage:    string;
  totalPages: string;
  total:      string;
}

export enum ArtistEnum {
  기리보이 = "기리보이",
}

export interface ArtAlbum {
  name:      string;
  playcount: number;
  url:       string;
  artist:    ArtistClass;
  image:     Image[];
  count:     number;
  check:     boolean;
}

export interface ArtistClass {
  name: string;
  url:  string;
}

export interface Image {
  "#text": string;
  size:    Size;
}

export enum Size {
  Extralarge = "extralarge",
  Large = "large",
  Medium = "medium",
  Small = "small",
}


