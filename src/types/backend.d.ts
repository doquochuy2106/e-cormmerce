export interface IBackendRes<T> {
  statusCode: number;
  message: string;
  data?: T;
}

export interface IPaginate<T> {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  data: T[];
}
