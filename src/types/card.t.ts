export type TCardData = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web: string;
  image: {
    url: string;
    alt: string;
    _id: string;
  };
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: string;
    _id: string;
  };
  bizNumber: string;
  likes: string[];
  user_id: string;
  createdAt: Date;
  __v: number;
};
