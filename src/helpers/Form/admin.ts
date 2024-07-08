export const validationRulesMinMax = (minLengthValue: number, maxLengthValue: number, required: boolean = true) => {
  return {
    required: required ? 'Required field' : false,
    maxLength: {
      value: maxLengthValue,
      message: `Maximum ${maxLengthValue} characters`
    },
    minLength: {
      value: minLengthValue,
      message: `Minimum ${minLengthValue} characters`
    }
  };
};

export const starsCountOptions = {
  required: 'Required field',
  pattern: {
    value: /^[1-5]+$/,
    message: 'Number from 1 to 5',
  },
  validate: (value: any) => {
    if (value > 5 || value < 1) {
      return 'Number from 1 to 5';
    }
  }
};

export const dateOptions = {
  required: 'Required field',
  pattern: {
    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/((19|20)[0-9][0-9]|2100)$/,
    message: 'Use correct date in DD/MM/YYYY format',
  },
};

export function toSlug(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[^\w-]+/g,'');
}

export function fromSlug(slug: string) {
  return slug
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => /\d/.test(word) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
