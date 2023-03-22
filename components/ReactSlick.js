import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tab } from "@headlessui/react";
import styles from "../../../styles/CoursesTab.module.css";

const categories = [
    {
      id: "1",
      name: "সকল কোর্স",
    },
    {
      id: "2",
      name: "ব্যাসিক স্কিল",
    },
    {
      id: "3",
      name: "ডিজাইন এন্ড মাল্টিমিডিয়া",
    },
    {
      id: "4",
      name: "ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট",
    },
    {
      id: "5",
      name: "ডিজিটাল মার্কেটিং",
    },
  ];
  

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
  };
  return (
    <div className="container mx-auto px-10">
      <Slider {...settings}>
        {
            categories.map((category, index) => {
                return (
                    <div className="px-10 border rounded">
                    <h3>{category.name}</h3>
                  </div>
                )
            })
        }
      </Slider>
      <Tab.Group >
      <Tab.List
        className={"tab-list flex justify-around border-b mb-5 mt-16 pb-3"}
      >
        {categories.map((category, index) => {
          return (
            <Tab className={styles.tabItem} key={index}>
              {category.name}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels className={"tab-panel"}>
        {categories.map((category, index) => {
          return (
            <Tab.Panel className={"tab-panel-content"} key={index}>
              {category.name} Content
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
    </div>
  );
}
