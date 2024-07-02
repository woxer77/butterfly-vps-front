import React, { MutableRefObject } from 'react';

import { useMutation } from '@tanstack/react-query';

import { uploadImage } from '../../../services/admin';
import { FILE_TYPE_IMAGE, MAX_UPLOAD_IMAGE_SIZE } from "../../../configs/config";

import styles from './ImageUpload.module.scss';

interface ImageUploadProps {
  images: File[] | null;
  setImages: (images: File[] | null) => void;
  multiple: boolean;
  maxCount: number;
  customClassName?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ images, setImages, multiple, maxCount, customClassName }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files ? Array.from(e.target.files) : null;

    if (files) {
      const validFiles = files.filter(file => file.type.match(FILE_TYPE_IMAGE) && file.size <= MAX_UPLOAD_IMAGE_SIZE);
      if (validFiles.length !== files.length) {
        alert('Some files have wrong format or size');
      }
      if (files.length > maxCount) {
        alert('Too many files selected');
        return;
      }

      setImages(validFiles);
    }

    if (e.target) {
      e.target.value = '';
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={customClassName}
    >
      Upload Image(s)
      <input type="file" hidden multiple={multiple} onChange={handleChange} ref={fileInputRef} />
    </button>
  );
};

export default ImageUpload;
