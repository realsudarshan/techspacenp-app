import { queryDataType } from "./../../../backend/src/models/QueryContactTypes";
import exp from "constants";
import { QueryContactType } from "./ContactFormTypes";

export interface QueryDataType {
  id: number;
  step?: string;
  question?: string;
  options?: string[];
  ContactFormType?: QueryContactType[];
  note?: string;
  type?: string;
}

export const QueryData: QueryDataType[] = [
  {
    id: 0,
    step: "answer1",
    question: "What is the primary purpose of the static website ?",
    options: [
      "Portfolio website",
      "Brochure website",
      "Landing page",
      "Education website",
      "Event website",
      "Documentation website",
    ],
  },
  {
    id: 1,
    step: "answer2",
    question: "What type of advance services you want ?",
    options: [
      "SEO Optimization",
      "Dynamic pages (include UI | content)",
      "Fast Performance",
      "Over 10+ pages",
      "High Security protection",
    ],
  },

  {
    id: 2,
    step: "answer3",
    question: "How many users will view your website approximately as expected",
    options: [
      "upto 100",
      "100 - 1000",
      "1000 - 10000",
      "10,000 - 1,00,000",
      "over 1,00,000",
    ],
  },
  {
    id: 3,
    step: "answer4",
    question: "what is your timeline to completing the website ?",
    options: [
      "under 1 month",
      "1 - 2 month",
      "2 - 3 month",
      "3 - 4 month",
      "over 4 month",
    ],
  },
  {
    id: 4,
    step: "answer5",
    question:
      "what budget have you allocated for developing & hosting of your website ?",
    options: [
      "20k - 30k",
      "30k - 40k",
      "40k - 50k",
      "50k - 60k",
      "upto 1 lakh",
    ],
  },
  {
    id: 5,
    step: "answer6",
    question: "Do you want to maintainance your website in every month ?",
    options: ["Yes", "No", "I will do with others"],
    note: "we will provide 2 month free maintance service at first",
  },
  {
    id: 6,
    type: "text",
    question: "Do you want to maintainance your website in every month ?",
    ContactFormType: [
      {
        type: "text",
        name: "fullname",
      },
      {
        type: "email",
        name: "email",
      },
      {
        type: "text",
        name: "phone",
      },
      {
        type: "text",
        name: "message",
      },
    ],
  },
];

export const EcommerceQueryData: QueryDataType[] = [
  {
    id: 0,
    step: "answer1",
    type: "radio",
    question: "What is the primary purpose of the ecommerce website ?",
    options: [
      "Business to Business(B2B)",
      "Business to Consumer(B2C)",
      "Customer to Consumer(C2C)",
      "Dropshipping",
      "Marketplace Platform",
      "Others",
    ],
  },
  {
    id: 1,
    step: "answer2",
    type: "checkbox",
    question: "What type of advance services you want ?",
    options: [
      "SEO Optimization",
      "Dynamic pages (include UI | content)",
      "Fast Performance",
      "Over 10+ pages",
      "High Security protection",
    ],
  },

  {
    id: 2,
    step: "answer3",
    type: "radio",
    question: "How many users will view your website approximately as expected",
    options: [
      "upto 100",
      "100 - 1000",
      "1000 - 10000",
      "10,000 - 1,00,000",
      "over 1,00,000",
    ],
  },
  {
    id: 3,
    step: "answer4",
    type: "radio",
    question: "what is your timeline to completing the website ?",
    options: [
      "under 1 month",
      "1 - 2 month",
      "2 - 3 month",
      "3 - 4 month",
      "over 4 month",
    ],
  },
  {
    id: 4,
    step: "answer5",
    type: "radio",
    question:
      "what budget have you allocated for developing & hosting of your website ?",
    options: [
      "20k - 30k",
      "30k - 40k",
      "40k - 50k",
      "50k - 60k",
      "upto 1 lakh",
    ],
  },
  {
    id: 5,
    step: "answer6",
    type: "radio",
    question: "Do you want to maintainance your website in every month ?",
    options: ["Yes", "No", "I will do with others"],
    note: "we will provide 2 month free maintance service at first",
  },
  {
    id: 6,
    question: "Do you want to maintainance your website in every month ?",
    ContactFormType: [
      {
        type: "text",
        name: "fullname",
      },
      {
        type: "email",
        name: "email",
      },
      {
        type: "text",
        name: "phone",
      },
      {
        type: "text",
        name: "message",
      },
    ],
  },
];

export const CMSData: QueryDataType[] = [
  {
    id: 0,
    step: "answer1",
    type: "radio",
    question: "What tpe of content you want in your website ?",
    options: ["Image", "Text/Article post", "Vidoes"],
  },
  {
    id: 1,
    step: "answer2",
    type: "checkbox",
    question: "For which platform, you want to build CMS ?",
    options: [
      "Ecommerce website",
      "News website",
      "Educational website",
      "Blog website",
      "Portfolio website",
    ],
  },

  {
    id: 2,
    step: "answer3",
    type: "radio",
    question:
      "Do you have any design preferences or existing branding guidelines ?",
    options: ["Yes", "No"],
  },
  {
    id: 2,
    step: "answer3",
    type: "radio",
    question: "Do you want to add multiple content manager ?",
    options: ["Yes", "No"],
  },
  {
    id: 2,
    step: "answer3",
    type: "radio",
    question: "What type of services you want to add ?",
    options: [
      "Fast performance",
      "Integration with CRM system for managing customer interaction & data",
      "Advanced search functionality with filter",
      "Membership & suscription management system",
      "Advanced analytics & reporting for tracking website performance",
      "Real-time user activity track",
      "Real-time chat functionality for customer support",
    ],
  },

  {
    id: 3,
    step: "answer4",
    type: "radio",
    question: "what is your timeline to completing the website ?",
    options: [
      "under 1 month",
      "1 - 2 month",
      "2 - 3 month",
      "3 - 4 month",
      "over 4 month",
    ],
  },
  {
    id: 4,
    step: "answer5",
    type: "radio",
    question:
      "what budget have you allocated for developing & hosting of your website ?",
    options: [
      "30k - 50k",
      "50k - 100k",
      "100k - 150k",
      "150k - 200k",
      "upto 1 lakh",
    ],
  },
  {
    id: 5,
    step: "answer6",
    type: "radio",
    question: "Do you want to maintainance your website in every month ?",
    options: ["Yes", "No", "I will do with others"],
    note: "we will provide 2 month free maintance service at first",
  },
  {
    id: 6,
    question: "Do you want to maintainance your website in every month ?",
    ContactFormType: [
      {
        type: "text",
        name: "fullname",
      },
      {
        type: "email",
        name: "email",
      },
      {
        type: "text",
        name: "phone",
      },
      {
        type: "text",
        name: "message",
      },
    ],
  },
];
