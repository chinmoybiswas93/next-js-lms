import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tab } from "@headlessui/react";
import styles from "../../../styles/Courses.module.css";
import CourseCarousel from "./CourseCarousel";
import Link from "next/link";

export default function Courses({ categories }) {
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
          <h2 className="heading text-center my-3 leading-normal">
            কোর্স সমূহ
          </h2>
          <p className="text-desc lg:w-8/12 w-11/12 md:w-10/12 mx-auto text-center text-text mb-5">
            দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি, সেসব
            দিয়েই সাজানো হয়েছে আমাদের কোর্স লিস্ট। এখান থেকে আপনার সুবিধামত
            অনলাইন বা অফলাইন কোর্সে এনরোল করতে পারবেন যেকোনো সময়।
          </p>
        </div>
        <div className="mt-12">
          <Tab.Group>
            <Tab.List className="px-6 course-tab-list">
              <Slider className="px-3" {...settings}>
                {categories.map((category, index) => {
                  return (
                    <Tab className={styles.tabItem} key={index}>
                      {category.name}
                    </Tab>
                  );
                })}
              </Slider>
            </Tab.List>
            <Tab.Panels className={"tab-panel mt-4"}>
              {categories.map((category, index) => {
                return (
                  <Tab.Panel className={"tab-panel-content"} key={index}>
                    <CourseCarousel category={category}></CourseCarousel>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="text-center mt-8">
          <Link
            href={"/courses"}
            className="bg-secondary hover:bg-primary px-5 py-2 rounded-md text-white mr-4 font-medium text-center"
          >
            সকল কোর্স সমূহ দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
}
