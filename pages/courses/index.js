import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tab } from "@headlessui/react";
import Slider from "react-slick";
import styles from "../../styles/Courses.module.css";
import CoursesContainer from "@/components/pageComponents/home/CoursesContainer";

export default function Courses({ categories, courses }) {
  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
  };
  return (
    <section>
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 py-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="heading my-3 leading-normal">কোর্স সমূহ</h2>
          <p className="text-desc lg:w-8/12 w-11/12 md:w-10/12 text-text mb-5">
            বর্তমান বিশ্বের সব ট্রেন্ডি এবং চাহিদাসম্পন্ন সব কোর্স রয়েছে জেআইটি
            ইন্সটিটিউটে। কোর্স করার সময় যে প্রয়োজনীয় কনফিগারেশনের কম্পিউটার
            দরকার, তার সবই রয়েছে আমাদের ল্যাবে। আপনি চাইলেই ক্লাসের পরে ল্যাবে
            বসে কোর্স বিষয়ক যেকোনো কিছু প্র্যাকটিস করতে পারেন। প্রতিটি কোর্স
            এমনভাবে ডিজাইন করা হয়েছে যাতে আপনি কোর্স শেষে প্রতিটি টপিকে কাজ
            করার আত্মবিশ্বাস পান।
          </p>
        </div>
        <div className="mt-12">
          <Tab.Group>
            <Tab.List className="px-0 course-tab-list">
              <Slider {...settings}>
                {categories.map((category, index) => {
                  return (
                    <Tab className={styles.tabItem} key={index}>
                      {category.name}
                    </Tab>
                  );
                })}
              </Slider>
            </Tab.List>
            <Tab.Panels className={"tab-panel mt-8"}>
              {categories.map((category, index) => {
                return (
                  <Tab.Panel className={"tab-panel-content"} key={index}>
                    <CoursesContainer category={category}></CoursesContainer>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const urls = [
    `${process.env.API_URL}/categories`,
    `${process.env.API_URL}/courses`,
  ];

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
      categories: data[0],
      courses: data[1],
    },
  };
}
