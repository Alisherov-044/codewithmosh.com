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
import { Layout, Section, SectionTitle } from "@/layouts";
import { useFeatures } from "@/hooks/admin";
import { useFeaturesContext } from "@/context";
import { FeatureCard } from "@/components/admin";
import {
  colorValidation,
  descriptionValidation,
  iconValidation,
  imageValidation,
  slugValidation,
  titleValidation,
} from "@/utils/validations";

export default function FeaturesAdmin() {
  const { features } = useFeaturesContext();
  const {
    modal: { isModalOpen, onModalOpen, onModalClose },
    confirm: { isConfirmOpen, onConfirmOpen, onConfirmClose, onConfirm },
    form: { handleSubmit, onSubmit, onEdit, isLoading, register },
    message: { isActive, message, variant },
  } = useFeatures();

  return (
    <Layout>
      <Section className="flex flex-col h-full 2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3">
        <Message isActive={isActive} variant={variant} message={message} />
        <SectionTitle
          subTitle="features"
          title="All Features"
          className="my-12"
        />
        <Confirm
          title="Are you sure to delete this Feature?"
          open={isConfirmOpen}
          onClose={onConfirmClose}
          onConfirm={onConfirm}
        />
        <Button className="mb-6 w-fit" onClick={onModalOpen}>
          Add new Feature
        </Button>
        <div className="relative w-full flex-auto">
          <Empty isEmpty={!features.length} title="There is no features yet!">
            <div className="grid gap-6">
              {features.map((feature) => (
                <FeatureCard
                  feature={feature}
                  onDelete={onConfirmOpen}
                  onEdit={onEdit}
                  key={feature.id}
                />
              ))}
            </div>
          </Empty>
        </div>
        <Modal open={isModalOpen} onClose={onModalClose}>
          <SectionTitle subTitle="features" title="Add New Features" />
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
              <Input
                placeholder="slug"
                register={register("slug", { ...slugValidation })}
              />
              <Input
                placeholder="image"
                register={register("image", { ...imageValidation })}
              />
              <Textarea
                placeholder="icon"
                register={register("icon", { ...iconValidation })}
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
