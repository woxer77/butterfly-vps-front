import { useNavigate } from "react-router-dom";

export const useServiceNavigation = (servicesId: string[], serviceId: string | undefined) => {
  const navigate = useNavigate();

  const currentIndex = servicesId.findIndex((item) => item === serviceId);

  const nextPage = () => {
    if (servicesId.length <= 1) return;

    if (currentIndex === servicesId.length - 1) {
      navigate(`/services/${servicesId[0]}`);
    } else {
      navigate(`/services/${servicesId[currentIndex + 1]}`);
    }
  };

  const prevPage = () => {
    if (servicesId.length <= 1) return;

    if (currentIndex === 0) {
      navigate(`/services/${servicesId[servicesId.length - 1]}`);
    } else {
      navigate(`/services/${servicesId[currentIndex - 1]}`);
    }
  }

  return { nextPage, prevPage };
};
