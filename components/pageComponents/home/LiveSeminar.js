import Image from "next/image";

const services = [
  {
    title: "এক্সপার্ট ইন্সট্রাক্টর",
    description:
      "কেবল ক্লাস নয়,  জেআইটি সবসময় প্রস্তুত শিক্ষার্থীদের যেকোনো দরকারে, যেকোনো সময়। ",
    icon: "instructor-icon.svg",
  },
  {
    title: "সার্টিফিকেট প্রদান",
    description:
      "কেবল ক্লাস নয়,  জেআইটি সবসময় প্রস্তুত শিক্ষার্থীদের যেকোনো দরকারে, যেকোনো সময়। ",
    icon: "certificate-icon.svg",
  },
  {
    title: "ক্লাস ভিডিও",
    description:
      "কেবল ক্লাস নয়,  জেআইটি সবসময় প্রস্তুত শিক্ষার্থীদের যেকোনো দরকারে, যেকোনো সময়। ",
    icon: "class video icon.svg",
  },
  {
    title: "24/7 সাপোর্ট ",
    description:
      "কেবল ক্লাস নয়,  জেআইটি সবসময় প্রস্তুত শিক্ষার্থীদের যেকোনো দরকারে, যেকোনো সময়। ",
    icon: "support icon.svg",
  },
];
export default function LiveSeminar() {
  return (
    <section className="bg-orangeBg">
      <div className="lg:container px-4 lg:px-0 mx-auto grid md:grid-cols-2 grid-col-1 lg:py-20 py-16 items-center">
        <div className="mb-8 xl:mb-0 px-4 xl:px-0 max-w-[500px]">
          <Image
            src={"/images/Live Seminar.svg"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt="support icon"
          ></Image>
        </div>
        <div className="text-center md:text-left pl-8">
          <h3 className="subheading font-medium text-text">
            ফ্রিল্যান্সিং ও ক্যারিয়ার
          </h3>
          <h2 className="heading  lg:w-8/12 font-bold lg:text-left text-secondary my-3 leading-normal">
            ফ্রিল্যান্সিং ও ক্যারিয়ার বিষয়ক লাইভ সেমিনার
          </h2>
          <p className="text-des lg:w-8/12 w-11/12 md:w-10/12 mx-auto md:mx-0 lg:mx-0 text-center md:text-left text-text mb-5">
            ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না?
            জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে
            প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। তাছাড়া সেমিনারে
            উপস্থিত এক্সপার্ট কাউন্সেলরের সঙ্গে কথা বলে আপনি যথাযথ কোর্স বেছে
            নেওয়ার সিদ্ধান্ত নিতে পারবেন সহজেই।
          </p>
          <button className="bg-primary hover:bg-secondary px-5 py-2 rounded-md text-white font-medium">
            রেজিস্ট্রেশন করুন
          </button>
        </div>
      </div>
    </section>
  );
}
