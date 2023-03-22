import Image from "next/image";
import Slider from "react-slick";
import styles from "../../../styles/Testimonials.module.css";

const testimonials = [
  {
    id: "1",
    name: "সোহানুর রহমান খান",
    course: "মাইক্রোসফট অফিস আপ্লিকেশন",
    batch: "ব্যাচ ০১",
    image: "instructor-sohan-khan.svg",
    description:
      "ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। ",
  },
  {
    id: "2",
    name: "সোহানুর রহমান খান",
    course: "মাইক্রোসফট অফিস আপ্লিকেশন",
    batch: "ব্যাচ ০১",
    image: "instructor-sohan-khan.svg",
    description:
      "ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। ",
  },
  {
    id: "3",
    name: "সোহানুর রহমান খান",
    course: "মাইক্রোসফট অফিস আপ্লিকেশন",
    batch: "ব্যাচ ০১",
    image: "instructor-sohan-khan.svg",
    description:
      "ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। ",
  },
  {
    id: "4",
    name: "সোহানুর রহমান খান",
    course: "মাইক্রোসফট অফিস আপ্লিকেশন",
    batch: "ব্যাচ ০১",
    image: "instructor-sohan-khan.svg",
    description:
      "ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। ",
  },
  {
    id: "4",
    name: "সোহানুর রহমান খান",
    course: "মাইক্রোসফট অফিস আপ্লিকেশন",
    batch: "ব্যাচ ০১",
    image: "instructor-sohan-khan.svg",
    description:
      "ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। ",
  },
  {
    id: "5",
    name: "সোহানুর রহমান খান",
    course: "মাইক্রোসফট অফিস আপ্লিকেশন",
    batch: "ব্যাচ ০১",
    image: "instructor-sohan-khan.svg",
    description:
      "ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। ",
  },
];

export default function Testimonials() {
  var settings = {
    dots: true,
    arrows: false,
    className: "slick-center",
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          className: "center",
          centerMode: true,
          centerPadding: "0",
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          className: "center",
          centerMode: true,
          centerPadding: "0",
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section>
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 py-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="heading text-center my-3 leading-normal">
            ক্যারিয়ারে সফল যারা
          </h2>
          <p className="text-desc lg:w-8/12 w-11/12 md:w-10/12 mx-auto text-center text-text mb-5">
            আমাদের শিক্ষার্থীদের সফলতা, জেআইটি ইন্সটিটিউটের এগিয়ে চলায় উদ্দীপনা
            যোগায় প্রতিটি মুহূর্তে।
          </p>
        </div>
        <div className="mt-8">
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => {
            return (
              <div key={index} className={styles.item}>
                <div className="content">
                  <div className="flex items-center max-[400px]:flex-col">
                    <Image
                      className="border rounded-full"
                      src={`/images/${testimonial?.image}`}
                      height={"80"}
                      width={"80"}
                      alt="testimonials image"
                    ></Image>
                    <div className="ml-4 max-[400px]:ml-0 max-[400px]:text-center max-[400px]:mt-3">
                      <h3 className="text-[18px] text-secondary font-semibold max-[400px]:flex-col">
                        {testimonial?.name}
                      </h3>
                      <p className="text-text">{testimonial?.course}</p>
                      <p className="text-text">{testimonial?.batch}</p>
                    </div>
                  </div>
                  <div className="mt-4 px-2 max-[400px]:text-center">
                    <p className="text-desc text-text">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        </div>

      </div>
    </section>
  );
}
