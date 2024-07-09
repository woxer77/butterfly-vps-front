import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { deleteService } from "../../services/admin";
import { handleReload } from "../../helpers/refreshPage";

export const useDeleteService = (serviceId: string | undefined) => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ['deleteService', serviceId],
    mutationFn: () => deleteService(serviceId),
    onSuccess: (res) => {
      const { message, redirectToService } = res.data;
      alert(message);

      if (redirectToService){
        navigate(`/services/${redirectToService}`);
      } else {
        navigate('/home');
      }

      handleReload();
    },
    onError: (error) => {
      alert(error.message);
      console.log(error);
    }
  });

  const handleDeleteService = () => {
    // eslint-disable-next-line no-restricted-globals
    const userResponse = confirm("Are you sure you want to delete this service?");
    if (userResponse) {
      mutation.mutate();
    }
  }

  return { handleDeleteService };
};
