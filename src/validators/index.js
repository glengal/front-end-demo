import validator from 'validator';

const required = (value) => {
  if (!value.toString().trim().length) {
    return 'require';
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};

export { required, email }
