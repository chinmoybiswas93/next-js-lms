import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "styles/CoursesLoop.module.css";

export default function CourseLoop({ course }) {
  // console.log(course);
  const router = useRouter();
  const goToCourseDetails = () => {
    router.push(`courses/${course.slug}`);
  };
  return (
    <div onClick={() => goToCourseDetails()} className={styles.loopItem}>
      <div className={styles.item}>
        <Image
          className="rounded-[10px]"
          src={`/images/${course.thumb}`}
          alt="Course Thumbnail"
          width={"600"}
          height={"30"}
        ></Image>
        <div className="py-4">
          <p className="text-text text-[15px]">{course.courseCategory}</p>
          <h3 className="text-[20px] font-semibold">{course.title}</h3>
          <div className="text-text text-[15px] flex items-center pb-0 mt-2">
            <Image
              src={"/images/instructor-sohan-khan.svg"}
              alt="instructor icon"
              width={"30"}
              height={"30"}
              className="border rounded-full"
            ></Image>
            <p className="ml-2 mt-1">{course.instructor}</p>
          </div>
        </div>
        <div className="items-center grid grid-cols-2">
          <div>
            <p className="font-semibold text-[24px]">৳ {course.price}</p>
          </div>
          <div className="text-right">
            <Link
              href={`courses/${course.slug}`}
              className="border rounded-md py-1 px-5 text-text hover:bg-primary hover:text-white"
            >
              বিস্তারিত
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
