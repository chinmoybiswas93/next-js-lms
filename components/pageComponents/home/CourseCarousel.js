import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CourseLoop from "../../sharedComponents/CourseLoop";
import useSWR from "swr";
import { Spinner } from "flowbite-react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CourseCarousel({ category }) {
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

  // slider settings
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="courses-carousel">
      <Slider {...settings}>
        {courses.map((course, index) => {
          return (
            <div key={index}>
              <CourseLoop course={course}></CourseLoop>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
