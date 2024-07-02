import React from 'react';

import { NavLink } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";

import Button from "../../UI/Button/Button";
import GlobalSvgSelector from "../../../assets/images/icons/global/GlobalSvgSelector";

import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import { useAppDispatch, useAppSelector } from "../../../hooks/common/redux";
import { logout } from "../../../services/admin";
import { resetAll as resetAdmin } from "../../../redux/slices/adminSlice";

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const isAuth = useAppSelector(state => state.adminReducer.isAuth);
  const adminId = useAppSelector(state => state.adminReducer.adminId);
  const services = useAppSelector(state => state.userReducer.services);
  const servicesId = services.map(service => service.serviceId);

  const dispatch = useAppDispatch();

  const pages = [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'About Us',
      to: '/about'
    },
    {
      name: 'Equipment',
      to: '/equipment'
    },
    {
      name: 'Services',
      to: `/services/${servicesId[0]}`,
    },
    /*{
      name: 'Projects',
      to: '/projects'
    }*/
  ];

  const deleteCookie = (name: string) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };

  const mutateHook = useMutation({
    mutationKey: ['adminLogout', adminId],
    mutationFn: () => logout(),
    onSuccess: () => {
      localStorage.removeItem('token');
      deleteCookie('refreshToken');
      dispatch(resetAdmin());
    },
    onError: (error) => {
      console.log('Admin logout error:', error);
    }
  });

  function handleLogout() {
    mutateHook.mutate();
  }

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        {pages.map((page) => (
          <NavLink
            to={page.to}
            className={({ isActive }) => isActive ? `${styles.navElem} selectedColor` : `${styles.navElem}`}
            key={page.to}
          >
            {page.name}
          </NavLink>
        ))}
      </nav>
      {isAuth && (
        <Button
          onClick={handleLogout}
          customClassName={styles.logout}
          variant={ButtonVariantEnum.Filled}
          type={ButtonTypeEnum.Button}
        >
          Logout
        </Button>
      )}
      <GlobalSvgSelector iconId="logo" className={styles.logo} />
    </div>
  );
};

export default React.memo(Header);
