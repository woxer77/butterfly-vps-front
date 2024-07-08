import React from "react";

import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { validationRulesMinMax, toSlug } from "../../helpers/Form/admin";
import { addService } from "../../services/admin";
import { handleReload } from "../../helpers/refreshPage";

export const useAddServiceForm = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm({ mode: "onChange" });

  const [serviceImage, setServiceImage] = React.useState<File[] | null>(null);
  const [worksImages, setWorksImages] = React.useState<File[] | null>(null);

  const navigate = useNavigate();

  const stepsFields = [
    {
      title: {
        placeholder: 'Consultation and Design',
        name: 'stepTitle_1',
        error: errors?.stepTitle_1?.message,
        options: validationRulesMinMax(4, 64),
        label: 'Step Title #1'
      },
      description: {
        placeholder: 'Our process begins with a thorough consultation to understand your branding needs and objectives.',
        name: 'stepDescription_1',
        error: errors?.stepDescription_1?.message,
        options: validationRulesMinMax(16, 256),
        label: 'Step Description #1'
      }
    },
    {
      title: {
        placeholder: 'Printing and Material Selection',
        name: 'stepTitle_2',
        error: errors?.stepTitle_2?.message,
        options: validationRulesMinMax(4, 64),
        label: 'Step Title #2'
      },
      description: {
        placeholder: 'Once the design is finalized, we proceed with the printing phase.',
        name: 'stepDescription_2',
        error: errors?.stepDescription_2?.message,
        options: validationRulesMinMax(16, 256),
        label: 'Step Description #2'
      }
    },
    {
      title: {
        placeholder: 'Installation and Maintenance',
        name: 'stepTitle_3',
        error: errors?.stepTitle_3?.message,
        options: validationRulesMinMax(4, 64),
        label: 'Step Title #3'
      },
      description: {
        placeholder: 'The final step is the professional installation of the building wrap.',
        name: 'stepDescription_3',
        error: errors?.stepDescription_3?.message,
        options: validationRulesMinMax(16, 256),
        label: 'Step Description #3'
      }
    },
  ];

  const mutation = useMutation({
    mutationKey: ['addService'],
    mutationFn: (data: FormData) => addService(data),
    onSuccess: (res) => {
      alert(res.data.message);
      const newServiceId = getValues('serviceTitle');

      if (newServiceId){
        navigate(`/services/${toSlug(newServiceId)}`);
      } else {
        navigate('/home');
      }

      handleReload();
    },
    onError: (error) => {
      alert(error.message);
      console.log(error);
    }
  });

  const onSubmit = React.useCallback((formData: FieldValues) => {
    if ((!serviceImage || serviceImage.length === 0) || (!worksImages || worksImages.length === 0)) {
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
  }, [serviceImage, worksImages, mutation, getValues]);

  return { register, handleSubmit, errors, stepsFields, onSubmit, serviceImage, setServiceImage, worksImages, setWorksImages };
};
