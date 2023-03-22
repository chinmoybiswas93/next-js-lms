import Image from "next/image";

export default function Services({ services }) {
  return (
    <div className="" id="special-services">
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 items-center">
        <div className="text-center lg:text-left">
          <h3 className="subheading">আমাদের সুবিধা সমূহ</h3>
          <h2 className="heading lg:text-left my-3 leading-normal">
            জেআইটির বিশেষ সেবা
          </h2>
          <p className="text-desc lg:w-6/12 w-11/12 md:w-12/12 mx-auto lg:mx-0 text-center text-text lg:text-left mb-5">
            কেবল ক্লাস নয়, জেআইটি সবসময় প্রস্তুত শিক্ষার্থীদের যেকোনো দরকারে,
            যেকোনো সময়। তাই উন্নতমানের কোর্সের সাথে আপনি পাচ্ছেন কিছু বোনাস
            সুবিধা, যা শুধুমাত্র আমরাই দিয়ে থাকি।
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:w-10/12 mx-auto  gap-4 mt-8">
          {services.map((service, index) => {
            return (
              <div key={index} className="">
                <div className="">
                  <div className="flex items-center mb-5">
                    <div className="w-6 mr-2">
                      <Image
                        src={`/images/${service.icon}`}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                        alt="insturctor icon"
                      ></Image>
                    </div>
                    <h3 className="text-[18px] font-semibold ml-2 text-secondary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-text text-desc mb-5 w-10/12 mx-auto py-5">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
