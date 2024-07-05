export interface ContactFormType {
  email: string;
  phone: number | string;
  fullname: string;
  message: string;
}

export interface QueryContactType {
  type: string,
  name: string,
}