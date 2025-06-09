export type RegisterFormData = {
  name: { first: string; middle: string; last: string };
  phone: string;
  email: string;
  password: string;
  image: { url: string; alt: string };
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: string;
    zip: string;
  };
  isBusiness: boolean;
};

export // Should be replaced with the data from the user profile.
const defaultValuesRegisterFormData = {
  name: { first: "", middle: "", last: "" },
  phone: "",
  email: "",
  password: "",
  image: { url: "", alt: "" },
  address: {
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  },
  isBusiness: false,
};
