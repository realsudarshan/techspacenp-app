export interface QueryContactType {
  fullname: string;
  email: string;
  phone: string | number;
  message: string;
}

export interface queryDataType {
  questions: string;
  answer: string;
}

export interface QueryFormType {
  questions: string;
  answer: string;
  fullname?: string;
  email?: string;
  phone?: string | number;
  message?: string;
}
