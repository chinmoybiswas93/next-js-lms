import { Accordion } from "flowbite-react";
import Image from "next/image";
import Instructor from "./Instructor";
export default function CourseDetails({
  courseModule,
  instructorId,
  aboutCourse,
}) {
  //   console.log(courseModule);
  return (
    <div>
      <div id="study-plan" className="pt-[130px] mb-[-80px]">
        <Accordion collapseAll={true} className="border-none">
          {courseModule.map((item, index) => {
            return (
              <Accordion.Panel className="hover:bg-white" key={index}>
                <Accordion.Title className="text-lg hover:bg-white foucs:ring-0 text-secondary font-[600] bg-white border-b-1 course-module-accordion-tab">
                  <div>
                    <p className="text-text font-medium text-[12px]">
                      Day {item.day}
                    </p>
                    <p className="text-secondary font-semibold text-desc">
                      {item.title}
                    </p>
                  </div>
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-text">{item.details}</p>
                </Accordion.Content>
              </Accordion.Panel>
            );
          })}
        </Accordion>
      </div>
      <div id="instructor" className="pt-[130px] mb-[-80px]">
        <h3 className="text-[26px] font-bold mb-4 text-secondary">
          ইন্সট্রাক্টর
        </h3>
        <hr className="mb-6" />
        <Instructor instructorId={instructorId}></Instructor>
      </div>
      <div id="about-course" className="pt-[130px] mb-[-80px]">
        <h3 className="text-[26px] font-bold mb-4 text-secondary ">
          কোর্স সম্পর্কে
        </h3>
        <hr className="mb-6" />
        <div>
          <p className="text-desc text-text">{aboutCourse}</p>
        </div>
      </div>
      <div id="help" className="pt-[130px]">
        <h3 className="text-[26px] font-bold mb-4 text-secondary">হেল্প</h3>
        <hr className="mb-6" />
        <div>
          <div className="flex xxsm:gap-4 flex-col">
            <div className="flex items-center gap-2">
              <Image
                src={"/images/phone.svg"}
                width={"15"}
                height={"15"}
                alt="live seminar"
              ></Image>
              <p className="font-bold text-primary">কল করুন ০৯ ৬৩৯ ৭৩৯ ৮৩৯</p>
            </div>
            <div>
              <p>(সকাল ১০টা থেকে সন্ধ্যা ৭ টা)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
