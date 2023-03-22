import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import JitImage from "./Image";

export default function Footer() {
  return (
    <footer className="bg-orangeBg">
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 pt-16 pb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="col-start-1 col-end-1 md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-2 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <a href="/">
              {/* <div className="relative w-full max-w-[160px] h-full"> */}
              <div className="relative h-12 w-screen max-w-[140px]">
                <Image
                  src="/images/Logo.svg"
                  alt="logo"
                  fill
                  sizes="100vw, 100vh"
                />
              </div>
            </a>
          </div>
          <p className="w-8/12 lg:w-10/12 mx-auto lg:mx-0 mt-4 text-secondary">
            অন ক্যাম্পাস কিংবা অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।
          </p>
          <div className="mt-8">
            <p className="w-8/12 lg:w-10/12 mx-auto lg:mx-0 mt-4 text-secondary">
              {" "}
              কমিউনিটি- এর সাথে কানেক্টেড থাকতে
            </p>
            <div className="social-icons flex justify-center lg:justify-start gap-4 mt-3">
              <button className="hover:scale-[1.1] transition-all">
                <Image
                  src={"/images/footer-socials (1).png"}
                  width={"30"}
                  height={"30"}
                  alt="footer icon"
                ></Image>
              </button>
              <button className="hover:scale-[1.1] transition-all">
                <Image
                  src={"/images/footer-socials (2).png"}
                  width={"30"}
                  height={"30"}
                  alt="footer icon"
                ></Image>
              </button>
              <button className="hover:scale-[1.1] transition-all">
                <Image
                  src={"/images/footer-socials (3).png"}
                  width={"30"}
                  height={"30"}
                  alt="footer icon"
                ></Image>
              </button>
              <button className="hover:scale-[1.1] transition-all">
                <Image
                  src={"/images/footer-socials (4).png"}
                  width={"30"}
                  height={"30"}
                  alt="footer icon"
                ></Image>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-start lg:pl-8">
          <h3 className="text-secondary text-lg font-bold mb-4">কুইক লিঙ্ক</h3>
          <ul className={styles.links}>
            <li>
              <a href="#">ফ্রি সেমিনার রেজিস্ট্রেশন</a>
            </li>
            <li>
              <a href="#">আমাদের সম্পর্কে</a>
            </li>
            <li>
              <a href="#">সাপোর্ট</a>
            </li>
            <li>
              <a href="#">সফলতার গল্প</a>
            </li>
            <li>
              <a href="#">এক্সপার্ট মেন্টরস</a>
            </li>
            <li>
              <a href="#">আপনার প্রশ্নসমূহ</a>
            </li>
          </ul>
        </div>
        <div className="text-center lg:text-start lg:pl-8">
          <h3 className="text-secondary text-lg font-bold mb-4">অন্যান্য</h3>
          <ul className={styles.links}>
            <li>
              <a href="#">আমাদের সম্পর্কে</a>
            </li>
            <li>
              <a href="#">আমাদের সুবিধাদি</a>
            </li>
            <li>
              <a href="#">আমাদের অর্জন</a>
            </li>
            <li>
              <a href="#">ক্যারিয়ার প্লেসমেন্ট</a>
            </li>
            <li>
              <a href="#">স্টুডেন্ট ফিডব্যাক</a>
            </li>
            <li>
              <a href="#">যোগাযোগ</a>
            </li>
          </ul>
        </div>
        <div className="text-center lg:text-start lg:pl-8F">
          <h3 className="text-secondary text-lg font-bold mb-4">যোগাযোগ</h3>
          <ul className={styles.links}>
            <li className="flex items-start justify-center lg:justify-start">
              <div>
                <Image
                  src={"/images/support-icon.svg"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  alt="support icon"
                ></Image>
              </div>
              <a className="ml-2" href="#">
                09 639 739 839
              </a>
            </li>
            <li className="flex items-start justify-center lg:justify-start">
              <div>
                <Image
                  src={"/images/phone-icon.svg"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  alt="support icon"
                ></Image>
              </div>
              <a className="ml-2" href="#">
                +8801 983 984 985
              </a>
            </li>
            <li className="flex items-start justify-center lg:justify-start">
              <div>
                <Image
                  src={"/images/mail-icon.svg"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  alt="support icon"
                ></Image>
              </div>
              <a className="ml-2" href="#">
                support@jitinst.net
              </a>
            </li>
            <li className="flex items-start justify-center lg:justify-start">
              <div>
                <Image
                  src={"/images/map-icon.svg"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  alt="support icon"
                ></Image>
              </div>

              <a className="ml-2" href="#">
                লেভেল ১০, শেখ হাসিনা সফটওয়্যার টেকনোলজি পার্ক, যশোর।
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:container px-4 lg:px-0 mx-auto pb-20">
        <div className="max-w-[800px] mx-auto">
          <Image
            src={"/images/payment-image.png"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt="payment Image"
          ></Image>
        </div>
        <p className="text-center text-sm md:text-base mt-8 text-text">
          Copyright © 2023 JIT Institute. All right reserved |{" "}
          <span className="text-primary">
            <a href="#">Sitemap</a>
          </span>
        </p>
      </div>
    </footer>
  );
}
