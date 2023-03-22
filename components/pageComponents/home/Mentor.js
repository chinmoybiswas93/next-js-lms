import Image from "next/image";
import Slider from "react-slick";
import styles from "../../../styles/Mentors.module.css";
const mentors = [
  {
    id: "1",
    name: "চিন্ময় বিশ্বাস",
    course: "ওয়েব ডেভেলপমেন্ট",
    image: "mentor1.png",
  },
  {
    id: "2",
    name: "চিন্ময় বিশ্বাস",
    course: "ওয়েব ডেভেলপমেন্ট",
    image: "mentor1.png",
  },
  {
    id: "3",
    name: "চিন্ময় বিশ্বাস",
    course: "ওয়েব ডেভেলপমেন্ট",
    image: "mentor1.png",
  },
  {
    id: "4",
    name: "চিন্ময় বিশ্বাস",
    course: "ওয়েব ডেভেলপমেন্ট",
    image: "mentor1.png",
  },
  {
    id: "5",
    name: "চিন্ময় বিশ্বাস",
    course: "ওয়েব ডেভেলপমেন্ট",
    image: "mentor1.png",
  },
  {
    id: "6",
    name: "চিন্ময় বিশ্বাস",
    course: "ওয়েব ডেভেলপমেন্ট",
    image: "mentor1.png",
  },
  {
    id: "7",
    name: "চিন্ময় বিশ্বাস",
    course: "ওয়েব ডেভেলপমেন্ট",
    image: "mentor1.png",
  },
];

export default function Mentors() {
  const settings = {
    dots: true,
    arrows: false,
    className: "slick-center",
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="bg-orangeBg">
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 py-16 items-center">
        <div className="text-center">
          <h2 className="heading text-center my-3 leading-normal">
            এক্সপার্ট মেন্টর
          </h2>
          <p className="text-desc lg:w-6/12 w-11/12 md:w-10/12 mx-auto text-text mb-5">
            স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, লাইভে! বাংলাদেশের
            দক্ষ জনশক্তির বিপ্লবে আমাদের সাথে অংশ নিতে চাইলে জয়েন করুন দেশ সেরা
            ইন্সট্রাক্টরদের টিমে, শেয়ার করুন আপনার স্কিল।
          </p>
        </div>
        <div className="mt-8">
          <Slider {...settings} className="testimonial-slider">
            {mentors.map((mentor, index) => {
              return (
                <div key={index} className={styles.item}>
                  <div className="relative">
                    <div>
                      <Image
                        className="rounded-lg"
                        src={"/images/mentor1.png"}
                        height={"80"}
                        width={"300"}
                        alt="mentor image"
                      ></Image>
                    </div>
                    <div className="text-center absolute bottom-4 block w-full">
                      <h3 className="text-md md:text-xl lg:text-2xl font-bold text-white">
                        {mentor.name}
                      </h3>
                      <p className="text-sm md:text-md lg: text-xl text-white">
                        {mentor.course}
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
