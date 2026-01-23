export type BodyResponse<T> = {
  status: number;
  message: string;
  data: T;
};