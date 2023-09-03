import { useState } from "react";
import {
  useConfirm,
  useDeleteRequest,
  useMessage,
  useModal,
  usePatchRequest,
  usePostRequest,
} from "@/hooks";
import { StatisticsUrl } from "@/utils/urls";
import { SubmitHandler, useForm } from "react-hook-form";
import { StatisticsCardScheme } from "@/interface/scheme.interface";

export function useStatistics() {
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
  const [isEdit, setIsEdit] = useState<StatisticsCardScheme | null>(null);
  const { postRequest } = usePostRequest<StatisticsCardScheme>();
  const { patchRequest } = usePatchRequest<StatisticsCardScheme>();
  const { deleteRequest } = useDeleteRequest<StatisticsCardScheme>();
  const { message, variant, isActive, setMessage } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
    reset,
    setValue,
  } = useForm<StatisticsCardScheme>();

  const onSubmit: SubmitHandler<StatisticsCardScheme> = async (event) => {
    if (isValid) {
      const { success } = isEdit
        ? await patchRequest(StatisticsUrl, { ...event, id: isEdit.id })
        : await postRequest(StatisticsUrl, event);

      if (success) {
        onModalClose();
        setMessage({
          variant: "success",
          message: `Statistic ${isEdit ? "Updated" : "Created"} successfully`,
        });
      }
    }
  };

  const onDelete = async (id: number) => {
    const { success } = await deleteRequest(StatisticsUrl, id);

    if (success) {
      onConfirmClose();
      setMessage({
        variant: "success",
        message: "Statistic Deleted successfully",
      });
    }
  };

  const onEdit = (data: StatisticsCardScheme) => {
    setFields(data);
    setIsEdit(data);
    onModalOpen();
  };

  const setFields = (data: StatisticsCardScheme) => {
    type keys = "title" | "color" | "description";

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
