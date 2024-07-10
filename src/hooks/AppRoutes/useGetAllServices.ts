import React from "react";

import { useQuery } from "@tanstack/react-query";

import { useAppDispatch } from "../common/redux";
import { getAllServices } from "../../services/user";
import { setServices } from "../../redux/slices/userSlice";

export const useGetAllServices = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getAllServices'],
    queryFn: getAllServices,
    refetchOnWindowFocus: false
  });

  React.useEffect(() => {
    if (isLoading || isError) return;
    const servicesRedux = data?.data || [];
    dispatch(setServices(servicesRedux));
  }, [isLoading, isError, data, dispatch]);
};
