import Joi from "joi";

const todoText = Joi.string()
  .trim()
  .min(1)
  .max(200)
  .pattern(/^[A-Za-z0-9 _.,()-]+$/)
  .messages({
    "string.pattern.base":
      "Todo text may contain only letters, numbers, spaces, and - _ . , ( )",
  });

export const createTodoSchema = Joi.object({
  text: todoText.required(),
})
  .required()
  .unknown(false);

export const updateTodoSchema = Joi.object({
  text: todoText,
  completed: Joi.boolean(),
})
  .min(1)
  .required()
  .unknown(false);
