import Joi from "joi";

export const createCardSchema = Joi.object({
  title: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Title is required",
    "string.min": "Title must be at least 2 characters",
    "string.max": "Title must be less than 256 characters",
  }),

  subtitle: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Subtitle is required",
    "string.min": "Subtitle must be at least 2 characters",
    "string.max": "Subtitle must be less than 256 characters",
  }),

  description: Joi.string().min(2).max(1024).required().messages({
    "string.empty": "Description is required",
    "string.min": "Description must be at least 2 characters",
    "string.max": "Description must be less than 1024 characters",
  }),

  phone: Joi.string()
    .pattern(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .min(9)
    .max(11)
    .required()
    .messages({
      "string.empty": "Phone is required",
      "string.pattern.base":
        "Phone must be in valid Israeli format (e.g., 050-1234567)",
      "string.min": "Phone must be at least 9 characters",
      "string.max": "Phone must be less than 12 characters",
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Email must be valid",
    }),

  web: Joi.string().uri().min(14).allow("").messages({
    "string.uri": "Website must be a valid URL",
    "string.min": "Website must be at least 14 characters if provided",
  }),

  image: Joi.object()
    .keys({
      url: Joi.string().uri().min(14).allow("").messages({
        "string.empty": "Image URL is required",
        "string.uri": "Image URL must be valid",
        "string.min": "Image URL must be at least 14 characters",
      }),
      alt: Joi.string().min(2).max(256).allow("").messages({
        "string.min": "Alt text must be at least 2 characters if provided",
        "string.max": "Alt text must be less than 256 characters",
      }),
    })
    .required(),

  address: Joi.object()
    .keys({
      state: Joi.string().min(2).max(256).allow("").messages({
        "string.min": "State must be at least 2 characters when provided",
        "string.max": "State must be less than 256 characters",
      }),
      country: Joi.string().min(2).max(256).required().messages({
        "string.empty": "Country is required",
        "string.min": "Country must be at least 2 characters",
        "string.max": "Country must be less than 256 characters",
      }),
      city: Joi.string().min(2).max(256).required().messages({
        "string.empty": "City is required",
        "string.min": "City must be at least 2 characters",
        "string.max": "City must be less than 256 characters",
      }),
      street: Joi.string().min(2).max(256).required().messages({
        "string.empty": "Street is required",
        "string.min": "Street must be at least 2 characters",
        "string.max": "Street must be less than 256 characters",
      }),
      houseNumber: Joi.number().min(0).required().messages({
        "number.base": "House number must be a number",
        "number.min": "House number must not be negative number",
        "any.required": "House number is required",
      }),
      zip: Joi.number().min(0).required().messages({
        "number.base": "Zip must be a number",
        "number.min": "Zip code cannot be negative",
        "any.required": "Zip code is required",
      }),
    })
    .required(),
});
