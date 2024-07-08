import React from 'react';

import { useMutation } from "@tanstack/react-query";

import { deleteProject as deleteProjectFn } from "../../services/admin";

export const useDeleteProjectMutation = (initialProject: string) => {
  const [deleteProject, setDeleteProject] = React.useState(initialProject);

  const mutation = useMutation({
    mutationKey: ['deleteProject', deleteProject],
    mutationFn: () => deleteProjectFn(deleteProject),
    onSuccess: (res) => {
      alert(res.data.message);
      window.location.reload();
    },
    onError: (error) => {
      alert(error.message);
      console.log('Admin logout error:', error);
    }
  });

  return { setDeleteProject, mutation };
};
