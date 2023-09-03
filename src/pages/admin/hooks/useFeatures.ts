import { useState } from "react";
import {
  useConfirm,
  useDeleteRequest,
  useMessage,
  useModal,
  usePatchRequest,
  usePostRequest,
} from "@/hooks";
import { FeaturesUrl } from "@/utils/urls";
import { SubmitHandler, useForm } from "react-hook-form";
import { FeatureCardScheme } from "@/interface/scheme.interface";

export function useFeatures() {
  const {
    open: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalCloseFn,
  } = useModal();
  const {
    open: isConfirmOpen,
    onOpen: onConfirmOpenFn,
    onClose: onConfirmCloseFn,
  } = useConfirm();
  const [isDelete, setIsDelete] = useState<number | null>(null);
  const [isEdit, setIsEdit] = useState<FeatureCardScheme | null>(null);
  const { postRequest } = usePostRequest<FeatureCardScheme>();
  const { patchRequest } = usePatchRequest<FeatureCardScheme>();
  const { deleteRequest } = useDeleteRequest<FeatureCardScheme>();
  const { message, variant, isActive, setMessage } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
    reset,
    setValue,
  } = useForm<FeatureCardScheme>();

  const onSubmit: SubmitHandler<FeatureCardScheme> = async (event) => {
    if (isValid) {
      const { success } = isEdit
        ? await patchRequest(FeaturesUrl, { ...event, id: isEdit.id })
        : await postRequest(FeaturesUrl, event);

      if (success) {
        onModalClose();
        setMessage({
          variant: "success",
          message: `Feature ${isEdit ? "Updated" : "Created"} successfully`,
        });
      }
    }
  };

  const onDelete = async (id: number) => {
    const { success } = await deleteRequest(FeaturesUrl, id);

    if (success) {
      onConfirmClose();
      setMessage({
        variant: "success",
        message: "Feature Deleted successfully",
      });
    }
  };

  const onEdit = (data: FeatureCardScheme) => {
    setFields(data);
    setIsEdit(data);
    onModalOpen();
  };

  const setFields = (data: FeatureCardScheme) => {
    type keys = "icon" | "slug" | "title" | "description" | "image" | "color";

    for (let key in data) {
      setValue(key as keys, data[key as keys]);
    }
  };

  const onModalClose = () => {
    reset();
    setIsEdit(null);
    onModalCloseFn();
  };

  const onConfirmOpen = (id: number) => {
    setIsDelete(id);
    onConfirmOpenFn();
  };

  const onConfirmClose = () => {
    setIsDelete(null);
    onConfirmCloseFn();
  };

  const onConfirm = () => {
    if (isDelete) {
      onDelete(isDelete);
    }
  };

  return {
    modal: {
      isModalOpen,
      onModalOpen,
      onModalClose,
    },
    confirm: {
      isConfirmOpen,
      onConfirmOpen,
      onConfirmClose,
      onConfirm,
    },
    isDelete,
    setIsDelete,
    isEdit,
    setIsEdit,
    message: { message, variant, isActive, setMessage },
    form: {
      register,
      handleSubmit,
      onSubmit,
      onEdit,
      onDelete,
      errors,
      isLoading,
      isValid,
    },
  };
}
