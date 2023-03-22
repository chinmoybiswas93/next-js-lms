import Image from "next/image";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Instructor({ instructorId }) {
  console.log("instructor id ", instructorId);
  const {
    data: instructor,
    error,
    isLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/instructors?id=${instructorId}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <div className="flex items-center gap-4 shadow-lg rounded-lg p-4 border-l-4 border-primary">
      <div className="border rounded-full">
        <Image
          src={`/images/${instructor[0]?.img}`}
          width={"60"}
          height={"60"}
          alt="instructor image"
        ></Image>
      </div>
      <div>
        <h4 className="font-bold text-[20px] text-secondary">
          {instructor[0]?.name}
        </h4>
        <p className="font-medium text-[16px] text-secondary">
          {instructor[0]?.faculty}
        </p>
      </div>
    </div>
  );
}
