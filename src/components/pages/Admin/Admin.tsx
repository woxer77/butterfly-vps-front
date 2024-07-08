import React from 'react';

import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Field from "../../UI/Field/Field";
import Button from "../../UI/Button/Button";

import { emailOptions, passwordOptions } from "../../../helpers/Form/contactForm";
import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import { login } from "../../../services/admin";
import { useAppDispatch } from "../../../hooks/common/redux";
import { setAdminId, setAuth } from "../../../redux/slices/adminSlice";

import styles from './Admin.module.scss';

interface IAdminLogin {
  email: string,
  password: string
}

const Admin: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationKey: ['loginAdmin'],
    mutationFn: (data: IAdminLogin) => login(data.email, data.password),
    onSuccess: (res) => {
      const { accessToken, admin } = res.data;

      localStorage.setItem('token', accessToken);

      dispatch(setAuth(true));
      dispatch(setAdminId(admin.adminId));
      navigate('/');
    },
    onError: (error) => {
      alert(error.message);
      console.log(error);
    }
  });

  const onSubmit = (formData: FieldValues) => {
    mutation.mutate(formData as IAdminLogin);
  };

  return (
    <div className={styles.admin}>
      <h1 className={`title ${styles.title}`}>Admin panel authorization</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Field
          label="Email"
          placeholder="admin@gmail.com"
          name="email"
          register={register}
          error={typeof errors?.email?.message === 'string' ? errors?.email?.message : ''}
          options={emailOptions}
        />
        <Field
          label="Password"
          placeholder="Enter your password"
          name="password"
          register={register}
          error={typeof errors?.password?.message === 'string' ? errors?.password?.message : ''}
          options={passwordOptions}
          password={true}
        />
        <Button
          variant={ButtonVariantEnum.Filled}
          type={ButtonTypeEnum.Submit}
          customClassName={styles.button}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Admin;
