import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/JoinLiveBatch.module.css";

export default function JoinLiveBatch({ price, previousPrice }) {
  return (
    <div className={styles.container}>
      {/* header buttons */}
      <div className="flex items-center justify-center gap-4 border-b p-4">
        <div className="flex items-center gap-2 bg-[#EAECF0] py-2 px-4 lg:px-4 md:px-2 rounded-md">
          <Image
            src={"/images/remaining-day.svg"}
            width={"15"}
            height={"15"}
            alt="live seminar"
          ></Image>
          <p className="text-sm">৬ দিন বাকি</p>
        </div>
        <div className="flex items-center gap-2 bg-[#EAECF0] py-2 lg:px-4 md:px-2 px-4 rounded-md">
          <Image
            src={"/images/remaining-seat.svg"}
            width={"15"}
            height={"15"}
            alt="live seminar"
          ></Image>
          <p className="text-sm">১৮ টি সিট বাকি</p>
        </div>
      </div>

      {/* joining section */}
      <div className="p-4 border-b">
        <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          <div className="flex xsm:justify-start justify-center md:justify-center lg:justify-start items-center gap-4">
            <p className="text-[18px] font-bold text-primary line-through">
              ৳ {previousPrice}
            </p>
            <p className="text-[26px] font-bold text-secondary">৳ {price}</p>
          </div>
          <div className="flex items-center xsm:justify-end justify-center md:justify-center lg:justify-end gap-4">
            <div className="flex items-center gap-2 border-b border-black">
              <Image
                src={"/images/promo.svg"}
                width={"15"}
                height={"15"}
                alt="live seminar"
              ></Image>{" "}
              <p className="text-sm"> প্রোমো কোড</p>
            </div>
            <div className="flex items-center gap-2 border-b border-black">
              <Image
                src={"/images/share.svg"}
                width={"15"}
                height={"15"}
                alt="live seminar"
              ></Image>
              <p className="text-sm">শেয়ার</p>
            </div>
          </div>
        </div>
        <div>
          <Link
            href={"#"}
            className="bg-primary text-white w-full block mt-4 py-2 lg:py-3 text-center rounded-md hover:bg-secondary"
          >
            জয়েন লাইভ ব্যাচ
          </Link>
        </div>
      </div>

      {/* what will you get from this course  */}
      <div className="p-4 border-b">
        <h4 className="font-bold text-secondary text-[16px] mb-2">
          এই কোর্সে আপনি পাচ্ছেন
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 md:gap-0 sm:gap-4 gap-0">
          <div className={styles.list}>
            <ul>
              <li>৩ মাসের স্টাডিপ্ল্যান</li>
              <li>১২ টি ইলাস্ট্রেটর লাইভ ক্লাস</li>
              <li>৬ টি ফ্রিল্যান্সিং মাস্টারক্লাস</li>
              <li>ক্লাস রেকর্ডিং ও কমিউনিটি সাপোর্ট</li>
              <li>সার্টিফিকেট</li>
            </ul>
          </div>
          <div className={styles.list}>
            <ul>
              <li>১৩ টি ফটোশপের লাইভ ক্লাস</li>
              <li>৪ টি জব গাইডলাইন মাস্টারক্লাস</li>
              <li>১০+ ইন্ডাস্ট্রি ফোকাসড প্রজেক্ট</li>
              <li>প্রোগ্রেস ট্র্যাকিং ও এসেসমেন্ট</li>
            </ul>
          </div>
        </div>
      </div>
      {/* call us  */}
      <div className="p-4 text-center flex xl:flex-row md:flex-col xsm:flex-row flex-col xl:gap-4 md:gap-0 xsm:gap-3 gap-0 justify-center">
        <div className="flex items-center gap-2 justify-center">
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
  );
}
