import { Spinner } from "flowbite-react";
import CourseLoop from "@/components/sharedComponents/CourseLoop";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CoursesContainer({ category }) {
  const url =
    category.id == "1"
      ? `${process.env.NEXT_PUBLIC_API_URL}/courses`
      : `${process.env.NEXT_PUBLIC_API_URL}/courses?category=${category.id}`;

  const { data: courses, error, isLoading } = useSWR(url, fetcher);

  if (error) return "An error has occurred.";
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner
          className="loading-spinner"
          aria-label="Center-aligned spinner"
        />
      </div>
    );

  return (
    <div className="mt-8 courses-carousel">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course, index) => {
          return (
            <div key={index}>
              <CourseLoop course={course}></CourseLoop>
            </div>
          );
        })}
      </div>
    </div>
  );
}
