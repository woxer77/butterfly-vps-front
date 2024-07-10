import React from 'react';

import { debounce } from "lodash";

import { useAppDispatch } from "../common/redux";
import { checkAuth } from "../../redux/slices/adminSlice";

export const useCheckAuth = () => {
  const dispatch = useAppDispatch();
  const debouncedCheckAuth = debounce(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, 1000);

  React.useEffect(() => {
    debouncedCheckAuth();
    return () => debouncedCheckAuth.cancel();
  }, [debouncedCheckAuth]);
};
