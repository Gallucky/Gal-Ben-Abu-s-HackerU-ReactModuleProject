export type CreateCardFormData = {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web?: string;
  image: {
    url?: string;
    alt?: string;
  };
  address: {
    city: string;
    country: string;
    state?: string;
    street: string;
    houseNumber: number;
    zip: number;
  };
};

export const defaultValuesCreateCard = {
  title: "",
  subtitle: "",
  description: "",
  phone: "",
  email: "",
  web: "",
  image: {
    url: "",
    alt: "",
  },
  address: {
    city: "",
    country: "",
    state: "",
    street: "",
    houseNumber: 0,
    zip: 0,
  },
};
