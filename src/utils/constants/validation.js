export const isRequiredValidation = (label) => ({
  required: `${label} is required`,
})

export const minLengthValidation = (label, value, isDigit = false) => ({
  minLength: {
    value,
    message: `${label} must be at least ${value} ${
      isDigit ? 'digits' : 'characters'
    }`,
  },
})

export const maxLengthValidation = (label, value, isDigit = false) => ({
  maxLength: {
    value,
    message: `${label} must be less than ${value} ${
      isDigit ? 'digits' : 'characters'
    }`,
  },
})

export const nameValidation = {
  ...isRequiredValidation('Name'),
  ...minLengthValidation('Name', 3),
  ...maxLengthValidation('Name', 30),
}

export const phoneValidation = {
  ...isRequiredValidation('Phone'),
  ...minLengthValidation('Phone', 10),
  ...maxLengthValidation('Phone', 13),
  pattern: {
    value: /^[1-9]\d*$/,
    message: 'Phone must be numeric value that does not start with 0',
  },
}

export const emailValidation = {
  ...isRequiredValidation('Phone'),
  pattern: {
    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Invalid email',
  },
}

export const passwordValidation = {
  ...isRequiredValidation('Password'),
  ...minLengthValidation('Password', 8),
  ...maxLengthValidation('Password', 10),
  pattern: {
    value: /[A-Z]/,
    message: 'Password must contain capital letter',
  },
}
