export interface ICategory {
  _id: string;
  name: string;
  image: string;
}

export interface IProduct {
  _id: string;
  categoryId: ICategory;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  detail: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}
