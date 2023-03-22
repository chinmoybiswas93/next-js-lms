import Image from "next/image";

export default function SuccessStories() {
  return (
    <section className="lg:max-w-[1000px] mx-auto">
      <div className="lg:container px-4 lg:px-0 mx-auto lg:pt-8 lg:pb-20 py-4 items-center ">
        <div className="text-center lg:text-left">
          <h2 className="heading text-center my-3 leading-normal">
            সফলতার গল্প
          </h2>
          <p className="text-desc lg:w-8/12 w-11/12 md:w-10/12 mx-auto text-center text-text mb-5">
            আমাদের শিক্ষার্থীদের সফলতা, জেআইটি ইন্সটিটিউটের এগিয়ে চলায় উদ্দীপনা
            যোগায় প্রতিটি মুহূর্তে।
          </p>
        </div>

        <div className="text-center mt-10 grid md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <Image
              src={"/images/success-story-thumb.png"}
              className="ml-auto border rounded-lg"
              width={"500"}
              height={"400"}
              alt="success stories"
            ></Image>
          </div>
          <div>
            <Image
              src={"/images/success-story-thumb.png"}
              className="mr-auto border rounded-lg"
              width={"500"}
              height={"400"}
              alt="success stories"
            ></Image>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16 gap-10 items-center max-w-[1100px] mx-auto">
          <div className="text-center md:text-left">
            <h2 className="heading mb-3 leading-normal">
              অংশ নিন ফ্রি সেমিনার
            </h2>
            <p className="text-desc lg:w-8/12 w-11/12 md:w-10/12 md:mr-auto text-center md:text-left text-text mb-5">
              ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না?
              জয়েন করুন আমাদের ফ্রি সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে
              প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। তাছাড়া সেমিনারে
              উপস্থিত এক্সপার্ট কাউন্সেলরের সঙ্গে কথা বলে আপনি যথাযথ কোর্স বেছে
              নেওয়ার সিদ্ধান্ত নিতে পারবেন সহজেই।
            </p>
            <button className="bg-primary hover:bg-secondary px-5 py-2 rounded-md text-white font-medium">
              সকল সেমিনারের সময়সূচী
            </button>
          </div>
          <div>
            <Image
              src={"/images/free seminar.svg"}
              className="mr-auto border rounded-lg"
              width={"500"}
              height={"400"}
              alt="success stories"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
