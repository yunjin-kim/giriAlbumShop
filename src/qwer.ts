export interface Qwer {
  topalbums: Topalbums;
}

export interface Topalbums {
  album:   Album[];
  "@attr": Attr;
}

export interface Attr {
  artist:     ArtistEnum;
  page:       string;
  perPage:    string;
  totalPages: string;
  total:      string;
}

export enum ArtistEnum {
  기리보이 = "기리보이",
}

export interface Album {
  name:      string;
  playcount: number;
  url:       string;
  artist:    ArtistClass;
  image:     Image[];
}

export interface ArtistClass {
  name: ArtistEnum;
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
