import Image from "next/image";

export default function OrientationBooking() {
  return (
    <div className="bg-[#F2F2F2] p-4 rounded-md xsm:flex-row flex-col flex justify-between">
      <div className="flex gap-4 items-center">
        <div>
          <Image
            src={"/images/orientation-booking.svg"}
            width={"50"}
            height={"50"}
            alt="orientation booking"
          ></Image>
        </div>
        <div>
          <p className="text-text font-medium">ফ্রি ওরিয়েন্টেশন ক্লাস</p>
          <div className="flex gap-2 mt-1">
            <Image
              src={"/images/calender.svg"}
              width={"16"}
              height={"16"}
              alt="calender"
            ></Image>
            <p className="font-bold text-secondary">
              ২৫ ডিসেম্বর, রবিবার, ৩:০০ PM
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary xsm:w-auto w-full xsm:mt-0 mt-4">
          সিট বুক করুন
        </button>
      </div>
    </div>
  );
}
