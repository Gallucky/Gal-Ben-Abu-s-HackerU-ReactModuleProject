// type of user
export type TUser = {
  _id: string;
  name: {
    first: string;
    middle?: string;
    last: string;
  };
  isBusiness: boolean;
  isAdmin: boolean;
  email: string;
  phone: string;
  image: {
    url?: string;
    alt?: string;
  };
  address: {
    city: string;
    state: string;
    country: string;
    street: string;
    zip: string;
  };
};
