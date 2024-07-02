import React from 'react';

import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { Control, FieldValues, RegisterOptions } from "react-hook-form";

interface PhoneFieldProps {
  error: string;
  control: Control<FieldValues, any>;
  options?: RegisterOptions;
}

const PhoneField: React.FC<PhoneFieldProps> = ({ error, control, options }) => {
  const labelStyles = error ? 'label error' : 'label';

  return (
    <>
      <p className={labelStyles}>
        {error || 'Phone number'}
      </p>
      <PhoneInputWithCountry
        name="phone"
        control={control}
        placeholder="Phone number"
        defaultCountry="AE"
        countrySelectProps={{ unicodeFlags: true }}
        rules={options}
        international
      />
    </>
  );
};

export default PhoneField;
