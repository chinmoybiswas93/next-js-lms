import Image from "next/image";

export default function JitImage({ src, classes }) {
  return (
    <div
      className={"relative " + `${classes}`}
    >
      <Image
        src={src}
        fill
        sizes="100vw, 100vh"
        className="object-contain"
        alt="JIT Image"
      ></Image>
    </div>
  );
}
