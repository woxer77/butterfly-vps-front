import React from 'react';

import { motion } from 'framer-motion';

import Glow from "../../UI/Glow/Glow";
import Footer from "../../elements/Footer/Footer";
import Hero from "../../elements/Hero/Hero";
import Modal from "../../UI/Modal/Modal";
import Select from "../../UI/Select/Select";
import Button from "../../UI/Button/Button";
import WorksContainer from "../../../containers/elements/WorksContainer";

import { useAppSelector } from "../../../hooks/common/redux";
import { SELECTED_COLOR } from "../../../configs/config";
import { fromSlug } from "../../../helpers/Form/admin";
import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import { useModal } from "../../../hooks/common/useModal";
import { useDeleteProjectMutation } from "../../../hooks/Projects/useDeleteProjectMutation";
import { createVariants } from "../../../helpers/animations";

import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const isAuth = useAppSelector((state) => state.adminReducer.isAuth);
  const webp = useAppSelector((state) => state.userReducer.webp);
  const projectsIdSlug = useAppSelector((state) => state.userReducer.projectsId);
  const projectsId = projectsIdSlug.map((project) => fromSlug(project));
  const services = useAppSelector((state) => state.userReducer.services);
  const servicesId = services.map((service) => service.serviceId);
  const filters = ['All', ...servicesId];

  const { showModal, openModal, closeModal } = useModal(false);

  const { setSelectedProject, mutation } = useDeleteProjectMutation();

  const [currentFilter, setCurrentFilter] = React.useState<string>(filters[0]);

  const bgImage1 = webp ? "/services/webp/bg-rectangles-1.webp" : "/services/png/bg-rectangles-1.png";
  const bgImage2 = webp ? "/services/webp/bg-rectangles-3.webp" : "/services/png/bg-rectangles-3.png";
  const bgImage3 = webp ? "/services/webp/bg-rectangles-4.webp" : "/services/png/bg-rectangles-4.png";

  React.useEffect(() => {
    if (projectsIdSlug.length > 0) {
      setSelectedProject(projectsIdSlug[0]);
    }
  }, [projectsIdSlug]);

  const changeFilter = (filter: string) => {
    setCurrentFilter(filter);
  }

  const handleDeleteProject = () => {
    // eslint-disable-next-line no-restricted-globals
    const userResponse = confirm("Are you sure you want to delete this project?");
    if (userResponse) {
      mutation.mutate();
    }
  }

  const variants = createVariants(0.3, 1);

  return (
    <div className={styles.projects}>
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
      <Hero customClassName={styles.hero}>
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
        <img className="bgObject" id={styles.bgObject1} src={bgImage1} alt="bg-rectangles-1"/>
        <img className="bgObject" id={styles.bgObject2} src={bgImage2} alt="bg-rectangles-3"/>
        <img className="bgObject" id={styles.bgObject3} src={bgImage3} alt="bg-rectangles-4"/>
        <Glow customClassName={styles.glow}/>
        <div className={styles.content}>
          <motion.h1
            className={`title ${styles.title}`}
            variants={variants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Work that we have done
          </motion.h1>
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
                style={{ backgroundColor: currentFilter === filter ? SELECTED_COLOR : '' }}
                onClick={() => changeFilter(filter)}
              >
                {fromSlug(filter)}
              </div>
            ))}
          </motion.div>
        </div>
      </Hero>
      <WorksContainer filter={currentFilter}/>
      <Footer/>
    </div>
  );
};

export default Projects;
