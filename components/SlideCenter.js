import Image from "next/image";
import Slider from "react-slick";
export default function CenterSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="container center-slider mx-auto">
      <h2>Center Mode</h2>
      <Slider {...settings}>
        <div className="border bg-blue-100">
          <div className="p-3">
            {" "}
            <Image
              src={"/images/instructor-sohan-khan.svg"}
              width={"300"}
              height={"300"}
              alt="instructor icon"
            ></Image>
          </div>
        </div>
        <div className="border">
          <Image
            src={"/images/instructor-sohan-khan.svg"}
            width={"300"}
            height={"300"}
            alt="instructor icon"
          ></Image>
        </div>
        <div className="border">
          <Image
            src={"/images/instructor-sohan-khan.svg"}
            width={"300"}
            height={"300"}
            alt="instructor icon"
          ></Image>
        </div>
        <div className="border">
          <Image
            src={"/images/instructor-sohan-khan.svg"}
            width={"300"}
            height={"300"}
            alt="instructor icon"
          ></Image>
        </div>
        <div className="border">
          <Image
            src={"/images/instructor-sohan-khan.svg"}
            width={"300"}
            height={"300"}
            alt="instructor icon"
          ></Image>
        </div>
        <div className="border">
          <Image
            src={"/images/instructor-sohan-khan.svg"}
            width={"300"}
            height={"300"}
            alt="instructor icon"
          ></Image>
        </div>
      </Slider>
    </div>
  );
}
