import React from "react";

import { useAppDispatch } from "../common/redux";
import useWebpSupport from "../common/useWebpSupport";
import { setWebp } from "../../redux/slices/userSlice";

export const useWebpSupportAndSet = () => {
  const dispatch = useAppDispatch();
  const isWebpSupported = useWebpSupport();

  React.useEffect(() => {
    dispatch(setWebp(isWebpSupported));
  }, [isWebpSupported, dispatch]);
};
