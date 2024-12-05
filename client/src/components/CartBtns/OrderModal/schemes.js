import * as yup from "yup";

export const nameChangeScheme = yup
  .string()
  .min(3, "Имя должно содержать минимум 3 символа")
  .max(50, "Имя не должно превышать 50 символов")
  .required("Имя обязательно для заполнения");

export const emailChangesScheme = yup
  .string()
  .email("Почта не валидна.")
  .required("Email обязателен для заполнения");

export const phoneChangesScheme = yup
  .string()
  .matches(
    /^\+?[0-9]{10,15}$/,
    "Телефон должен начинаться с '+' (опционально) и содержать только цифры. Длина от 10 до 15 символов"
  )
  .required("Телефон обязателен для заполнения");

export const validateAndGetErrorMessage = (scheme, value) => {
  let errorMessage = null;

  try {
    scheme.validateSync(value);
  } catch ({ errors }) {
    errorMessage = errors[0];
  }
  return errorMessage;
};
