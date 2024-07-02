import { isValidPhoneNumber } from "react-phone-number-input";

export const nameOptions = {
  required: 'Required field',
  maxLength: {
    value: 32,
    message: 'Maximum 32 characters'
  },
  minLength: {
    value: 2,
    message: 'Minimum 2 characters'
  }
};

export const emailOptions = {
  required: 'Required field',
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: 'Invalid email format',
  }
};

const validatePhoneNumber = (value: string) => {
  if (isValidPhoneNumber(value)) {
    return true;
  } else {
    return 'Enter the correct phone number';
  }
};

/*export const phoneOptions = {
  required: 'Required field',
  validate: { validatePhoneNumber }
};*/

export const contactTextOptions = {
  required: 'Required field',
  maxLength: {
    value: 1024,
    message: 'Maximum 1024 characters'
  },
  minLength: {
    value: 32,
    message: 'Minimum 32 characters'
  }
};

export const passwordOptions = {
  required: 'Required field',
  maxLength: {
    value: 32,
    message: 'Maximum 32 characters'
  },
  minLength: {
    value: 8,
    message: 'Minimum 8 characters'
  },
  validate: (value: any) => {
    if (!/[0-9]/.test(value)) {
      return 'Password must contain a number';
    }
    if (!/[a-z]/.test(value)) {
      return 'Password must contain a lowercase letter';
    }
    if (!/[A-Z]/.test(value)) {
      return 'Password must contain an uppercase letter';
    }
    if (!/[^\w]/.test(value)) {
      return 'Password must contain a symbol';
    }
    return true;
  }
};

export const goToContact = () => {
  const element = document.getElementById('contact');
  element?.scrollIntoView({ behavior: 'smooth' });
};
