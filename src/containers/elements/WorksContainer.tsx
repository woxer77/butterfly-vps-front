import React from 'react';
import { useQuery } from "@tanstack/react-query";

import Works from "../../components/pages/Projects/Works/Works";
import Loading from "../../components/UI/Loading/Loading";

import { getAllProjects } from "../../services/user";
import { IProject } from "../../ts/interfaces/types";
import { useAppDispatch } from "../../hooks/common/redux";
import { setProjectsId } from "../../redux/slices/userSlice";

interface WorksContainerProps {
  filter: string;
}

const WorksContainer = ({ filter }: WorksContainerProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getAllProjects'],
    queryFn: () => getAllProjects(),
    refetchOnWindowFocus: false,
  });
  const projects = data?.data as IProject[];
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!isLoading && !isError) {
      const projectsId = projects.map((project) => project.title);
      dispatch(setProjectsId(projectsId));
    }
  }, [isLoading, isError, projects]);

  if (isLoading || isError) return <Loading/>;

  return (
    <Works projects={projects} filter={filter}/>
  );
};

export default WorksContainer;
