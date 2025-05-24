import { RegisterFormData, UpdateUserFormData } from "../hooks/useAuth";
import { TUser } from "../types/user.t";

export const convertTUserToUpdateUserFormData = (
  user: TUser,
): UpdateUserFormData => {
  return {
    name: {
      first: user.name.first,
      middle: user.name.middle,
      last: user.name.last,
    },
    phone: user.phone,
    image: { url: user.image.url ?? "", alt: user.image.alt ?? "" },
    address: {
      state: user.address.state,
      country: user.address.country,
      city: user.address.city,
      street: user.address.street,
      houseNumber: user.address.houseNumber,
      zip: user.address.zip,
    },
  };
};

export const convertTUserToRegisterFormData = (
  user: TUser,
): RegisterFormData => {
  return {
    name: {
      first: user.name.first,
      middle: user.name.middle ?? "",
      last: user.name.last,
    },
    phone: user.phone,
    email: user.email,
    password: "protected",
    image: { url: user.image.url ?? "", alt: user.image.alt ?? "" },
    address: {
      state: user.address.state,
      country: user.address.country,
      city: user.address.city,
      street: user.address.street,
      houseNumber: user.address.houseNumber.toString(),
      zip: user.address.zip.toString(),
    },
    isBusiness: user.isBusiness,
  };
};
