import React from 'react';

import ServicesSvgSelector from "../../../assets/images/icons/services/ServicesSvgSelector";
import Hero from "../../elements/Hero/Hero";
import Field from "../../UI/Field/Field";
import Glow from "../../UI/Glow/Glow";
import Button from "../../UI/Button/Button";
import ImageUpload from "../../elements/ImageUpload/ImageUpload";

import { useAppSelector } from "../../../hooks/common/redux";
import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import { starsCountOptions, validationRulesMinMax } from "../../../helpers/Form/admin";
import { useAddServiceForm } from "../../../hooks/AddService/useAddServiceForm";

import styles from '../Services/Services.module.scss';
import adminStyles from './AddService.module.scss';
import stepsStyles from '../Services/Steps/Steps.module.scss';
import projectsStyles from '../Services/Projects/Projects.module.scss';
import feedbackStyles from '../Services/Feedback/Feedback.module.scss';

const AddService: React.FC = () => {
  const webp = useAppSelector(state => state.userReducer.webp);

  const bgImage = webp ? '/services/webp/bg-rectangles-2.webp' : '/services/png/bg-rectangles-2.png';

  const bgImageProjects1 = webp ? '/services/webp/bg-rectangles-3.webp' : '/services/png/bg-rectangles-3.png';
  const bgImageProjects2 = webp ? '/services/webp/bg-rectangles-4.webp' : '/services/png/bg-rectangles-4.png';

  const {
    register,
    handleSubmit,
    errors,
    stepsFields,
    onSubmit,
    serviceImage,
    setServiceImage,
    worksImages,
    setWorksImages
  } = useAddServiceForm();

  return (
    <div className={styles.services}>
      <form onSubmit={handleSubmit(onSubmit)} className={adminStyles.form}>
        <Hero>
          <div className={styles.content}>
            <img className="bgObject" id={styles.bgObject} src={bgImage} alt="services-bg-image"/>
            <Glow customClassName={styles.glow}/>
            <div className={styles.textBlock}>
              <Field
                placeholder="Building Wrapping"
                name="serviceTitle"
                register={register}
                error={typeof errors?.serviceTitle?.message === 'string' ? errors?.serviceTitle?.message : ''}
                options={validationRulesMinMax(2, 32)}
                label="Service Title"
              />
              <Field
                placeholder="Is an innovative form of large-scale advertising that involves covering the exterior of a building with a graphic wrap."
                name="miniDescription"
                register={register}
                error={typeof errors?.miniDescription?.message === 'string' ? errors?.miniDescription?.message : ''}
                options={validationRulesMinMax(16, 384)}
                label="Mini description"
                customClassName={adminStyles.textarea}
                textarea
              />
              <ul className={styles.list}>
                <Field
                  placeholder="Protective Layer"
                  name="benefit_1"
                  register={register}
                  error={typeof errors?.benefit_1?.message === 'string' ? errors?.benefit_1?.message : ''}
                  options={validationRulesMinMax(4, 64)}
                  label="Benefit #1"
                />
                <Field
                  placeholder="Eco-Friendly Options"
                  name="benefit_2"
                  register={register}
                  error={typeof errors?.benefit_2?.message === 'string' ? errors?.benefit_2?.message : ''}
                  options={validationRulesMinMax(4, 64)}
                  label="Benefit #2"
                />
                <Field
                  placeholder="Versatility and Customization"
                  name="benefit_3"
                  register={register}
                  error={typeof errors?.benefit_3?.message === 'string' ? errors?.benefit_3?.message : ''}
                  options={validationRulesMinMax(4, 64)}
                  label="Benefit #3"
                />
                <Field
                  placeholder="Enhanced Brand Visibility"
                  name="benefit_4"
                  register={register}
                  error={typeof errors?.benefit_4?.message === 'string' ? errors?.benefit_4?.message : ''}
                  options={validationRulesMinMax(4, 64)}
                  label="Benefit #4"
                />
              </ul>
            </div>
            <div className={`${styles.imageWrapper} ${adminStyles.selectImage}`}>
              <p>{serviceImage ? `${serviceImage.length} image has been successfully uploaded!` : 'Select only 1 image'}</p>
              <ImageUpload
                images={serviceImage}
                setImages={setServiceImage}
                multiple={false}
                maxCount={1}
              />
              <div className={adminStyles.imagePlace}>
                {serviceImage && serviceImage[0] && (
                  <img src={URL.createObjectURL(serviceImage[0])} alt="Service" className={adminStyles.previewImage}/>
                )}
              </div>
            </div>
          </div>
        </Hero>
        <div className={stepsStyles.steps}>
          <h1 className={`title ${stepsStyles.title}`}>
            How does this all work?
          </h1>
          <p className="text">
            Steps required to achieve your desired result
          </p>
          <div className={stepsStyles.stepsList}>
            {stepsFields.map((step) => (
              <div className={`${stepsStyles.step} ${stepsStyles.stepAdmin}`} key={step.title.name}>
                <div className={`iconBorder ${stepsStyles.iconBorder}`}>
                  <ServicesSvgSelector iconId="star-step"/>
                </div>
                <Field
                  placeholder={step.title.placeholder}
                  name={step.title.name}
                  register={register}
                  error={typeof step.title.error === 'string' ? step.title.error : ''}
                  options={step.title.options}
                  label={step.title.label}
                  customClassName={adminStyles.adminField}
                />
                <Field
                  placeholder={step.description.placeholder}
                  name={step.description.name}
                  register={register}
                  error={typeof step.description.error === 'string' ? step.description.error : ''}
                  options={step.description.options}
                  label={step.description.label}
                  textarea
                  customClassName={adminStyles.adminField}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={projectsStyles.projects}>
          <Glow customClassName={projectsStyles.glow}/>
          <img className="bgObject" id={projectsStyles.bgObject1} src={bgImageProjects1}
               alt="services-project-bg-1"
               loading="lazy"/>
          <img className="bgObject" id={projectsStyles.bgObject2} src={bgImageProjects2}
               alt="services-project-bg-2"
               loading="lazy"/>
          <h1 className={`title ${projectsStyles.title}`}>*SERVICE TITLE*</h1>
          <Field
            placeholder="The Butterfly represents the epitome of elegance and sophistication in building wrapping, demanding not only courage but also mastery. Our establishment exudes these virtues effortlessly, boasting a team of artisans, state-of-the-art outdoor printing machinery, and top-tier materials. Irrespective of your building's size or architecture, we stand primed to elevate its branding to unprecedented levels."
            name="projectDescription"
            register={register}
            error={typeof errors?.projectDescription?.message === 'string' ? errors?.projectDescription?.message : ''}
            options={validationRulesMinMax(32, 1024)}
            label="Projects Description"
            textarea
            customClassName={projectsStyles.projectDescription}
          />
          <div className={`${projectsStyles.images} ${adminStyles.worksImages}`}>
            <p>{worksImages ? `${worksImages.length} images have been successfully added!` : 'Select up to 4 images'}</p>
            <ImageUpload images={worksImages} setImages={setWorksImages} multiple={true} maxCount={4}/>
            <div className={adminStyles.worksImagesPlace}>
              <div className={adminStyles.workImagePlace}>
                {worksImages && worksImages[0] && (
                  <img src={URL.createObjectURL(worksImages[0])} alt="Service 1" className={adminStyles.workPreviewImage}/>
                )}
              </div>
              <div className={adminStyles.workImagePlace}>
                {worksImages && worksImages[1] && (
                <img src={URL.createObjectURL(worksImages[1])} alt="Service 2" className={adminStyles.workPreviewImage}/>
              )}
              </div>
              <div className={adminStyles.workImagePlace}>
                {worksImages && worksImages[2] && (
                <img src={URL.createObjectURL(worksImages[2])} alt="Service 3" className={adminStyles.workPreviewImage}/>
              )}
              </div>
              <div className={adminStyles.workImagePlace}>
                {worksImages && worksImages[3] && (
                <img src={URL.createObjectURL(worksImages[3])} alt="Service 4" className={adminStyles.workPreviewImage}/>
              )}
              </div>
            </div>
          </div>
        </div>
        <div className={`${feedbackStyles.feedback} ${adminStyles.feedback}`}>
          <img className="bgObject" src={bgImage} alt="feedback-bg-image" loading="lazy"/>
          <Field
            placeholder="5"
            name="starsCount"
            register={register}
            error={typeof errors?.starsCount?.message === 'string' ? errors?.starsCount?.message : ''}
            options={starsCountOptions}
            label="Stars Count"
            customClassName={adminStyles.fieldFullWidth}
          />
          <Field
            placeholder="Jennifer Austin"
            name="feedbackAuthor"
            register={register}
            error={typeof errors?.feedbackAuthor?.message === 'string' ? errors?.feedbackAuthor?.message : ''}
            options={validationRulesMinMax(4, 32)}
            label="Feedback Author"
            customClassName={adminStyles.fieldFullWidth}
          />
          <Field
            placeholder="I recently used Butterfly's 'Building Wrapping' service, and I am beyond impressed with the results. From the very beginning, their commitment to quality, innovation, and sustainability was evident. The entire process was seamless, from the initial consultation to the final installation. The team was professional, attentive to detail, and truly dedicated to ensuring the highest level of customer satisfaction."
            name="feedbackText"
            register={register}
            error={typeof errors?.feedbackText?.message === 'string' ? errors?.feedbackText?.message : ''}
            options={validationRulesMinMax(32, 1024)}
            label="Feedback Text"
            textarea
            customClassName={adminStyles.feedbackText}
          />
        </div>
        <Button variant={ButtonVariantEnum.Filled} type={ButtonTypeEnum.Submit} customClassName={adminStyles.addServiceButton}>
          Add Service
        </Button>
      </form>
    </div>
  );
};

export default AddService;
