export interface ApiResponse<T> {
  response: {
    data: T;
  };
}
