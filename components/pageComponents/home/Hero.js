import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Hero.module.css";
export default function Hero() {
  return (
    <section id="hero">
      <div className="lg:container px-4 lg:px-0 mx-auto grid md:grid-cols-2 grid-col-1 lg:py-20 py-16 items-center">
        <div>
          <div className="flex items-center md:justify-start justify-center">
            <Image
              className="inline mr-2"
              src={"/images/tik-icon.svg"}
              width={"22"}
              height={"22"}
              alt="tik-icon"
            ></Image>
            <h1 className="text-[16px] md:text-[18px] font-medium">
              দেশ সেরা আইটি ট্রেইনিং ইন্সটিটিউট
            </h1>
          </div>

          <h2 className="xl:text-[45px] md:text-[36px] text-[32px] font-bold text-center md:text-left text-secondary my-3 leading-normal">
            সঠিক দক্ষতাই হতে পারে,<br></br> আপনার ক্যারিয়ার শুরুর চাবিকাঠি
          </h2>

          <p className="lg:w-8/12 w-11/12 mx-auto md:mx-0 text-center text-text md:text-left mb-8 md:mb-5">
            অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে জেআইটি ইনস্টিটিউট প্রস্তুত
            আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ৩০টিরও বেশি ট্রেন্ডি কোর্স
            থেকে আজই বেছে নিন আপনার পছন্দের কোর্স।
          </p>

          <div className="hero-btns flex items-center justify-center md:justify-start">
            <Link href={'/courses'} className="bg-secondary hover:bg-primary px-5 py-2 rounded-md text-white mr-4 font-medium">
              কোর্স সমূহ
            </Link>
            <button className="flex items-center py-2 font-medium text-secondary">
              <Image
                className="mr-2"
                src={"/images/play button.svg"}
                alt="play-icon"
                width={"30"}
                height={"30"}
              ></Image>
              ভিডিও দেখুন
            </button>
          </div>
        </div>
        <div>
          <Image
            className="md:ml-auto mx-auto mt-12 md:mt-0 w-full h-auto"
            src={"/images/Hero Image.svg"}
            alt="hero image"
            width="0"
            height="0"
            sizes="100vw"
            priority
            as="image"
          ></Image>
        </div>
      </div>
      <div className="lg:container px-4 lg:px-0 mx-auto mb-16">
        <div className="md:w-8/12 mx-auto md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-5">
          <div className={styles.stat}>
            <h3 className="font-semibold text-secondary text-[30px] md:text-[36] xl:text-[40px]">
              ২০০+
            </h3>
            <p className="text-text">সফল ফ্রিল্যান্সার</p>
          </div>
          <div className={styles.stat}>
            <h3 className="font-semibold text-secondary text-[30px] md:text-[36] xl:text-[40px]">
              ৪.৫
            </h3>
            <p className="text-text">১০০+ রিভিউ</p>
          </div>
          <div className={styles.stat}>
            <h3 className="font-semibold text-secondary text-[30px] md:text-[36] xl:text-[40px]">
              ৩০০+
            </h3>
            <p className="text-text">ইন্ডাস্ট্রি এক্সপার্ট</p>
          </div>
          <div className={styles.stat}>
            <h3 className="font-semibold text-secondary text-[30px] md:text-[36] xl:text-[40px]">
              ৮০%
            </h3>
            <p className="text-text">সাকসেস রেশিও</p>
          </div>
        </div>
      </div>
    </section>
  );
}
