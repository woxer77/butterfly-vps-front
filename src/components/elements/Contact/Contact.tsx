import React from 'react';

import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import Field from "../../UI/Field/Field";
import Button from "../../UI/Button/Button";
// import PhoneField from "../../UI/PhoneField/PhoneField";

import { emailOptions, /*phoneOptions,*/ contactTextOptions, nameOptions } from "../../../helpers/Form/contactForm";
import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import { sendMail } from "../../../services/mails";
import { IUser } from "../../../ts/interfaces/types";

import 'react-phone-number-input/style.css'
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }/*, control*/ } = useForm({ mode: "onChange" });

  const mutation = useMutation({
    mutationKey: ['sendMail'],
    mutationFn: (data: IUser) => sendMail(data)
  });

  const onSubmit = (formData: FieldValues) => {
    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      // phone: formData.phone,
      text: formData.text
    } as IUser;

    mutation.mutate(user);
  };

  return (
    <div className={styles.contact} id="contact">
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <Field
            label="First name"
            placeholder="First name"
            name="firstName"
            register={register}
            error={typeof errors?.firstName?.message === 'string' ? errors?.firstName?.message : ''}
            options={nameOptions}
            customClassName={styles.halfField}
          />
          <Field
            label="Last name"
            placeholder="Last name"
            name="lastName"
            register={register}
            error={typeof errors?.lastName?.message === 'string' ? errors?.lastName?.message : ''}
            options={nameOptions}
            customClassName={styles.halfField}
          />
        </div>
        <Field
          label="Email"
          placeholder="your@company.com"
          name="email"
          register={register}
          error={typeof errors?.email?.message === 'string' ? errors?.email?.message : ''}
          options={emailOptions}
        />
        {/*<PhoneField
          error={typeof errors?.phone?.message === 'string' ? errors?.phone?.message : ''}
          control={control}
          options={phoneOptions}
        />*/}
        <Field
          label="How can we help you?"
          placeholder="Describe your request as fully as possible"
          name="text"
          register={register}
          error={typeof errors?.text?.message === 'string' ? errors?.text?.message : ''}
          options={contactTextOptions}
          textarea
        />
        <Button variant={ButtonVariantEnum.Filled} type={ButtonTypeEnum.Submit} customClassName={styles.button}>Contact</Button>
      </form>
      <div className={styles.textContent}>
        <h2 className={`smallerTitle ${styles.title}`}>
          Get in touch with us now and <span className="selectedColor">get started</span>
        </h2>
        <p className={styles.description}>
          Fill in the form and we will reply to you as soon as possible!
        </p>
      </div>
    </div>
  );
};

export default Contact;
