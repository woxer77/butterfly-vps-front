import React from 'react';

import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import Field from "../../UI/Field/Field";
import Button from "../../UI/Button/Button";

import { emailOptions } from "../../../helpers/Form/contactForm";
import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import { sendMail } from "../../../services/mails";
import { IMailSender } from "../../../ts/interfaces/types";
import { validationRulesMinMax } from "../../../helpers/Form/admin";

import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onChange" });

  const mutation = useMutation({
    mutationKey: ['sendMail'],
    mutationFn: (data: IMailSender) => sendMail(data),
    onSuccess: () => {
      alert('Mail sent successfully!');
      reset();
    },
    onError: (err) => {
      alert('Mail sending failed!');
      console.log(err);
      reset();
    }
  });

  const onSubmit = (formData: FieldValues) => {
    mutation.mutate(formData as IMailSender);
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
            options={validationRulesMinMax(2, 32)}
            customClassName={styles.halfField}
          />
          <Field
            label="Last name"
            placeholder="Last name"
            name="lastName"
            register={register}
            error={typeof errors?.lastName?.message === 'string' ? errors?.lastName?.message : ''}
            options={validationRulesMinMax(2, 32)}
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
        <Field
          label="How can we help you?"
          placeholder="Describe your request as fully as possible"
          name="text"
          register={register}
          error={typeof errors?.text?.message === 'string' ? errors?.text?.message : ''}
          options={validationRulesMinMax(32, 1024)}
          textarea
        />
        <Button
          variant={ButtonVariantEnum.Filled}
          type={ButtonTypeEnum.Submit}
          customClassName={styles.button}
        >
          Contact
        </Button>
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
