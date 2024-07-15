import React from 'react';

import styles from './MobileAddService.module.scss';
import Field from "../../UI/Field/Field";
import { starsCountOptions, validationRulesMinMax } from "../../../helpers/Form/admin";
import ImageUpload from "../../elements/ImageUpload/ImageUpload";
import ServicesSvgSelector from "../../../assets/images/icons/services/ServicesSvgSelector";
import Button from "../../UI/Button/Button";
import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import { useAddServiceForm } from "../../../hooks/AddService/useAddServiceForm";

const MobileAddService: React.FC = () => {
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
    <div className={styles.mobileAddService}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.content}>
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
              customClassName={styles.textarea}
              textarea
            />
            <ul className={styles.benefitList}>
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
                options={validationRulesMinMax(4, 64, false)}
                label="Benefit #2"
              />
              <Field
                placeholder="Versatility and Customization"
                name="benefit_3"
                register={register}
                error={typeof errors?.benefit_3?.message === 'string' ? errors?.benefit_3?.message : ''}
                options={validationRulesMinMax(4, 64, false)}
                label="Benefit #3"
              />
              <Field
                placeholder="Enhanced Brand Visibility"
                name="benefit_4"
                register={register}
                error={typeof errors?.benefit_4?.message === 'string' ? errors?.benefit_4?.message : ''}
                options={validationRulesMinMax(4, 64, false)}
                label="Benefit #4"
              />
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <p>{serviceImage ? `${serviceImage.length} image has been successfully uploaded!` : 'Select only 1 image'}</p>
            <ImageUpload
              images={serviceImage}
              setImages={setServiceImage}
              multiple={false}
              maxCount={1}
            />
            <div className={styles.imagePlace}>
              {serviceImage && serviceImage[0] && (
                <img src={URL.createObjectURL(serviceImage[0])} alt="Service" className={styles.previewImage}/>
              )}
            </div>
          </div>
        </div>
        <div className={styles.steps}>
          <h1 className={styles.title}>
            How does this all work?
          </h1>
          <p className={styles.description}>
            Steps required to achieve your desired result
          </p>
          <div className={styles.stepsList}>
            {stepsFields.map((step) => (
              <div className={styles.step} key={step.title.name}>
                <div className={`iconBorder ${styles.iconBorder}`}>
                  <ServicesSvgSelector iconId="star-step"/>
                </div>
                <Field
                  placeholder={step.title.placeholder}
                  name={step.title.name}
                  register={register}
                  error={typeof step.title.error === 'string' ? step.title.error : ''}
                  options={step.title.options}
                  label={step.title.label}
                  customClassName={styles.adminField}
                />
                <Field
                  placeholder={step.description.placeholder}
                  name={step.description.name}
                  register={register}
                  error={typeof step.description.error === 'string' ? step.description.error : ''}
                  options={step.description.options}
                  label={step.description.label}
                  textarea
                  customClassName={styles.adminField}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.projects}>
          <h1 className={styles.title}>*SERVICE TITLE*</h1>
          <Field
            placeholder="The Butterfly represents the epitome of elegance and sophistication in building wrapping, demanding not only courage but also mastery. Our establishment exudes these virtues effortlessly, boasting a team of artisans, state-of-the-art outdoor printing machinery, and top-tier materials. Irrespective of your building's size or architecture, we stand primed to elevate its branding to unprecedented levels."
            name="projectDescription"
            register={register}
            error={typeof errors?.projectDescription?.message === 'string' ? errors?.projectDescription?.message : ''}
            options={validationRulesMinMax(32, 1024)}
            label="Projects Description"
            textarea
            customClassName={styles.projectDescription}
          />
          <div className={styles.images}>
            <p>{worksImages ? `${worksImages.length} images have been successfully added!` : 'Select up to 4 images'}</p>
            <ImageUpload images={worksImages} setImages={setWorksImages} multiple={true} maxCount={4}/>
            <div className={styles.worksImagesPlace}>
              <div className={styles.workImagePlace}>
                {worksImages && worksImages[0] && (
                  <img src={URL.createObjectURL(worksImages[0])} alt="Service 1"
                       className={styles.workPreviewImage}/>
                )}
              </div>
              <div className={styles.workImagePlace}>
                {worksImages && worksImages[1] && (
                  <img src={URL.createObjectURL(worksImages[1])} alt="Service 2"
                       className={styles.workPreviewImage}/>
                )}
              </div>
              <div className={styles.workImagePlace}>
                {worksImages && worksImages[2] && (
                  <img src={URL.createObjectURL(worksImages[2])} alt="Service 3"
                       className={styles.workPreviewImage}/>
                )}
              </div>
              <div className={styles.workImagePlace}>
                {worksImages && worksImages[3] && (
                  <img src={URL.createObjectURL(worksImages[3])} alt="Service 4"
                       className={styles.workPreviewImage}/>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.feedback}>
          <Field
            placeholder="5"
            name="starsCount"
            register={register}
            error={typeof errors?.starsCount?.message === 'string' ? errors?.starsCount?.message : ''}
            options={starsCountOptions}
            label="Stars Count"
            customClassName={styles.fieldFullWidth}
          />
          <Field
            placeholder="Jennifer Austin"
            name="feedbackAuthor"
            register={register}
            error={typeof errors?.feedbackAuthor?.message === 'string' ? errors?.feedbackAuthor?.message : ''}
            options={validationRulesMinMax(4, 32)}
            label="Feedback Author"
            customClassName={styles.fieldFullWidth}
          />
          <Field
            placeholder="I recently used Butterfly's 'Building Wrapping' service, and I am beyond impressed with the results. From the very beginning, their commitment to quality, innovation, and sustainability was evident. The entire process was seamless, from the initial consultation to the final installation. The team was professional, attentive to detail, and truly dedicated to ensuring the highest level of customer satisfaction."
            name="feedbackText"
            register={register}
            error={typeof errors?.feedbackText?.message === 'string' ? errors?.feedbackText?.message : ''}
            options={validationRulesMinMax(32, 1024)}
            label="Feedback Text"
            textarea
            customClassName={styles.feedbackText}
          />
        </div>
        <Button variant={ButtonVariantEnum.Filled} type={ButtonTypeEnum.Submit}
                customClassName={styles.addServiceButton}>
          Add Service
        </Button>
      </form>
    </div>
  );
};

export default MobileAddService;
