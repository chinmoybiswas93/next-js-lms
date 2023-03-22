import Services from "@/components/pageComponents/about/Services";
import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function About({ services }) {
  return (
    <section>
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 py-16 items-center">
        {/* about page intro  */}
        <div className="text-center">
          <h2 className="heading text-center leading-normal mb-2">
            আমাদের সম্পর্কে
          </h2>
          <p className="text-desc lg:w-10/12 w-11/12 md:w-10/12 mx-auto text-text mb-5">
            জেআইটি ইনস্টিটিউট, আইটিতে সাফল্য সৃষ্টির লক্ষ্যে প্রতিষ্ঠিত একটি
            বিশ্বস্ত প্রতিষ্ঠান। প্রতিষ্ঠার পর থেকে, জেআইটি সুদীর্ঘ ৪ বছর ধরে
            ডিজিটাল বাংলাদেশ বিনির্মাণে অবদান রেখে চলেছে এবং যুগান্তকারী
            পরিবর্তনের মাধ্যমে বহুমুখী সাফল্য অর্জন করছে। বাংলাদেশের অন্যতম এই
            আইটি প্রতিষ্ঠানটি ২০১৯ সাল থেকে বেকার সমস্যা দূর করতেও গুরুত্বপূর্ণ
            ভূমিকা পালন করে আসছে।
          </p>
        </div>
        {/* about us section */}
        <div id="about">
          <div className="lg:mt-20 mt-16 md:grid md:grid-cols-2 items-center">
            <div>
              <div className="flex items-center md:justify-start justify-center">
                <h3 className="subheading text-text font-medium">
                  সাফল্যের ৩ বছরের
                </h3>
              </div>

              <h2 className="lg:w-7/12 heading text-center md:text-left text-secondary my-3 leading-normal">
                আইটি এক্সপার্ট তৈরির জগতে বিশ্বস্ত প্রতিষ্ঠান
              </h2>

              <p className="lg:w-10/12 w-11/12 mx-auto md:mx-0 text-center text-text md:text-left mb-8 md:mb-5">
                আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে নিজেকে আপডেটেড রাখতে আপনার
                পাশে রয়েছে জেআইটি ইন্সটিটিউট। আইটি সেক্টর হোক বা নন-আইটি সেক্টর,
                সবখানেই এখন আইটি এক্সপার্টদের ভালো চাহিদা রয়েছে। এজন্যই আপডেটেড
                কারিকুলাম, অভিজ্ঞ মেন্টর আর আধুনিক ল্যাব নিয়ে দীর্ঘ ৩ বছর যাবত
                আমরা তৈরি করে চলেছি আইটি এক্সপার্ট। এর ধারাবাহিকতায় আমরা পেয়েছি
                ২ হাজারেরও বেশি সফল মুখ, যারা নিজেরা স্বাবলম্বী হয়ে কর্মসংস্থান
                তৈরি করেছেন আরও মানুষের। আর এই শিক্ষার্থীদের সাফল্য আমাদের
                পথচলার অনুপ্রেরণা। আমরা বিশ্বাস করি প্রতিটি মানুষই প্রতিভাবান,
                আর আপনার প্রতিভা বিকাশের দায়িত্ব আমাদের। প্রয়োজন কেবল আপনার
                আগ্রহ এবং নিয়মিত অনুশীলনের।
              </p>
            </div>
            <div className="">
              {" "}
              <Image
                className="md:ml-auto mx-auto mt-4 md:mt-0 lg:max-w-[450px]"
                src={"/images/free seminar.svg"}
                alt="hero image"
                width={"500"}
                height={"100"}
              ></Image>
            </div>
          </div>
          <div className="mb-8 lg:mt-24 mt-16">
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
        </div>
        {/* jit special services */}
        <Services services={services}></Services>
        {/* about page gallery */}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const urls = [`${process.env.API_URL}/services`];

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
      services: data[0],
    },
  };
}
