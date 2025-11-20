export interface ICategory {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  find(arg0: (i: any) => boolean): unknown;
  filter(arg0: (item: any) => boolean): unknown;
  map(arg0: (item: any) => string): number[] | (() => number[]);
  length: number;
  _id: string;
  categoryId: ICategory;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  detail: string;
  createdAt: string;
  updatedAt: string;
}
