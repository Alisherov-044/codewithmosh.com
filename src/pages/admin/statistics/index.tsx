import { SubmitHandler, useForm } from "react-hook-form";
import { Layout, Section, SectionTitle } from "@/layouts";
import { Button, Form, Input, Textarea } from "@/components";
import { StatisticsCardScheme } from "@/interface/scheme.interface";
import {
  colorValidation,
  descriptionValidation,
  titleValidation,
} from "@/utils/validations";
import { useGetRequest, usePostRequest } from "@/hooks";
import { StatisticsUrl } from "@/utils/urls";
import { fetcher } from "@/utils";

export default function StatisticsAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
  } = useForm<StatisticsCardScheme>();
  const { postRequest } = usePostRequest<StatisticsCardScheme>();
  const { data } = useGetRequest<StatisticsCardScheme[]>(
    StatisticsUrl,
    fetcher
  );

  const onSubmit: SubmitHandler<StatisticsCardScheme> = (event) => {
    if (isValid) {
      const { isLoading, response, error } = postRequest(StatisticsUrl, event);
      console.log(isLoading);
      console.log(response);
      console.log(error);
    }
  };

  return (
    <Layout>
      <Section className="2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3">
        <SectionTitle subTitle="statistics" title="Add New Statistics" />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-start justify-between flex-wrap gap-10">
            <Input
              placeholder="title"
              register={register("title", { ...titleValidation })}
            />
            <Input
              placeholder="color via"
              register={register("color.via", { ...colorValidation })}
            />
            <Input
              placeholder="color text"
              register={register("color.text", { ...colorValidation })}
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
      </Section>
    </Layout>
  );
}
