// useMutationLogic.ts
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addProject } from "../../services/admin";

export const useMutationLogic = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ['addProject'],
    mutationFn: (data: FormData) => addProject(data),
    onSuccess: (res) => {
      alert(res.data.message);
      navigate('/projects');

      window.location.reload();
    },
    onError: (error) => {
      alert(error.message);
      console.log(error);
    }
  });

  return mutation;
};
