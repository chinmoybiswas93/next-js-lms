import CourseDetails from "@/components/pageComponents/singleCourse/CourseDetails";
import CourseDetailsTab from "@/components/pageComponents/singleCourse/CourseDetailsTab";
import JoinLiveBatch from "@/components/pageComponents/singleCourse/JoinLiveBatch";
import OrientationBooking from "@/components/sharedComponents/OrientationBooking";
import Image from "next/image";
import { useRouter } from "next/router";

export default function courseSingle({ courseDetails }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading. . . </h3>;
  }
  // console.log(courseDetails);
  // const courseName = router.query.courseName;
  const {
    details: [
      {
        id,
        courseTitle,
        aboutCourse,
        courseId,
        description,
        thumb,
        price,
        previousPrice,
        instructorId,
      },
    ],
    courseModule,
  } = courseDetails;
  // console.log(aboutCourse);

  return (
    <section>
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 py-8 grid grid-cols-12 md:gap-8  items-start">
        <div className="course-details md:col-span-7 col-span-12 md:order-1 order-2 mb-4 xl:mr-4">
          <div className="course-intro">
            <h1 className="heading mb-3 font-bold text-secondary mt-4 md:mt-0">
              {courseTitle}
            </h1>
            <p className="text-desc text-text mb-8">{description}</p>
            <OrientationBooking></OrientationBooking>
            <div className="block md:hidden">
              <JoinLiveBatch
                price={price}
                previousPrice={previousPrice}
              ></JoinLiveBatch>
            </div>
            <CourseDetailsTab></CourseDetailsTab>
            <CourseDetails
              courseModule={courseModule}
              instructorId={instructorId}
              aboutCourse={aboutCourse}
            ></CourseDetails>
          </div>
        </div>
        <div className="sidebar md:order-2 order-1 md:col-span-5 col-span-12 xl:ml-4 h-full">
          <Image
            className="rounded-md border"
            src={`/images/${thumb}`}
            width={"800"}
            height={"800"}
            alt={`${courseTitle} JIT`}
          ></Image>
          <div className="hidden md:block sticky top-20">
            <JoinLiveBatch
              price={price}
              previousPrice={previousPrice}
            ></JoinLiveBatch>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { courseName: "microsoft-office-applicaton-1" } },
      { params: { courseName: "microsoft-office-applicaton-2" } },
      { params: { courseName: "microsoft-office-applicaton-3" } },
    ],
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  // console.log(params);
  const urls = [`${process.env.API_URL}/courseDetails?id=1`];

  const data = await Promise.all(
    urls.map(async (url) => {
      const res = await fetch(url);
      const dataJson = await res.json();
      return dataJson;
    })
  );

  // console.log(data);
  return {
    props: {
      courseDetails: data[0],
    },
  };
}
