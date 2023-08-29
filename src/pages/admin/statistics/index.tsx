import { SubmitHandler, useForm } from "react-hook-form";
import { Layout, Section, SectionTitle } from "@/layouts";
import { Button, Form, Input, Message, Modal, Textarea } from "@/components";
import { StatisticsCardScheme } from "@/interface/scheme.interface";
import {
  colorValidation,
  descriptionValidation,
  titleValidation,
} from "@/utils/validations";
import {
  useDeleteRequest,
  useMessage,
  useModal,
  usePostRequest,
} from "@/hooks";
import { StatisticsUrl } from "@/utils/urls";
import { StatisticsCard } from "@/pages/admin/components";
import { useStatisticsContext } from "@/context";

export default function StatisticsAdmin() {
  const { statistics } = useStatisticsContext();
  const { open, onOpen, onClose } = useModal();
  const { message, variant, isActive, setMessage } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
  } = useForm<StatisticsCardScheme>();
  const { postRequest } = usePostRequest<StatisticsCardScheme>();
  const { deleteRequest } = useDeleteRequest<StatisticsCardScheme>();

  const onSubmit: SubmitHandler<StatisticsCardScheme> = async (event) => {
    if (isValid) {
      const { success } = await postRequest(StatisticsUrl, event);

      if (success) {
        onClose();
        setMessage({
          variant: "success",
          message: "Statistic Created successfully",
        });
      }
    }
  };

  const onDelete = async (id: number) => {
    const { success } = await deleteRequest(StatisticsUrl, id);

    if (success) {
      setMessage({
        variant: "success",
        message: "Statistic Deleted successfully",
      });
    }
  };

  console.log(statistics);

  return (
    <Layout>
      <Section className="2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3">
        <SectionTitle
          subTitle="statistics"
          title="All Statistics"
          className="my-12"
        />
        <Message isActive={isActive} variant={variant} message={message} />
        <Button className="mb-6" onClick={onOpen}>
          Add new Statistics
        </Button>
        <div className="grid gap-6">
          {statistics.map((statistic) => (
            <StatisticsCard
              statistic={statistic}
              onDelete={onDelete}
              onEdit={() => {}}
              key={statistic.id}
            />
          ))}
        </div>
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
