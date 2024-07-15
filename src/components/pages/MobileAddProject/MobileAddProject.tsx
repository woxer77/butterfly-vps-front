import React from 'react';

import styles from './MobileAddProject.module.scss';
import Field from "../../UI/Field/Field";
import Select from "../../UI/Select/Select";
import { dateOptions, fromSlug } from "../../../helpers/Form/admin";
import ImageUpload from "../../elements/ImageUpload/ImageUpload";
import Button from "../../UI/Button/Button";
import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import Header from "../../elements/Header/Header";
import { useAppSelector } from "../../../hooks/common/redux";
import { useFormLogic } from "../../../hooks/AddProject/useFormLogic";
import { useMutationLogic } from "../../../hooks/AddProject/useMutationLogic";

const MobileAddProject: React.FC = () => {
  const services = useAppSelector((state) => state.userReducer.services);
  const servicesIdSlug = services.map((service) => service.serviceId);
  const servicesId = services.map((service) => fromSlug(service.serviceId));

  const [projectImage, setProjectImage] = React.useState<File[] | null>(null);
  const [serviceSection, setServiceSection] = React.useState<string>(servicesIdSlug[0]);

  const { register, handleSubmit, errors, onSubmit, validationRulesMinMax } = useFormLogic();
  const mutation = useMutationLogic();

  return (
    <>
      <Header/>
      <div className={styles.mobileAddProject}>
        <form
          onSubmit={handleSubmit((formData) => onSubmit(formData, projectImage, serviceSection, mutation))}
        >
          <div className={styles.content}>
            <div className={styles.textBlock}>
              <Field
                placeholder="Urban Canvas Transformation"
                name="title"
                register={register}
                error={typeof errors?.title?.message === 'string' ? errors?.title?.message : ''}
                options={validationRulesMinMax(2, 32)}
                label="Project Title"
              />
              <Field
                placeholder="This project collection features some of our most creative and impactful building wraps that have become landmarks in their own right. We partnered with various international brands to wrap multiple metropolitan buildings, each project designed to reflect the unique brand identity and message. From eye-catching seasonal promotions to long-term brand installations, these wraps utilize the latest in printing technology and materials to ensure vibrant colors and durability."
                name="description"
                register={register}
                error={typeof errors?.description?.message === 'string' ? errors?.description?.message : ''}
                options={validationRulesMinMax(32, 512)}
                label="Description"
                customClassName={styles.textarea}
                textarea
              />
              <Select
                options={servicesId}
                values={servicesIdSlug}
                label="Service Section"
                onValueChange={(value) => setServiceSection(value)}
              />
              <Field
                placeholder="25/03/2024"
                name="date"
                register={register}
                error={typeof errors?.date?.message === 'string' ? errors?.date?.message : ''}
                options={dateOptions}
                label="Date"
              />
              <Field
                placeholder="Dubai"
                name="location"
                register={register}
                error={typeof errors?.location?.message === 'string' ? errors?.location?.message : ''}
                options={validationRulesMinMax(2, 32)}
                label="Location"
              />
            </div>
            <div className={styles.imageWrapper}>
              <p>{projectImage ? `${projectImage.length} image has been successfully uploaded!` : 'Select only 1 image'}</p>
              <ImageUpload
                images={projectImage}
                setImages={setProjectImage}
                multiple={false}
                maxCount={1}
              />
              <div className={styles.imagePlace}>
                {projectImage && projectImage[0] && (
                  <img src={URL.createObjectURL(projectImage[0])} alt="project-image" className={styles.previewImage}/>
                )}
              </div>
            </div>
          </div>
          <Button
            variant={ButtonVariantEnum.Filled}
            type={ButtonTypeEnum.Submit}
            customClassName={styles.addServiceButton}
          >
            Add Project
          </Button>
        </form>
      </div>
    </>
  );
};

export default MobileAddProject;
