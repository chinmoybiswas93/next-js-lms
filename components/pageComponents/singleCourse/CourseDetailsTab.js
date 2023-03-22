import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/CourseDetailsTab.module.css";

const tabItems = [
  {
    item: "স্টাডি প্ল্যান",
    to: "#study-plan",
    img: "study plan.svg",
  },
  {
    item: "ইন্সট্রাক্টর",
    to: "#instructor",
    img: "instructor.svg",
  },
  {
    item: "কোর্স সম্পর্কে",
    to: "#about-course",
    img: "about-course.svg",
  },
  {
    item: "হেল্প",
    to: "#help",
    img: "help.svg",
  },
];

export default function CourseDetailsTab() {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.tabs}>
      <ul className="flex sm:gap-12 xsm:gap-8 gap-2">
        {tabItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.to}
                className={
                  router.asPath == `/courses/${router.query.courseName}${item.to}`
                    ? `${styles.active}`
                    : `${styles.tabItem}`
                }
              >
                <div className="flex items-center gap-2 px-1 py-3">
                  <Image
                    src={`/images/${item.img}`}
                    alt={item.item}
                    width={"13"}
                    height={"13"}
                  ></Image>
                  <p className="text-text text-medium">{item.item}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
