import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  title: string;
  image?: StaticImageData | string[] | undefined | any;
  slug: string;
  description: string;
  price: number;
  catogery: string;
  size: string[];
  color: string[] | any;
  quantity: number;
  discount?: number | any;
};

export type Cart = {
  id: number;
  title: string;
  image?: string[] | StaticImageData | undefined | any;
  slug: string;
  discount?: number | any;
  price: number | any;
  catogery: string;
  size: string[];
  quantity: number;
  color: string[] | any;
  uuid?: number | string | undefined;
};


export type People = {
   
    id : number;
    name : string;
    roll : string;
    image : StaticImageData;
}

