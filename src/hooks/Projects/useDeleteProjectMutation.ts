import React from 'react';

import { useMutation } from "@tanstack/react-query";

import { deleteProject as deleteProjectFn } from "../../services/admin";
import { handleReload } from "../../helpers/refreshPage";

export const useDeleteProjectMutation = () => {
  const [selectedProject, setSelectedProject] = React.useState<string>('');

  const mutation = useMutation({
    mutationKey: ['deleteProject', selectedProject],
    mutationFn: () => deleteProjectFn(selectedProject),
    onSuccess: (res) => {
      alert(res.data.message);
      handleReload();
    },
    onError: (error) => {
      alert(error.message);
      console.log(error);
    }
  });

  return { setSelectedProject, mutation };
};
