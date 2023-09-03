import { useState } from "react";
import {
  useConfirm,
  useDeleteRequest,
  useMessage,
  useModal,
  usePatchRequest,
  usePostRequest,
} from "@/hooks";
import { CoursesUrl } from "@/utils/urls";
import { SubmitHandler, useForm } from "react-hook-form";
import { CourseCardScheme } from "@/interface/scheme.interface";

export function useCourses() {
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
  const [isEdit, setIsEdit] = useState<CourseCardScheme | null>(null);
  const { postRequest } = usePostRequest<CourseCardScheme>();
  const { patchRequest } = usePatchRequest<CourseCardScheme>();
  const { deleteRequest } = useDeleteRequest<CourseCardScheme>();
  const { message, variant, isActive, setMessage } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
    reset,
    setValue,
  } = useForm<CourseCardScheme>();

  const onSubmit: SubmitHandler<CourseCardScheme> = async (event) => {
    const validatedEvent = {
      ...event,
      price: Number(event.price),
      discount: Number(event.discount),
    };

    if (isValid) {
      const { success } = isEdit
        ? await patchRequest(CoursesUrl, { ...validatedEvent, id: isEdit.id })
        : await postRequest(CoursesUrl, validatedEvent);

      if (success) {
        onModalClose();
        setMessage({
          variant: "success",
          message: `Course ${isEdit ? "Updated" : "Created"} successfully`,
        });
      }
    }
  };

  const onDelete = async (id: number) => {
    const { success } = await deleteRequest(CoursesUrl, id);

    if (success) {
      onConfirmClose();
      setMessage({
        variant: "success",
        message: "Course Deleted successfully",
      });
    }
  };

  const onEdit = (data: CourseCardScheme) => {
    setFields(data);
    setIsEdit(data);
    onModalOpen();
  };

  const setFields = (data: CourseCardScheme) => {
    type keys =
      | "name"
      | "price"
      | "description"
      | "image"
      | "forMonth"
      | "discount"
      | "duration"
      | "link";

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
