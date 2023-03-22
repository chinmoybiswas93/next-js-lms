import { Accordion } from "flowbite-react";

const faqs = [
  {
    id: "1",
    question: "আপনারা কি অফার করেন?",
    answer:
      "ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। ",
  },
  {
    id: "2",
    question: "কোর্সগুলো কি প্রিরেকর্ডেড?",
    answer:
      "ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। ",
  },
  {
    id: "3",
    question: "আমি কিভাবে ব্যাচে জয়েন করবো?",
    answer:
      "ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। ",
  },
  {
    id: "1",
    question: "আপনারা কি কি স্কিল অফার করেন?",
    answer:
      "ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। ",
  },
  {
    id: "5",
    question: "আমি কি সার্টিফিকেট পাবো?",
    answer:
      "ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না? জয়েন করুন আমাদের ফ্রি লাইভ সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। ",
  },
];

export default function Faq() {
  return (
    <section>
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 py-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="heading text-center my-3 leading-normal">
            আপনাদের সাধারন জিজ্ঞাসা
          </h2>
          <p className="text-desc lg:w-8/12 w-11/12 md:w-10/12 mx-auto text-center text-text mb-5">
            আমাদের শিক্ষার্থীদের সফলতা, জেআইটি ইন্সটিটিউটের এগিয়ে চলায় উদ্দীপনা
            যোগায় প্রতিটি মুহূর্তে।
          </p>
        </div>
        <div className="lg:w-8/12 mx-auto mt-12">
          <Accordion collapseAll={true} className="border-none">
            {faqs.map((faq, index) => {
              return (
                <Accordion.Panel className="hover:bg-white" key={index}>
                  <Accordion.Title className="text-lg hover:bg-white foucs:ring-0 text-secondary font-[600] bg-white border-b-1">{index+1}. {faq.question}</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-text">
                      {faq.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
