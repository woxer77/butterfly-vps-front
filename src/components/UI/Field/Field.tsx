import React from 'react';

import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

import GlobalSvgSelector from "../../../assets/images/icons/global/GlobalSvgSelector";

import styles from './Field.module.scss';

interface FieldProps {
  label: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  options?: RegisterOptions;
  error?: string;
  customClassName?: string;
  textarea?: boolean;
  password?: boolean;
}

const Field: React.FC<FieldProps> = ({ label, placeholder, name, register, options, error, customClassName, textarea, password }) => {
  const fieldStyles = customClassName ? `${styles.field} ${customClassName}` : styles.field;
  const textareaStyles = customClassName ? `${styles.textarea} ${customClassName}` : styles.textarea;
  const labelStyles = error ? 'label error' : 'label';

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const changePassVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={fieldStyles}>
      <label className={labelStyles}>
        {error || label}
      </label>
      {textarea
        ? <textarea
          {...register(name, options)}
          className={textareaStyles}
          placeholder={placeholder}
          name={name}
        />
        :
        <>
          <input
            {...register(name, options)}
            type={password && !showPassword ? "password" : "text"}
            className={styles.input}
            style={{ paddingRight: password ? '40px' : '' }}
            placeholder={placeholder}
            name={name}
          />
          {password &&
            <div onClick={changePassVisibility} className={styles.icon}>
              <GlobalSvgSelector iconId={showPassword ? 'visibility' : 'visibilityOff'}/>
            </div>
          }
        </>
      }
    </div>
  );
};
export default Field;
