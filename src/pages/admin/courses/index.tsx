import { useCourses } from "../hooks";
import { Layout, Section, SectionTitle } from "@/layouts";
import { useCoursesContext } from "@/context";
import {
  Button,
  Checkbox,
  Confirm,
  Empty,
  Form,
  Input,
  Message,
  Modal,
  Textarea,
} from "@/components";
import {
  descriptionValidation,
  durationValidation,
  imageValidation,
  linkValidation,
  nameValidation,
  priceValidation,
} from "@/utils/validations";
import { CourseCard } from "../components";

export default function CoursesAdmin() {
  const { courses } = useCoursesContext();
  const {
    modal: { isModalOpen, onModalOpen, onModalClose },
    confirm: { isConfirmOpen, onConfirmOpen, onConfirmClose, onConfirm },
    form: { handleSubmit, onSubmit, onEdit, isLoading, register },
    message: { isActive, message, variant },
  } = useCourses();

  return (
    <Layout>
      <Section className="flex flex-col h-full 2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3">
        <Message isActive={isActive} variant={variant} message={message} />
        <SectionTitle
          subTitle="courses"
          title="All Courses"
          className="my-12"
        />
        <Confirm
          title="Are you sure to delete this Course?"
          open={isConfirmOpen}
          onClose={onConfirmClose}
          onConfirm={onConfirm}
        />
        <Button className="mb-6 w-fit" onClick={onModalOpen}>
          Add new Courses
        </Button>
        <div className="relative w-full flex-auto">
          <Empty isEmpty={!courses.length} title="There is no features yet!">
            <div className="grid gap-6">
              {courses.map((course) => (
                <CourseCard
                  course={course}
                  onDelete={onConfirmOpen}
                  onEdit={onEdit}
                  key={course.id}
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
                placeholder="name"
                register={register("name", { ...nameValidation })}
              />
              <Input
                placeholder="price"
                register={register("price", { ...priceValidation })}
              />
              <Input placeholder="discount" register={register("discount")} />
              <Input
                placeholder="image"
                register={register("image", { ...imageValidation })}
              />
              <Input
                placeholder="link"
                register={register("link", { ...linkValidation })}
              />
              <Input
                placeholder="duration"
                register={register("duration", { ...durationValidation })}
              />
              <Textarea
                placeholder="description"
                register={register("description", { ...descriptionValidation })}
              />
              <Checkbox
                label="for month?"
                id="forMonth"
                register={register("forMonth")}
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
