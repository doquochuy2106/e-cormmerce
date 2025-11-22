export interface ICategory {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
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
