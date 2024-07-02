import React from 'react';

import { FieldValues, useForm } from "react-hook-form";

import ServicesSvgSelector from "../../../assets/images/icons/services/ServicesSvgSelector";
import Hero from "../../elements/Hero/Hero";
import Field from "../../UI/Field/Field";
import Glow from "../../UI/Glow/Glow";

import { useAppSelector } from "../../../hooks/common/redux";
import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import {
  benefitOptions,
  feedbackAuthorOptions,
  feedbackTextOptions,
  miniDescriptionOptions,
  projectDescriptionOptions,
  serviceTitleOptions,
  starsCountOptions,
  stepDescriptionOptions,
  stepTitleOptions, toSlug
} from "../../../helpers/Form/admin";

import styles from '../Services/Services.module.scss';
import adminStyles from './AddService.module.scss';
import stepsStyles from '../Services/Steps/Steps.module.scss';
import projectsStyles from '../Services/Projects/Projects.module.scss';
import feedbackStyles from '../Services/Feedback/Feedback.module.scss';
import Button from "../../UI/Button/Button";
import admin from "../Admin/Admin";
import ImageUpload from "../../elements/ImageUpload/ImageUpload";
import { useMutation } from "@tanstack/react-query";
import { addService, login } from "../../../services/admin";
import { setAdminId, setAuth } from "../../../redux/slices/adminSlice";
import works from "../Projects/Works/Works";
import { useNavigate } from "react-router-dom";

interface IStep {
  title: string,
  description: string
}

const AddService: React.FC = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);
  const services = useAppSelector(state => state.userReducer.services);
  const servicesId = services.map(service => service.serviceId);
  const navigate = useNavigate();

  const bgImage = webp ? '/services/webp/bg-rectangles-2.webp' : '/services/png/bg-rectangles-2.png';

  const bgImageProjects1 = webp ? '/services/webp/bg-rectangles-3.webp' : '/services/png/bg-rectangles-3.png';
  const bgImageProjects2 = webp ? '/services/webp/bg-rectangles-4.webp' : '/services/png/bg-rectangles-4.png';

  const { register, handleSubmit, formState: { errors }, getValues } = useForm({ mode: "onChange" });

  const [serviceImage, setServiceImage] = React.useState<File[] | null>(null);
  const [worksImages, setWorksImages] = React.useState<File[] | null>(null);

  const stepsFields = [
    {
      title: {
        placeholder: 'Consultation and Design',
        name: 'stepTitle_1',
        error: errors?.stepTitle_1?.message,
        options: stepTitleOptions,
        label: 'Step Title #1'
      },
      description: {
        placeholder: 'Our process begins with a thorough consultation to understand your branding needs and objectives.',
        name: 'stepDescription_1',
        error: errors?.stepDescription_1?.message,
        options: stepDescriptionOptions,
        label: 'Step Description #1'
      }
    },
    {
      title: {
        placeholder: 'Printing and Material Selection',
        name: 'stepTitle_2',
        error: errors?.stepTitle_2?.message,
        options: stepTitleOptions,
        label: 'Step Title #2'
      },
      description: {
        placeholder: 'Once the design is finalized, we proceed with the printing phase.',
        name: 'stepDescription_2',
        error: errors?.stepDescription_2?.message,
        options: stepDescriptionOptions,
        label: 'Step Description #2'
      }
    },
    {
      title: {
        placeholder: 'Installation and Maintenance',
        name: 'stepTitle_3',
        error: errors?.stepTitle_3?.message,
        options: stepTitleOptions,
        label: 'Step Title #3'
      },
      description: {
        placeholder: 'The final step is the professional installation of the building wrap.',
        name: 'stepDescription_3',
        error: errors?.stepDescription_3?.message,
        options: stepDescriptionOptions,
        label: 'Step Description #3'
      }
    },
  ]

  const mutation = useMutation({
    mutationKey: ['addService'],
    mutationFn: (data: FormData) => addService(data),
    onSuccess: () => {
      alert('Service has been successfully added!');
      const newServiceId = getValues('serviceTitle');
      console.log('newServiceId', newServiceId);

      if (newServiceId){
        navigate(`/services/${toSlug(newServiceId)}`);
      } else {
        navigate('/home');
      }

      window.location.reload();
    },
    onError: (error) => {
      alert(error.message);
      console.log(error);
    }
  });

  const onSubmit = (formData: FieldValues) => {
    if (!serviceImage || (!worksImages || worksImages.length === 0)) {
      alert('Please select at least 1 image in each section!');
      return;
    }

    const formDataObj = new FormData();

    if (serviceImage) {
      formDataObj.append('service_image', serviceImage[0], serviceImage[0].name);
    }

    if (worksImages) {
      worksImages.forEach((image) => {
        formDataObj.append('works_images', image, image.name);
      });
    }

    Object.keys(formData).forEach(key => {
      if (key === 'serviceTitle') {
        formDataObj.append(key, toSlug(formData[key]));
        return;
      }
      formDataObj.append(key, formData[key]);
    });

    mutation.mutate(formDataObj);
  };

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
                options={serviceTitleOptions}
                label="Service Title"
              />
              <Field
                placeholder="Is an innovative form of large-scale advertising that involves covering the exterior of a building with a graphic wrap."
                name="miniDescription"
                register={register}
                error={typeof errors?.miniDescription?.message === 'string' ? errors?.miniDescription?.message : ''}
                options={miniDescriptionOptions}
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
                  options={benefitOptions}
                  label="Benefit #1"
                />
                <Field
                  placeholder="Eco-Friendly Options"
                  name="benefit_2"
                  register={register}
                  error={typeof errors?.benefit_2?.message === 'string' ? errors?.benefit_2?.message : ''}
                  options={benefitOptions}
                  label="Benefit #2"
                />
                <Field
                  placeholder="Versatility and Customization"
                  name="benefit_3"
                  register={register}
                  error={typeof errors?.benefit_3?.message === 'string' ? errors?.benefit_3?.message : ''}
                  options={benefitOptions}
                  label="Benefit #3"
                />
                <Field
                  placeholder="Enhanced Brand Visibility"
                  name="benefit_4"
                  register={register}
                  error={typeof errors?.benefit_4?.message === 'string' ? errors?.benefit_4?.message : ''}
                  options={benefitOptions}
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
                  <ServicesSvgSelector iconId="star-2"/>
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
            options={projectDescriptionOptions}
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
            options={feedbackAuthorOptions}
            label="Feedback Author"
            customClassName={adminStyles.fieldFullWidth}
          />
          <Field
            placeholder="I recently used Butterfly's 'Building Wrapping' service, and I am beyond impressed with the results. From the very beginning, their commitment to quality, innovation, and sustainability was evident. The entire process was seamless, from the initial consultation to the final installation. The team was professional, attentive to detail, and truly dedicated to ensuring the highest level of customer satisfaction."
            name="feedbackText"
            register={register}
            error={typeof errors?.feedbackText?.message === 'string' ? errors?.feedbackText?.message : ''}
            options={feedbackTextOptions}
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
