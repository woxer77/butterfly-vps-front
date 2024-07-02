import React from 'react';

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Loading from "../../components/UI/Loading/Loading";
import Services from "../../components/pages/Services/Services";

import { getServiceById } from "../../services/user";
import { IService } from "../../ts/interfaces/types";
import { useAppSelector } from "../../hooks/common/redux";

const ServicesContainer = () => {
  const services = useAppSelector(state => state.userReducer.services);
  const servicesId = services.map(service => service.serviceId);
  let { serviceId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['getServiceById', serviceId],
    queryFn: () => getServiceById(serviceId),
    refetchOnWindowFocus: false,
  });
  const service = data?.data as IService;

  if (isLoading || isError) return <Loading/>;

  return (
    <Services service={service} servicesId={servicesId} serviceId={serviceId}/>
  );
};

export default ServicesContainer;
