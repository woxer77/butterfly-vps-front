import { useForm } from "react-hook-form";
import { validationRulesMinMax, toSlug } from "../../helpers/Form/admin";
import { FieldValues } from "react-hook-form";

export const useFormLogic = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

  const onSubmit = (formData: FieldValues, projectImage: File[] | null, serviceSection: string, mutation: any) => {
    if (!projectImage || projectImage.length === 0) {
      alert("Please upload an image");
      return;
    }

    const formDataObj = new FormData(); // for image storing
    formDataObj.append('image', projectImage[0], projectImage[0].name);
    Object.keys(formData).forEach(key => { // add each field of formData to formDataObj
      if (key === 'title') {
        formDataObj.append(key, toSlug(formData[key]));
        return;
      }
      formDataObj.append(key, formData[key]);
    });
    formDataObj.append('serviceSection', serviceSection); // add serviceSection state

    mutation.mutate(formDataObj);
  }

  return { register, handleSubmit, errors, onSubmit, validationRulesMinMax };
};
