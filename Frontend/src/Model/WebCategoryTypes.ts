export interface WebDataType {
  id: number;
  title: string;
  path: string;
}

export const WebCategory: WebDataType[] = [
  {
    id: 1,
    title: "Static",
    path: "/services/cost/static",
  },
  {
    id: 2,
    title: "Ecommerce",
    path: "/services/cost/ecommerce",
  },
  {
    id: 3,
    title: "CMS",
    path: "/services/cost/cms",
  },
];
