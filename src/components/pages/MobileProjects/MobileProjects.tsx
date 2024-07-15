import React from 'react';

import styles from './MobileProjects.module.scss';
import { useAppSelector } from "../../../hooks/common/redux";
import { fromSlug } from "../../../helpers/Form/admin";
import { SELECTED_COLOR } from "../../../configs/config";
import { motion } from "framer-motion";
import { createVariants } from "../../../helpers/animations";
import WorksContainer from "../../../containers/elements/WorksContainer";
import Footer from "../../elements/Footer/Footer";
import Header from "../../elements/Header/Header";
import Button from "../../UI/Button/Button";
import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import { useModal } from "../../../hooks/common/useModal";
import Select from "../../UI/Select/Select";
import Modal from "../../UI/Modal/Modal";
import { useDeleteProjectMutation } from "../../../hooks/Projects/useDeleteProjectMutation";

const MobileProjects: React.FC = () => {
  const isAuth = useAppSelector((state) => state.adminReducer.isAuth);
  const projectsIdSlug = useAppSelector((state) => state.userReducer.projectsId);
  const projectsId = projectsIdSlug.map((project) => fromSlug(project));
  const services = useAppSelector((state) => state.userReducer.services);
  const servicesId = services.map((service) => service.serviceId);
  const filters = ['All', ...servicesId];

  const variants = createVariants(0.3, 1);

  const [currentFilter, setCurrentFilter] = React.useState<string>(filters[0]);

  const { showModal, openModal, closeModal } = useModal(false);
  const { setSelectedProject, mutation } = useDeleteProjectMutation();

  const changeFilter = (filter: string) => {
    setCurrentFilter(filter);
  }

  const handleDeleteProject = () => {
    // eslint-disable-next-line no-restricted-globals
    const userResponse = confirm("Are you sure you want to delete this project?");
    if (userResponse) {
      mutation.mutate(projectsIdSlug[0]);
    }
  }

  return (
    <>
      <Header/>
      <Modal onClose={closeModal} show={showModal}>
        <Select
          options={projectsId}
          values={projectsIdSlug}
          label="Select the name of the project to be deleted"
          onValueChange={(value) => setSelectedProject(value)}
        />
        <Button variant={ButtonVariantEnum.Filled} type={ButtonTypeEnum.Submit} onClick={handleDeleteProject}>
          Delete project
        </Button>
      </Modal>
      <div className={styles.mobileProjects}>
        {isAuth &&
          <div className={styles.adminButtonContainer}>
            <Button
              variant={ButtonVariantEnum.Filled}
              type={ButtonTypeEnum.Button}
              customClassName={styles.adminButton}
              to="/add-project"
            >
              Add new project
            </Button>
            <Button
              variant={ButtonVariantEnum.Outlined}
              type={ButtonTypeEnum.Button}
              customClassName={styles.adminButton}
              onClick={projectsIdSlug.length > 0 ? openModal : () => {}}
            >
              Delete Project
            </Button>
          </div>
        }
        <h1 className={styles.title}>
          Work that we have done
        </h1>
        <motion.div
          className={styles.filters}
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {filters.map((filter) => (
            <div
              className={styles.filter}
              key={filter}
              style={{backgroundColor: currentFilter === filter ? SELECTED_COLOR : ''}}
              onClick={() => changeFilter(filter)}
            >
              {fromSlug(filter)}
            </div>
          ))}
        </motion.div>
      </div>
      <WorksContainer filter={currentFilter}/>
      <Footer/>
    </>
  );
};

export default MobileProjects;
