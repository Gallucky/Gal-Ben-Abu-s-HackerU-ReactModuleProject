import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.object()
    .keys({
      first: Joi.string().min(2).max(256).required().messages({
        "string.empty": "First name is required",
        "string.min": "First name must be at least 2 characters",
        "string.max": "First name must be less than 256 characters",
      }),
      middle: Joi.string().min(2).max(256).allow("").messages({
        "string.min": "Middle name must be at least 2 characters (if provided)",
        "string.max": "Middle name must be less than 256 characters",
      }),
      last: Joi.string().min(2).max(256).required().messages({
        "string.empty": "Last name is required",
        "string.min": "Last name must be at least 2 characters",
        "string.max": "Last name must be less than 256 characters",
      }),
    })
    .required(),

  phone: Joi.string()
    .pattern(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .min(9)
    .max(11)
    .required()
    .messages({
      "string.pattern.base":
        "Phone number must be a valid Israeli format (e.g., 050-1234567)",
      "string.empty": "Phone number is required",
      "any.required": "Phone number is required",
      "string.min": "Phone number must be at least 9 characters long",
      "string.max": "Phone number must be less than 12 characters long",
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Email must be a valid email address",
      "string.empty": "Email is required",
      "any.required": "Email is required",
    }),

  password: Joi.string()
    .pattern(/(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*-]).{9,20}/)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be at least 9 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
    }),

  image: Joi.object()
    .keys({
      url: Joi.string()
        .ruleset.regex(
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
        )
        .rule({ message: "Image url is invalid" })
        .allow(""),
      alt: Joi.string().min(2).max(256).allow("").messages({
        "string.min": "Alt text must be at least 2 characters",
        "string.max": "Alt text must be less than 256 characters",
      }),
    })
    .required(),
  address: Joi.object()
    .keys({
      state: Joi.string().allow("").min(2).max(256).messages({
        "string.min": "Middle name must be at least 2 characters (if provided)",
        "string.max": "Middle name must be less than 256 characters",
      }),
      country: Joi.string().min(2).max(256).required().messages({
        "string.empty": "Country is required",
        "any.required": "Country is required",
        "string.base": "Country must be a string",
        "string.min": "Country must be at least 2 characters",
        "string.max": "Country must be less than 256 characters",
      }),
      city: Joi.string().min(2).max(256).required().messages({
        "string.empty": "City is required",
        "any.required": "City is required",
        "string.base": "City must be a string",
        "string.min": "City must be at least 2 characters",
        "string.max": "City must be less than 256 characters",
      }),
      street: Joi.string().min(2).max(256).required().messages({
        "string.empty": "Street is required",
        "any.required": "Street is required",
        "string.base": "Street must be a string",
        "string.min": "Street must be at least 2 characters",
        "string.max": "Street must be less than 256 characters",
      }),
      houseNumber: Joi.number().min(0).required().messages({
        "number.base": "House number must be a number",
        "number.min": "House number cannot be negative",
        "string.empty": "House number is required",
        "any.required": "House number is required",
      }),
      zip: Joi.number().min(0).required().messages({
        "any.required": "House number is required",
        "string.empty": "Zip code is required",
        "number.base": "Zip must be a number",
        "number.min": "Zip code cannot be negative",
      }),
    })
    .required(),
  isBusiness: Joi.boolean(),
  isAdmin: Joi.boolean().allow(""),
});
