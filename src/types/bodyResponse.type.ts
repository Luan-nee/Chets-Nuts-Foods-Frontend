export type BodyResponse<T> = {
  status: "success" | "warning" | "error" | "Z";
  message: string;
  data: T;
};