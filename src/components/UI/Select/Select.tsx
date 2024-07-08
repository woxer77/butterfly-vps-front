import React from 'react';

import styles from './Select.module.scss';

interface SelectProps {
  options: string[];
  values?: string[];
  label: string;
  onValueChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, values, onValueChange, label }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <div className={styles.select}>
      <p className="label">{label}</p>
      <select className={styles.selectElement} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={`option-${option}-${index}`} value={(values && values[index]) || option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
