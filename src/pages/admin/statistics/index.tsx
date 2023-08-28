import { SubmitHandler, useForm } from "react-hook-form";
import { Layout, Section, SectionTitle } from "@/layouts";
import { Button, Form, Input, Modal, Textarea } from "@/components";
import { StatisticsCardScheme } from "@/interface/scheme.interface";
import {
  colorValidation,
  descriptionValidation,
  titleValidation,
} from "@/utils/validations";
import { useModal, usePostRequest } from "@/hooks";
import { StatisticsUrl } from "@/utils/urls";

export default function StatisticsAdmin() {
  const { open, onOpen, onClose } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
  } = useForm<StatisticsCardScheme>();
  const { postRequest } = usePostRequest<StatisticsCardScheme>();

  const onSubmit: SubmitHandler<StatisticsCardScheme> = async (event) => {
    if (isValid) {
      const { success } = await postRequest(StatisticsUrl, event);

      if (success) {
        onClose();
      }
    }
  };

  return (
    <Layout>
      <Section className="2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3">
        <Button onClick={onOpen}>Add new Statistics</Button>
        <Modal open={open} onClose={onClose}>
          <SectionTitle subTitle="statistics" title="Add New Statistics" />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-start justify-between flex-wrap gap-10">
              <Input
                placeholder="title"
                register={register("title", { ...titleValidation })}
              />
              <Input
                placeholder="color"
                register={register("color", { ...colorValidation })}
              />
              <Textarea
                placeholder="description"
                register={register("description", { ...descriptionValidation })}
              />
            </div>
            <Button
              className={`float-right mt-10 disabled:opacity-50`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "...wait" : "Submit"}
            </Button>
          </Form>
        </Modal>
      </Section>
    </Layout>
  );
}
