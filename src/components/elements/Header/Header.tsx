import React from 'react';

import { NavLink, useParams } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";

import Button from "../../UI/Button/Button";
import GlobalSvgSelector from "../../../assets/images/icons/global/GlobalSvgSelector";

import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import { useAppDispatch, useAppSelector } from "../../../hooks/common/redux";
import { logout } from "../../../services/admin";
import { resetAll as resetAdmin } from "../../../redux/slices/adminSlice";
import { SELECTED_COLOR } from "../../../configs/config";

import styles from './Header.module.scss';
import Burger from "../../UI/Burger/Burger";
import MobileSideMenu from "../MobileSideMenu/MobileSideMenu";

const Header: React.FC = () => {
  const admin = useAppSelector(state => state.adminReducer);
  const services = useAppSelector(state => state.userReducer.services);
  const servicesId = services.map(service => service.serviceId);

  const [isMenuActive, setIsMenuActive] = React.useState(false);

  const { serviceId } = useParams();

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
    {
      name: 'Projects',
      to: '/projects'
    }
  ];

  const deleteCookie = (name: string) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };

  const mutateHook = useMutation({
    mutationKey: ['adminLogout', admin.adminId],
    mutationFn: () => logout(),
    onSuccess: () => {
      localStorage.removeItem('token');
      deleteCookie('refreshToken');
      dispatch(resetAdmin());
    },
    onError: (error) => {
      alert(error.message);
      console.log('Admin logout error:', error);
    }
  });

  const handleLogout = () => {
    mutateHook.mutate();
  };

  const openSideMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <div className={styles.header}>
      <Burger onClick={openSideMenu} customClassName={styles.burger} isOpen={isMenuActive}/>
      <MobileSideMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>
      <nav className={styles.nav}>
        {pages.map((page) => (
          <NavLink
            to={page.to}
            className={({ isActive }) => isActive ? `${styles.navElem} selectedColor` : `${styles.navElem}`}
            style={{ color: page.name === 'Services' && serviceId && servicesId.includes(serviceId) ? SELECTED_COLOR : '' }}
            key={page.to}
          >
            {page.name}
          </NavLink>
        ))}
      </nav>
      {admin.isAuth && (
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
