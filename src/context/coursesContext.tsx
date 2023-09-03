import { createContext, useContext, useEffect, useState } from "react";
import { CoursesContextInterface, CoursesProviderInterface } from "@/interface";
import { fetcher } from "@/utils";
import { useGetRequest } from "@/hooks";
import { CoursesUrl } from "@/utils/urls";
import { CourseCardScheme } from "@/interface/scheme.interface";

const initialValue: CoursesContextInterface = {
  courses: [],
};

const CoursesContext = createContext<CoursesContextInterface>(initialValue);

export function useCoursesContext() {
  return useContext(CoursesContext);
}

function CoursesProvider({ children }: CoursesProviderInterface) {
  const [courses, setCourses] = useState<CourseCardScheme[] | []>([]);

  const { data } = useGetRequest<CourseCardScheme[]>(CoursesUrl, fetcher);

  useEffect(() => {
    if (data) {
      setCourses(data);
    }
  }, [data]);

  return (
    <CoursesContext.Provider value={{ courses }}>
      {children}
    </CoursesContext.Provider>
  );
}

export default CoursesProvider;
