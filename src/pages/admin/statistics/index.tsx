import { Layout, Section, SectionTitle } from "@/layouts";
import {
  Button,
  Confirm,
  Empty,
  Form,
  Input,
  Message,
  Modal,
  Textarea,
} from "@/components";
import {
  colorValidation,
  descriptionValidation,
  titleValidation,
} from "@/utils/validations";
import { StatisticsCard } from "@/components/admin";
import { useStatisticsContext } from "@/context";
import { useStatistics } from "@/hooks/admin";

export default function StatisticsAdmin() {
  const { statistics } = useStatisticsContext();
  const {
    modal: { isModalOpen, onModalOpen, onModalClose },
    confirm: { isConfirmOpen, onConfirmOpen, onConfirmClose, onConfirm },
    form: { handleSubmit, onSubmit, onEdit, isLoading, register },
    message: { isActive, message, variant },
  } = useStatistics();

  return (
    <Layout>
      <Section className="flex flex-col h-full 2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3">
        <Message isActive={isActive} variant={variant} message={message} />
        <SectionTitle
          subTitle="statistics"
          title="All Statistics"
          className="my-12"
        />
        <Confirm
          title="Are you sure to delete this Statistic?"
          open={isConfirmOpen}
          onClose={onConfirmClose}
          onConfirm={onConfirm}
        />
        <Button className="mb-6 w-fit" onClick={onModalOpen}>
          Add new Statistics
        </Button>
        <div className="relative w-full flex-auto">
          <Empty
            isEmpty={!statistics.length}
            title="There is no statistics yet!"
          >
            <div className="grid gap-6">
              {statistics.map((statistic) => (
                <StatisticsCard
                  statistic={statistic}
                  onDelete={onConfirmOpen}
                  onEdit={onEdit}
                  key={statistic.id}
                />
              ))}
            </div>
          </Empty>
        </div>
        <Modal open={isModalOpen} onClose={onModalClose}>
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
