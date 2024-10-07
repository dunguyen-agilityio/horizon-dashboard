'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Avatar } from '@nextui-org/avatar';
import { useForm, Controller } from 'react-hook-form';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from '@nextui-org/react';

// actions
import { updateUser } from '@/actions/auth';

// servies
import { uploadImageToStrapi } from '@/services/uploadImage';

// type
import { ImageResponse } from '@/types/image';

interface IEditInfoUser {
  id: string;
  isOpen: boolean;
  fullName: string;
  phoneNumber: string;
  avatar: string;
  onOpenChange: () => void;
  onClose: () => void;
}

interface IEditUserInfo {
  fullName: string;
  phoneNumber: string;
  avatar: string;
}

const EditUserInfo = ({
  id,
  isOpen,
  fullName,
  phoneNumber,
  avatar,
  onOpenChange,
  onClose,
}: IEditInfoUser) => {
  const initialValue = {
    fullName: fullName,
    phoneNumber: phoneNumber,
    avatar: avatar,
  };
  const { control, handleSubmit, formState } = useForm({
    mode: 'onChange',
    defaultValues: initialValue,
  });

  const [previewImage, setPreviewImage] = useState<File | null>(null);

  const onSubmit = async (editInfo: IEditUserInfo) => {
    let upLoadImage: ImageResponse[] = [];
    if (previewImage) {
      upLoadImage = await uploadImageToStrapi(previewImage);
    }

    const payload: { username: string; avatar?: string; phoneNumber: string } =
      {
        username: editInfo.fullName,
        phoneNumber: editInfo.phoneNumber,
      };

    if (upLoadImage.length > 0 && upLoadImage[0].id) {
      payload.avatar = upLoadImage[0].id;
    }

    await updateUser(id, payload);

    onClose();
  };

  const handleOnClose = () => {
    onClose();
  };

  const handleAvatarChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void,
  ) => {
    if (e.target.files && e.target.files[0]) {
      setPreviewImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Modal
      size="2xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={handleOnClose}
      placement="center"
      classNames={{
        base: 'bg-white dark:bg-indigo pt-4 m-2',
        closeButton: 'm-3 p-3',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>Edit User Information</ModalHeader>
          <ModalBody className="ml-5 mr-5 flex gap-5 p-1 md:p-4">
            <div className="flex flex-col items-start md:items-center md:flex-row ">
              <label htmlFor="avatar" className="font-bold w-1/3 mb-2 md:mb-0">
                Avatar
              </label>
              <Controller
                name="avatar"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <div className="flex items-center justify-between gap2 md:gap-5 w-full md:w-2/3">
                    <Avatar
                      src={value}
                      ImgComponent={Image}
                      alt="avatar-user"
                      imgProps={{ width: 87, height: 87 }}
                      className="w-[87px] h-[87px] border-4 dark:border-indigo border-white"
                    />
                    <Input
                      id="avatar"
                      type="file"
                      accept="image/*"
                      className="bg-transparent w-2/3"
                      onChange={(e) => handleAvatarChange(e, onChange)}
                    />
                  </div>
                )}
              />
            </div>

            <div className="flex flex-col items-start md:items-center md:flex-row">
              <label
                htmlFor="fullName"
                className="font-bold w-1/3 mb-2 md:mb-0"
              >
                Full Name:
              </label>
              <Controller
                name="fullName"
                control={control}
                rules={{
                  required: 'This field is required',
                }}
                render={({ field, fieldState: { error, invalid } }) => (
                  <Input
                    isRequired
                    id="fullName"
                    label="Full name"
                    type="text"
                    className="bg-transparent w-full md:w-2/3"
                    isInvalid={invalid}
                    classNames={{
                      input:
                        'text-lg font-[700] group-data-[has-value=true]:text-primary group-data-[has-value=true]:dark:text-white group-data-[has-value=true]:shadow-none ',
                    }}
                    as="h2"
                    errorMessage={error?.message}
                    {...field}
                  />
                )}
              />
            </div>

            <div className="flex flex-col items-start md:items-center md:flex-row">
              <label
                htmlFor="phoneNumber"
                className="font-bold w-full md:w-1/3 mb-2 md:mb-0"
              >
                Phone Number:
              </label>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Phone number must contain only numbers',
                  },
                }}
                render={({ field, fieldState: { error, invalid } }) => (
                  <Input
                    id="phoneNumber"
                    type="text"
                    label="Phone number"
                    className="bg-transparent w-full md:w-2/3"
                    isInvalid={invalid}
                    classNames={{
                      input:
                        'text-lg font-[700] group-data-[has-value=true]:text-primary group-data-[has-value=true]:dark:text-white group-data-[has-value=true]:shadow-none ',
                    }}
                    errorMessage={error?.message}
                    {...field}
                  />
                )}
              />
            </div>

            <ModalFooter className="pl-0 pr-0">
              <Button
                type="submit"
                isDisabled={!formState.isDirty || formState.isSubmitting}
                className="bg-blue-450 text-white dark:bg-purple-750"
              >
                Edit
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default EditUserInfo;
