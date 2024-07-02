export const serviceTitleOptions = {
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

export const miniDescriptionOptions = {
  required: 'Required field',
  maxLength: {
    value: 384,
    message: 'Maximum 384 characters'
  },
  minLength: {
    value: 16,
    message: 'Minimum 16 characters'
  }
};

export const benefitOptions = {
  maxLength: {
    value: 64,
    message: 'Maximum 64 characters'
  },
  minLength: {
    value: 4,
    message: 'Minimum 4 characters'
  }
};

export const stepTitleOptions = {
  required: 'Required field',
  maxLength: {
    value: 64,
    message: 'Maximum 64 characters'
  },
  minLength: {
    value: 4,
    message: 'Minimum 4 characters'
  }
};

export const stepDescriptionOptions = {
  required: 'Required field',
  maxLength: {
    value: 256,
    message: 'Maximum 256 characters'
  },
  minLength: {
    value: 16,
    message: 'Minimum 16 characters'
  }
};

export const projectDescriptionOptions = {
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

export const feedbackAuthorOptions = {
  required: 'Required field',
  maxLength: {
    value: 32,
    message: 'Maximum 32 characters'
  },
  minLength: {
    value: 4,
    message: 'Minimum 4 characters'
  }
};

export const feedbackTextOptions = {
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
